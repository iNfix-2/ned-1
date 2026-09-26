import React, { useEffect, useRef, useState } from 'react';
import { Pause, Play } from 'lucide-react';
import useReducedMotion from '../useReducedMotion';

// Muted, looping decorative video with a pause control. It starts paused (showing the poster) for
// visitors who prefer reduced motion. Render it inside a positioned (relative) container.
export default function BackgroundVideo({ src, poster, className = '', controlClassName = 'bottom-6 right-6' }) {
  const ref = useRef(null);
  const reducedMotion = useReducedMotion();
  const [playing, setPlaying] = useState(!reducedMotion);

  useEffect(() => { setPlaying(!reducedMotion); }, [reducedMotion]);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    if (playing) video.play().catch(() => setPlaying(false));
    else video.pause();
  }, [playing]);

  return (
    <>
      <video
        ref={ref}
        loop
        muted
        playsInline
        aria-hidden="true"
        className={`absolute inset-0 w-full h-full object-cover ${className}`}
        poster={poster}
        preload="metadata"
      >
        <source src={src} type="video/mp4" />
      </video>
      <button
        type="button"
        onClick={() => setPlaying((p) => !p)}
        aria-label={playing ? 'Pause background video' : 'Play background video'}
        className={`absolute z-20 p-2.5 rounded-full bg-black/40 hover:bg-black/60 border border-white/20 text-white transition-colors ${controlClassName}`}
      >
        {playing ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
      </button>
    </>
  );
}
