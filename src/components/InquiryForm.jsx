import React, { useState, useRef, useEffect, useId } from 'react';
import {
  Shield, Plane, Radar, Cpu, Monitor, Wrench, FlaskConical, GraduationCap,
  ArrowLeft, ArrowRight, Check, CheckCircle2, Mail,
} from 'lucide-react';

// Guided 3-step inquiry form shared by the contact modal and the Contact page.
// Submission is front-end only: the success screen offers a pre-filled email as the delivery path.

export const INQUIRY_EMAIL = 'info@nethawksolutions.org';

const SERVICES = [
  { id: 'defence', label: 'Defence Tech', hint: 'UAV & ISR systems', icon: Shield },
  { id: 'das', label: 'Drone as a Service', hint: 'Crews & aircraft on demand', icon: Plane },
  { id: 'software', label: 'SkyGrid & Affenas', hint: 'Mission & comms software', icon: Radar },
  { id: 'ai', label: 'AI & Data', hint: 'Intelligent systems', icon: Cpu },
  { id: 'digital', label: 'Enterprise & Digital', hint: 'Digital solutions', icon: Monitor },
  { id: 'engineering', label: 'Engineering', hint: 'Systems integration', icon: Wrench },
  { id: 'research', label: 'Research & Innovation', hint: 'Nethawk Labs', icon: FlaskConical },
  { id: 'academy', label: 'NATI Academy', hint: 'Training & certification', icon: GraduationCap },
];

const TIMELINES = ['As soon as possible', '1–3 months', '3–6 months', 'Just exploring'];

const STEPS = ['Service', 'Your Details', 'Project'];

const EMPTY = { services: [], name: '', email: '', organization: '', phone: '', timeline: '', message: '' };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const fieldClass = (hasError) =>
  `w-full px-4 py-3 rounded-lg bg-white/5 border text-white placeholder-slate-500 text-sm focus:outline-none transition-colors ${
    hasError ? 'border-rose-400/70 focus:border-rose-400' : 'border-white/15 focus:border-sky-400'
  }`;

function validate(step, data) {
  const errors = {};
  if (step === 0 && data.services.length === 0) errors.services = 'Choose at least one area so we can route you to the right team.';
  if (step === 1) {
    if (!data.name.trim()) errors.name = 'Please enter your name.';
    if (!EMAIL_RE.test(data.email.trim())) errors.email = 'Please enter a valid email address.';
    if (!data.organization.trim()) errors.organization = 'Please enter your organisation.';
  }
  if (step === 2) {
    if (!data.timeline) errors.timeline = 'Pick a timeline.';
    if (data.message.trim().length < 10) errors.message = 'Tell us a little about what you need (at least 10 characters).';
  }
  return errors;
}

