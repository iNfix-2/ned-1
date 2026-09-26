import React from 'react';

// A real link (so it can be opened in a new tab, copied or followed by crawlers) that still runs
// the app's navigation handler on a plain click.
export default function NavLink({ href, onNavigate, children, ...rest }) {
  const handleClick = (e) => {
    if (!onNavigate || e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    e.preventDefault();
    onNavigate();
  };
  return (
    <a href={href} onClick={handleClick} {...rest}>
      {children}
    </a>
  );
}
