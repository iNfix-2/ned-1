import { useEffect, useState } from 'react';

const QUERY = '(prefers-reduced-motion: reduce)';

// True when the visitor has asked their system for less motion; slideshows and videos then stay still
export default function useReducedMotion() {
  const [reduced, setReduced] = useState(() => typeof window !== 'undefined' && window.matchMedia(QUERY).matches);
  useEffect(() => {
    const mq = window.matchMedia(QUERY);
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);
  return reduced;
}
