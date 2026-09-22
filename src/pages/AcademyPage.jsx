import React, { useEffect } from 'react';

export default function AcademyPage() {
  useEffect(() => {
    // Navigate directly to the official NATI Academy site
    window.location.replace('/academy/index.html');
  }, []);

  return (
    <div className="min-h-screen bg-[#121315] text-white flex flex-col items-center justify-center p-6">
      <div className="max-w-md text-center space-y-4">
        <div className="w-12 h-12 border-2 border-sky-400 border-t-transparent rounded-full animate-spin mx-auto"></div>
        <h2 className="text-xl font-bold tracking-wider uppercase">Loading NATI Academy...</h2>
        <p className="text-sm text-slate-400">Connecting to Nethawk Aviation Training Institute</p>
        <a 
          href="/academy/index.html" 
          className="inline-block mt-4 px-6 py-2.5 bg-[#1b365d] hover:bg-[#254a80] text-white rounded font-medium text-xs tracking-wider uppercase transition-colors"
        >
          Enter Academy Directly →
        </a>
      </div>
    </div>
  );
}
