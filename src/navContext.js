import { createContext, useContext } from 'react';

// Site-wide navigation handlers, provided once by App so every Navbar/Footer
// works regardless of which props an individual page forwards.
export const NavContext = createContext({});

// Context handlers, overridden by any handler a component was explicitly given.
export function useNavHandlers(props = {}) {
  const merged = { ...useContext(NavContext) };
  for (const [key, value] of Object.entries(props)) {
    if (value !== undefined) merged[key] = value;
  }
  return merged;
}

// Address of a page inside the single-page app ('news' → '#/news', 'home' → '#/')
export const pageHref = (page) => (page === 'home' ? '#/' : `#/${page}`);
