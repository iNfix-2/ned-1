import React, { useEffect, useState } from 'react';
import { X, Check, ArrowRight, Shield, Cpu, Activity, Radio, Layers, Download } from 'lucide-react';

export default function PlatformModal({ isOpen, platform, onClose, onRequestBrief }) {
  const [activePayload, setActivePayload] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
      setActivePayload(0);
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !platform) return null;

  const payloadList = platform.payloadOptions || [
    'Dual EO/MWIR Gimbal',
    'Synthetic Aperture Radar (SAR)',
    'Maritime AIS Receiver',
    'Encrypted Satcom BVLOS',
    'Tactical Mesh Relay'
  ];

  const capabilities = platform.capabilities || [
    'Dual optical/thermal gyro-stabilized gimbal feed',
    'Automatic maritime & land moving target detection (MTI)',
    'Autonomous waypoint tracking & emergency return',
    'Encrypted BVLOS command link with anti-jam resistance'
  ];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-[#020E1C] w-full max-w-4xl p-5 sm:p-8 relative shadow-2xl text-left rounded-3xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 z-20 text-slate-400 hover:text-white p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors backdrop-blur-sm"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Header with Image */}
        <div className="relative rounded-3xl overflow-hidden mb-6 aspect-[21/9] min-h-[180px] sm:min-h-[220px] shadow-xl">
          <img
            src={platform.image}
            alt={platform.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#020E1C] via-[#020E1C]/40 to-transparent"></div>
          
          <div className="absolute bottom-3 sm:bottom-4 left-4 sm:left-6 right-4 sm:right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
            <div>
              <h2 className="text-xl sm:text-4xl font-extrabold text-white tracking-tight">
                {platform.name}
              </h2>
            </div>
            <div className="inline-flex items-center space-x-2 px-3 sm:px-3.5 py-1 sm:py-1.5 bg-blue-600/25 text-blue-300 font-mono text-[10px] sm:text-[11px] rounded-full self-start sm:self-auto">
              <Shield className="w-3.5 h-3.5 text-blue-400" />
              <span>STANAG COMPLIANT</span>
            </div>
          </div>
        </div>

        {/* Platform Overview */}
        <div className="space-y-6">
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {platform.desc || platform.description || platform.tagline}
          </p>

          {/* Technical Specifications Matrix */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-slate-200 uppercase tracking-wide">
              Certified Technical Specifications
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 font-mono text-xs">
              <div className="bg-[#031122] p-3.5 rounded-2xl shadow-md">
                <span className="text-slate-400 text-[10px] uppercase block">Endurance</span>
                <span className="text-white font-bold text-sm mt-1 block">
                  {platform.specs?.endurance || '20+ Hours'}
                </span>
              </div>
              <div className="bg-[#031122] p-3.5 rounded-2xl shadow-md">
                <span className="text-slate-400 text-[10px] uppercase block">Wingspan</span>
                <span className="text-white font-bold text-sm mt-1 block">
                  {platform.specs?.wingspan || 'Composite Wing'}
                </span>
              </div>
              <div className="bg-[#031122] p-3.5 rounded-2xl shadow-md">
                <span className="text-slate-400 text-[10px] uppercase block">Takeoff Weight</span>
                <span className="text-white font-bold text-sm mt-1 block">
                  {platform.specs?.mtow || 'Tactical Class'}
                </span>
              </div>
              <div className="bg-[#031122] p-3.5 rounded-2xl shadow-md">
                <span className="text-slate-400 text-[10px] uppercase block">Payload</span>
                <span className="text-white font-bold text-sm mt-1 block">
                  {platform.specs?.payload || 'Modular Bays'}
                </span>
              </div>
              <div className="bg-[#031122] p-3.5 rounded-2xl shadow-md col-span-2 sm:col-span-1">
                <span className="text-slate-400 text-[10px] uppercase block">Datalink</span>
                <span className="text-white font-bold text-sm mt-1 block">
                  {platform.specs?.comms || 'BVLOS Satcom'}
                </span>
              </div>
            </div>
          </div>

          {/* Modular Payloads Configuration */}
          <div className="space-y-3 pt-2">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-semibold text-slate-200 uppercase tracking-wide">
                Modular Payload Packages
              </h4>
              <span className="text-[10px] font-mono text-slate-400">
                SWAPPABLE FIELD MODULES
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {payloadList.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => setActivePayload(idx)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all ${
                    activePayload === idx
                      ? 'bg-blue-600 text-white font-bold shadow-lg shadow-blue-500/20'
                      : 'bg-[#031122] text-slate-400 hover:text-white hover:bg-[#061933]'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Operational Capabilities */}
          <div className="space-y-3 pt-2">
            <h4 className="text-xs font-semibold text-slate-200 uppercase tracking-wide">
              Operational Mission Capabilities
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {capabilities.map((cap, i) => (
                <div key={i} className="flex items-start space-x-2 text-xs text-slate-300">
                  <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>{cap}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Row */}
          <div className="pt-6 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
            <div className="text-[10px] font-mono text-slate-500">
              DOSSIER // {platform.id?.toUpperCase() || 'DEFENCE-TECH'}
            </div>
            <div className="flex items-center space-x-3">
              <button
                onClick={onClose}
                className="px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white font-mono text-xs uppercase rounded-full transition-colors"
              >
                Close
              </button>
              <button
                onClick={() => {
                  onClose();
                  if (onRequestBrief) {
                    onRequestBrief(platform.name);
                  }
                }}
                className="px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-mono text-xs uppercase font-bold tracking-wider rounded-full transition-all flex items-center justify-center space-x-2 shadow-lg shadow-blue-500/25"
              >
                <span>Request Operational Brief</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
