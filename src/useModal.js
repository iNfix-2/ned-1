import { useEffect, useRef } from 'react';

const FOCUSABLE = 'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

// Open dialogs share one scroll lock, so closing one never unlocks the page under another
let openCount = 0;
let savedOverflow = '';

// Dialog behaviour shared by every modal: Escape closes, Tab stays inside the dialog, the page behind
// doesn't scroll, and focus returns to whatever opened the dialog when it closes.
// Attach the returned ref to the dialog panel.
export default function useModal(isOpen, onClose) {
  const panelRef = useRef(null);
  const onCloseRef = useRef(onClose);
  onCloseRef.current = onClose;

  useEffect(() => {
    if (!isOpen) return undefined;
    const opener = document.activeElement;

    if (openCount++ === 0) {
      savedOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
    }

    // Move focus into the dialog unless something inside already has it (e.g. a form heading)
    const panel = panelRef.current;
    if (panel && !panel.contains(document.activeElement)) {
      (panel.querySelector('[data-autofocus]') || panel.querySelector(FOCUSABLE) || panel).focus({ preventScroll: true });
    }

    const onKey = (e) => {
      if (e.key === 'Escape') {
        e.stopPropagation();
        onCloseRef.current();
        return;
      }
      if (e.key !== 'Tab' || !panelRef.current) return;
      const items = [...panelRef.current.querySelectorAll(FOCUSABLE)].filter((el) => el.offsetParent !== null);
      if (items.length === 0) { e.preventDefault(); return; }
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && (document.activeElement === first || !panelRef.current.contains(document.activeElement))) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener('keydown', onKey);

    return () => {
      document.removeEventListener('keydown', onKey);
      if (--openCount === 0) document.body.style.overflow = savedOverflow;
      if (opener && typeof opener.focus === 'function' && document.contains(opener)) opener.focus({ preventScroll: true });
    };
  }, [isOpen]);

  return panelRef;
}
