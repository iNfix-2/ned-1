import React, { useState } from 'react';
import { X, Send, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function ContactModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    serviceInterest: 'Defence & Unmanned Systems',
    requirements: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-[#020E1C] border border-white/20 w-full max-w-xl p-6 sm:p-8 relative shadow-2xl tech-border text-left rounded-3xl">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-slate-400 hover:text-white p-1.5 border border-white/10 hover:border-white/30 rounded-full transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="space-y-2 mb-6">
              <div className="text-xs font-mono text-[#38bdf8] uppercase tracking-wider font-semibold flex items-center space-x-2">
                <span className="w-1.5 h-1.5 bg-[#38bdf8]"></span>
                <span>Let's Build the Future Together</span>
              </div>
              <h3 className="text-2xl font-extrabold text-white tracking-tight">
                Discuss Your Requirements
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Whether you need digital transformation, enterprise automation, intelligent systems, UAV technology, defence solutions, systems integration, or technical training, NETHAWK SOLUTIONS can develop a capability around your requirements.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 font-mono text-xs">
              <div>
                <label className="block text-slate-300 uppercase mb-1.5">Your Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Director Alex Morgan"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-[#031122] border border-white/10 px-3.5 py-2.5 text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 rounded-xl"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-300 uppercase mb-1.5">Work Email</label>
                  <input
                    type="email"
                    required
                    placeholder="name@organization.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#031122] border border-white/10 px-3.5 py-2.5 text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 rounded-xl"
                  />
                </div>

                <div>
                  <label className="block text-slate-300 uppercase mb-1.5">Organisation / Agency</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Government / Enterprise"
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    className="w-full bg-[#031122] border border-white/10 px-3.5 py-2.5 text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 rounded-xl"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-300 uppercase mb-1.5">Service of Interest</label>
                <select
                  value={formData.serviceInterest}
                  onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                  className="w-full bg-[#031122] border border-white/10 px-3.5 py-2.5 text-white focus:outline-none focus:border-blue-500 rounded-xl"
                >
                  <option value="Enterprise & Digital Solutions">Enterprise &amp; Digital Solutions</option>
                  <option value="Nethawk Defence Tech">Nethawk Defence Tech (UAV / ISR)</option>
                  <option value="AI, Data & Intelligent Systems">AI, Data &amp; Intelligent Systems</option>
                  <option value="Surveillance & Security Technology">Surveillance &amp; Security Technology</option>
                  <option value="Engineering & Systems Integration">Engineering &amp; Systems Integration</option>
                  <option value="Research & Innovation">Research &amp; Innovation</option>
                  <option value="Academy & Professional Training">Academy &amp; NATI Professional Training</option>
                </select>
              </div>

              <div>
                <label className="block text-slate-300 uppercase mb-1.5">Describe Your Requirements</label>
                <textarea
                  rows={3}
                  placeholder="Outline your project scope, operational challenge, or technical requirements..."
                  value={formData.requirements}
                  onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                  className="w-full bg-[#031122] border border-white/10 px-3.5 py-2 text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 rounded-xl"
                />
              </div>

              <div className="pt-2 flex items-center justify-between">
                <span className="text-[10px] text-slate-500 flex items-center">
                  <ShieldCheck className="w-3.5 h-3.5 mr-1 text-emerald-400" />
                  CONFIDENTIAL &amp; DIRECT CONSULTATION
                </span>

                <button
                  type="submit"
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold uppercase tracking-wider transition-colors flex items-center space-x-2 rounded-full"
                >
                  <span>Build the Solution</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="py-12 text-center space-y-4">
            <div className="w-16 h-16 mx-auto border-2 border-emerald-400 rounded-full flex items-center justify-center text-emerald-400">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold text-white">Inquiry Received</h3>
            <p className="text-xs text-slate-300 max-w-sm mx-auto font-mono">
              Thank you. The Nethawk Solutions engineering and capability team has received your request and will reach out to <span className="text-white font-bold">{formData.email}</span> shortly.
            </p>
            <div className="pt-4">
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="px-6 py-2.5 bg-white/10 hover:bg-white/20 text-white font-mono text-xs uppercase rounded-full"
              >
                Close Window
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