function buildMailto(data) {
  const serviceLabels = SERVICES.filter((s) => data.services.includes(s.id)).map((s) => s.label).join(', ');
  const subject = `Inquiry: ${serviceLabels} (${data.organization})`;
  const details = [
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    `Organisation: ${data.organization}`,
    ...(data.phone ? [`Phone: ${data.phone}`] : []),
    `Services: ${serviceLabels}`,
    `Timeline: ${data.timeline}`,
  ];
  const body = `${details.join('\n')}\n\n${data.message}`;
  return `mailto:${INQUIRY_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

function FieldError({ id, children }) {
  if (!children) return null;
  return <p id={id} className="text-xs text-rose-300" role="alert">{children}</p>;
}

export default function InquiryForm({ title = 'Discuss Your Requirements', titleId, onDone, doneLabel = 'Done', compact = false }) {
  const [step, setStep] = useState(0);
  const [data, setData] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const stepHeadingRef = useRef(null);
  const uid = useId();

  // Move focus to the new step's heading so keyboard and screen-reader users follow along
  // (skipped on first render so the form doesn't steal focus when a page loads)
  const hasMounted = useRef(false);
  useEffect(() => {
    if (!hasMounted.current) { hasMounted.current = true; return; }
    stepHeadingRef.current?.focus({ preventScroll: true });
  }, [step]);

  // Functional updates so rapid successive changes never read stale state
  const clearError = (field) => setErrors((prev) => (prev[field] ? { ...prev, [field]: undefined } : prev));

  const set = (field) => (e) => {
    const { value } = e.target;
    setData((prev) => ({ ...prev, [field]: value }));
    clearError(field);
  };

  const toggleService = (id) => {
    setData((prev) => ({
      ...prev,
      services: prev.services.includes(id) ? prev.services.filter((s) => s !== id) : [...prev.services, id],
    }));
    clearError('services');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const stepErrors = validate(step, data);
    setErrors(stepErrors);
    if (Object.keys(stepErrors).length) return;
    if (step < STEPS.length - 1) setStep(step + 1);
    else setSubmitted(true);
  };

  const reset = () => {
    setData(EMPTY);
    setErrors({});
    setStep(0);
    setSubmitted(false);
  };

  if (submitted) {
    return (
      <div className="min-h-[420px] flex flex-col items-center justify-center text-center space-y-5 py-6">
        <CheckCircle2 className="w-16 h-16 text-sky-400" strokeWidth={1.5} />
        <div className="space-y-2">
          <h3 className="text-2xl font-semibold text-white">Thank you, {data.name.split(' ')[0]}</h3>
          <p className="text-slate-300 text-sm max-w-sm leading-relaxed">
            Your request is ready. Our capability team will respond to <span className="text-white">{data.email}</span> within 24 hours.
          </p>
        </div>
        <a
          href={buildMailto(data)}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/25 text-xs font-medium text-slate-200 hover:text-white hover:border-white/60 transition-colors"
        >
          <Mail className="w-4 h-4" /> Also send it by email
        </a>
        <div className="flex gap-3 pt-2">
          <button type="button" onClick={reset} className="px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-xs font-medium text-white transition-all">
            New Request
          </button>
          {onDone && (
            <button type="button" onClick={() => { reset(); onDone(); }} className="px-5 py-2.5 rounded-full bg-white text-black hover:bg-slate-200 text-xs font-semibold transition-all">
              {doneLabel}
            </button>
          )}
        </div>
      </div>
    );
  }

  const selectedLabels = SERVICES.filter((s) => data.services.includes(s.id)).map((s) => s.label);

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      {/* Header */}
      <div className="space-y-1 pr-10">
        <h2 id={titleId} className={`${compact ? 'text-2xl sm:text-3xl' : 'text-3xl sm:text-4xl'} font-semibold text-white`}>{title}</h2>
      </div>

      {/* Progress */}
      <div className="space-y-3" aria-label={`Step ${step + 1} of ${STEPS.length}`}>
        <div className="flex items-center">
          {STEPS.map((label, i) => (
            <React.Fragment key={label}>
              <div className="flex items-center gap-2 shrink-0">
                <span
                  className={`w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-semibold border transition-colors ${
                    i < step ? 'bg-sky-400 border-sky-400 text-[#020e1c]' : i === step ? 'border-sky-400 text-sky-300' : 'border-white/20 text-slate-500'
                  }`}
                >
                  {i < step ? <Check className="w-3.5 h-3.5" strokeWidth={3} /> : i + 1}
                </span>
                <span className={`hidden sm:inline text-xs ${i === step ? 'text-white font-medium' : 'text-slate-500'}`}>{label}</span>
              </div>
              {i < STEPS.length - 1 && (
                <div className="flex-1 h-px mx-3 bg-white/15 relative overflow-hidden">
                  <div className={`absolute inset-y-0 left-0 bg-sky-400 transition-all duration-500 ${i < step ? 'w-full' : 'w-0'}`} />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
        <p className="text-[11px] uppercase tracking-[0.18em] text-slate-500">Step {step + 1} of {STEPS.length}</p>
      </div>

      {/* Step body */}
      <div key={step} className="space-y-5 motion-safe:animate-step-in">
        {step === 0 && (
          <fieldset className="space-y-4">
            <legend ref={stepHeadingRef} tabIndex={-1} className="text-base font-medium text-white focus:outline-none mb-4">
              What do you need help with? <span className="text-slate-500 font-normal text-sm">Select all that apply.</span>
            </legend>
            <div className="grid grid-cols-2 gap-3">
              {SERVICES.map(({ id, label, hint, icon: Icon }) => {
                const active = data.services.includes(id);
                return (
                  <button
                    key={id}
                    type="button"
                    role="checkbox"
                    aria-checked={active}
                    onClick={() => toggleService(id)}
                    className={`relative text-left p-3.5 rounded-xl border transition-all ${
                      active ? 'bg-sky-400/10 border-sky-400 shadow-[0_0_0_1px_rgba(56,189,248,0.4)]' : 'bg-white/[0.03] border-white/10 hover:border-white/30 hover:bg-white/[0.06]'
                    }`}
                  >
                    <Icon className={`w-5 h-5 mb-2 ${active ? 'text-sky-300' : 'text-slate-300'}`} strokeWidth={1.5} />
                    <span className="block text-sm font-medium text-white leading-tight">{label}</span>
                    <span className="block text-[11px] text-slate-400 mt-0.5 leading-snug">{hint}</span>
                    {active && (
                      <span className="absolute top-2.5 right-2.5 w-4 h-4 rounded-full bg-sky-400 flex items-center justify-center">
                        <Check className="w-2.5 h-2.5 text-[#020e1c]" strokeWidth={3.5} />
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
            <FieldError>{errors.services}</FieldError>
          </fieldset>
        )}

        {step === 1 && (
          <div className="space-y-4">
            <h3 ref={stepHeadingRef} tabIndex={-1} className="text-base font-medium text-white focus:outline-none">How can we reach you?</h3>
            <div className="space-y-2">
              <label htmlFor={`${uid}-name`} className="text-xs text-slate-400">Full Name</label>
              <input id={`${uid}-name`} type="text" autoComplete="name" placeholder="Your name" value={data.name} onChange={set('name')} aria-invalid={!!errors.name} aria-describedby={`${uid}-name-err`} className={fieldClass(errors.name)} />
              <FieldError id={`${uid}-name-err`}>{errors.name}</FieldError>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor={`${uid}-email`} className="text-xs text-slate-400">Work Email</label>
                <input id={`${uid}-email`} type="email" autoComplete="email" placeholder="name@organisation.com" value={data.email} onChange={set('email')} aria-invalid={!!errors.email} aria-describedby={`${uid}-email-err`} className={fieldClass(errors.email)} />
                <FieldError id={`${uid}-email-err`}>{errors.email}</FieldError>
              </div>
              <div className="space-y-2">
                <label htmlFor={`${uid}-phone`} className="text-xs text-slate-400">Phone <span className="text-slate-600">(optional)</span></label>
                <input id={`${uid}-phone`} type="tel" autoComplete="tel" placeholder="+234 ..." value={data.phone} onChange={set('phone')} className={fieldClass(false)} />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor={`${uid}-org`} className="text-xs text-slate-400">Organisation / Agency</label>
              <input id={`${uid}-org`} type="text" autoComplete="organization" placeholder="Organisation" value={data.organization} onChange={set('organization')} aria-invalid={!!errors.organization} aria-describedby={`${uid}-org-err`} className={fieldClass(errors.organization)} />
              <FieldError id={`${uid}-org-err`}>{errors.organization}</FieldError>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-5">
            <h3 ref={stepHeadingRef} tabIndex={-1} className="text-base font-medium text-white focus:outline-none">Tell us about your project</h3>

            <fieldset className="space-y-2">
              <legend className="text-xs text-slate-400 mb-2">Timeline</legend>
              <div className="flex flex-wrap gap-2">
                {TIMELINES.map((t) => (
                  <button
                    key={t}
                    type="button"
                    role="radio"
                    aria-checked={data.timeline === t}
                    onClick={() => { setData((prev) => ({ ...prev, timeline: t })); clearError('timeline'); }}
                    className={`px-4 py-2 rounded-full text-xs font-medium border transition-colors ${
                      data.timeline === t ? 'bg-sky-400 border-sky-400 text-[#020e1c]' : 'border-white/15 text-slate-300 hover:border-white/40 hover:text-white'
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
              <FieldError>{errors.timeline}</FieldError>
            </fieldset>

            <div className="space-y-2">
              <label htmlFor={`${uid}-msg`} className="text-xs text-slate-400">Requirements</label>
              <textarea id={`${uid}-msg`} rows={compact ? 3 : 4} placeholder="Outline your project scope, operational challenge or technical requirements..." value={data.message} onChange={set('message')} aria-invalid={!!errors.message} aria-describedby={`${uid}-msg-err`} className={`${fieldClass(errors.message)} resize-none`} />
              <FieldError id={`${uid}-msg-err`}>{errors.message}</FieldError>
            </div>

            {/* Review summary */}
            <div className="rounded-xl bg-white/[0.03] border border-white/10 p-4 text-xs space-y-1.5">
              <div className="flex justify-between gap-4"><span className="text-slate-500">Services</span><span className="text-slate-200 text-right">{selectedLabels.join(', ')}</span></div>
              <div className="flex justify-between gap-4"><span className="text-slate-500">Contact</span><span className="text-slate-200 text-right truncate">{data.name} · {data.email}</span></div>
              <div className="flex justify-between gap-4"><span className="text-slate-500">Organisation</span><span className="text-slate-200 text-right">{data.organization}</span></div>
            </div>
          </div>
        )}
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between gap-3 pt-1">
        {step > 0 ? (
          <button type="button" onClick={() => { setErrors({}); setStep(step - 1); }} className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm text-slate-300 hover:text-white hover:bg-white/5 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back
          </button>
        ) : <span />}
        <button
          type="submit"
          className={`inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full text-sm font-semibold transition-all ${
            step === STEPS.length - 1 ? 'bg-sky-400 text-[#020e1c] hover:bg-sky-300' : 'bg-white text-black hover:bg-slate-200'
          }`}
        >
          {step === STEPS.length - 1 ? 'Send Request' : 'Continue'}
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </form>
  );
}
