# Site Review Checklist

Tracks every finding from the full site review of 25 September 2026 (security, law and data
protection, design, development). Update the status as items are closed.

**Status key:** ✅ Done · 🟡 Partly done (see note) · ⛔ Needs your action or approval

## Summary

| Area | ✅ Done | 🟡 Partly | ⛔ Needs you |
|---|---|---|---|
| Security (S1–S9) | 4 | 2 | 3 |
| Law & data protection (L1–L9) | 3 | 3 | 3 |
| Design & UX (D1–D9) | 6 | 2 | 1 |
| Development (E1–E9) | 3 | 4 | 2 |

---

## 1. Security

| ID | Finding | Status | What was done / what is left |
|---|---|---|---|
| S1 | Portal README with demo password `Nethawk@2026` and 11 account emails is public (`public/academy/README.md`, `public/academy/site-only/README.md`), and the GitHub repo is public | ⛔ | **You:** (1) confirm `Nethawk@2026` is not used on any real portal and change it if it is; (2) approve deleting both READMEs; (3) remove them from git history (`git filter-repo`) and force-push; (4) consider making `iNfix-2/ned-1` private. Not done automatically because deleting files and rewriting history can't be undone. |
| S2 | Dev server exposed on the network (`0.0.0.0`, `cors: true`) and running vulnerable Vite 5 | ✅ | Upgraded to Vite 7.3 + plugin-react 5 (`npm audit`: 0 vulnerabilities). Dev server bound to `localhost`, CORS removed; preview bound to `127.0.0.1` with tunnel hosts only. |
| S3 | No HTTPS redirect, HSTS, CSP or Permissions-Policy on the live domain | 🟡 | A Content-Security-Policy is now added to every production build (`vite.config.js`), along with a referrer policy. **You (Cloudflare dashboard):** turn on *Always Use HTTPS* and *HSTS*, and add a Transform Rule setting `Permissions-Policy: camera=(), microphone=(), geolocation=()`, `X-Content-Type-Options: nosniff` and `Content-Security-Policy: frame-ancestors 'none'` (this last one can't be set from a meta tag). Tick *Enforce HTTPS* in GitHub Pages settings. |
| S4 | Inline script handlers block a strict CSP | 🟡 | Main site: Google Fonts `onload` handler removed and fonts self-hosted, so the CSP needs no inline scripts. Academy: all inline `onclick` handlers replaced with `data-scroll-to` plus one listener. Left: the Academy page still has one large inline `<script>` and inline styles, so any header CSP for `/academy/` needs `'unsafe-inline'` until that script moves to a file. |
| S5 | "DISCOVER NATI" linked to an unknown `tinyurl.com` address from the template | ✅ | Removed. The banner now links to the About section; also fixed the invalid nested links and same-page links that opened new tabs. |
| S6 | "Hidden" staff photos and raw headshots (`public/images/HEADSHOT/`, `public/assets/images/team/`) are still downloadable | ⛔ | **You:** approve removing the photos of hidden team members and the whole `HEADSHOT/` folder from `public/` (and from git history if the repo stays public). |
| S7 | Operational imagery: security personnel, checkpoints, the Gurara Dam, GCS and datalink close-ups | ⛔ | **You:** get the gallery and news photos cleared by clients and security partners; blur faces of security personnel and equipment identifiers where required. (No GPS data was found in any photo.) |
| S8 | CI used `npm ci \|\| npm install`; no dependency monitoring | ✅ | Workflow now uses `npm ci` only, runs `npm run lint` before building, and uses Node 22. Added `.github/dependabot.yml` (weekly npm, monthly Actions). |
| S9 | Google Maps iframe used `no-referrer-when-downgrade` | ✅ | Now `strict-origin-when-cross-origin`, and the map only loads on request (see L6). |

## 2. Law & data protection

| ID | Finding | Status | What was done / what is left |
|---|---|---|---|
| L1 | Tekever's products (GAMALINK, GAMASAR), ESA missions (HERA, PROBA-3) and Portuguese clients (EDP, GALP, Santander, AMA, GIRA) presented as Nethawk's | ⛔ | **Blocked pending your approval.** The change deletes `SpacePage.jsx` and `DigitalPage.jsx`, removes `SPACE_PRODUCTS` / `DIGITAL_SOLUTIONS` from the data file, renames `tekeverContent.js` → `siteContent.js`, and removes the `#/space` / `#/digital` routes. It was stopped by the permission system because it deletes files; say "go ahead" to apply it. The pages aren't in the menu, but anyone can still reach them at `#/space` and `#/digital`. |
| L2 | Inquiry form claimed "Your request is ready… we'll respond within 24 hours" but sent nothing | ✅ | The form now either posts to a form service (set `VITE_INQUIRY_ENDPOINT`, e.g. a Formspree or Web3Forms URL, as a GitHub Actions variable) or, if none is set, opens the visitor's email app and says plainly that they must press Send. It never reports success unless the request was delivered. Added a spam trap and an error message. **Recommended next step:** create the form-service endpoint so enquiries arrive without the email app. |
| L3 | Privacy policy too thin for the NDPA 2023 and GAID 2025 | 🟡 | Rewritten: who the controller is, what is collected, lawful basis per purpose, retention periods, sharing and cross-border transfers, the Google map, 72-hour breach notice, rights and response time, children, and a last-updated date. **You:** set a real Data Protection Officer mailbox (`DPO_EMAIL` in `PolicyModal.jsx`), have counsel review the text, and check whether Nethawk must register with the NDPC as a data controller of major importance. |
| L4 | Consent for staff photos and security-force imagery | ⛔ | **You:** get written consent from each person shown; remove anyone without consent (see S6). |
| L5 | Unverified claims and testimonial | ⛔ | Left unchanged for you to confirm (the AS9100 and 99% edits were part of the blocked L1 change). **You:** confirm or remove "AS9100 aerospace certification standards", "99%+ operational availability" (`tekeverContent.js`), "reduce lifecycle costs by up to 40%" (Blog), "thousands of operational flight hours", "20+ hour endurance", "SAR" and "maritime interdiction" (Why Us pillars, which also read as Tekever copy), plus the "Amina Bello" Academy testimonial. |
| L6 | Google Fonts and Google Maps sent visitor data to Google without consent | ✅ | Fonts are self-hosted (no Google Fonts requests). The map shows a "Show map" button with a notice and only loads Google after a click; there's also an "Open in Google Maps" link. |
| L7 | Copyright line had no year, entity type or RC number | 🟡 | Footer now reads "© {current year} Nethawk Solutions. All rights reserved." **You:** fill in `LEGAL_NAME` (e.g. "Nethawk Solutions Ltd") and `RC_NUMBER` in `Footer.jsx`, and the same `LEGAL_NAME` in `PolicyModal.jsx`. |
| L8 | Academy legal links 404'd; no privacy notice where the form collects data | ✅ | Policies now have their own addresses (`/#/privacy`, `/#/terms`, `/#/security`) that open the policy directly; Academy links point there. The form's last step shows a privacy notice linking to the policy. |
| L9 | Template leftovers (One League CSS and MUI classes; careers copy resembling other companies') | 🟡 | Template tinyurl, "2026 Official Brochure" title and generic social links removed. **You:** confirm the One League template licence (or plan an Academy rebuild, see D2) and confirm the Careers copy is original. |

## 3. Design & UX

| ID | Finding | Status | What was done / what is left |
|---|---|---|---|
| D1 | Placeholder content: `+234 000 000 0000`, empty team roles, generic Facebook/Instagram links, "Official Brochure" title, placeholder admission-letter PDF | 🟡 | Phone and WhatsApp are hidden until real numbers are entered (`CONTACT_PHONE`, `CONTACT_WHATSAPP` in `ContactPage.jsx`). Generic social links removed; title fixed. **You:** supply the phone numbers, team roles and full names (`TEAM` in `WhyUsPage.jsx`), real Facebook/Instagram pages if any, and the real admission letter (or approve deleting `admission-letter-temporary.pdf`). |
| D2 | Four visual styles (dark site, white news article, Careers bands, Academy template) | 🟡 | Careers buttons now use the site's rounded pill style. The Academy page still uses its own template; bringing it into the main design system is a larger rebuild for you to schedule. |
| D3 | Three contact emails (info@, contact@, admissions@) | ⛔ | **You:** confirm all three mailboxes receive mail and decide what each is for. |
| D4 | Auto-rotating hero, carousels and looping videos with no pause and no reduced-motion support | ✅ | Hero has a pause/play button. Hero, Atlas, mission and service carousels don't auto-advance for visitors who prefer reduced motion, and the secondary carousels pause on hover and keyboard focus. Background videos on Missions and Why Us are now a `BackgroundVideo` component with a pause button that starts paused for reduced-motion visitors. The Academy slider respects reduced motion. |
| D5 | Modals: no focus trap or focus return; the policy modal lacked dialog roles and reset page scroll | ✅ | New shared `useModal` hook (focus trap, Escape, shared scroll lock, focus returned to the opening button) used by the contact, policy and gallery modals, the gallery lightbox and the Missions video player. All have dialog roles and labels. Tested in the browser. |
| D6 | 10–11px text and `slate-500` text below AA contrast | ✅ | Footer link text raised to 12px; menu captions to 11px in `slate-400`; form helper text, step labels and summary labels moved from `slate-500`/`600` to `slate-400` (about 7:1 contrast). |
| D7 | Navigation built from buttons, so links couldn't be opened in a new tab or copied | ✅ | Navbar (desktop and mobile), footer and 404 links are now real links (`NavLink`) with proper addresses; plain clicks still navigate smoothly. Menu toggles report `aria-expanded`. |
| D8 | Timeline choice not a proper radio group | ✅ | Now a `radiogroup` with arrow-key movement and a single tab stop. |
| D9 | Mixed "Defence" / "Defense" | ✅ | Visible text uses "Defence"; `#/defence` and `#/defence-tech` addresses now work alongside the old ones. Internal file names still say "Defense" (not visible to visitors). |

## 4. Development

| ID | Finding | Status | What was done / what is left |
|---|---|---|---|
| E1 | About 224 MB of unreferenced media in `public/` (including five 26–39 MB `OPS LIVE` photos); repo history 580 MB; 12 MB brochure; 10 MB hero video | ⛔ | **You:** approve moving unreferenced files out of `public/` into a git-ignored archive folder; set up Git LFS or external storage for source media; compress the brochure and hero video; add an image pipeline (AVIF/WebP with `srcset`). |
| E2 | Hash-based URLs, so search engines effectively index only the home page; sitemap has 2 URLs | ⛔ | Needs a routing decision: move to real paths (React Router plus a GitHub Pages 404 fallback) or prerender pages (Astro or `vite-plugin-ssr`). Recommend prerendering; schedule it as its own piece of work. |
| E3 | 60-line if/else router; unknown addresses silently showed the home page | ✅ | `App.jsx` now uses one route table (component, aliases, title, description). Unknown addresses show a proper 404 page. |
| E4 | Navigation handlers passed both through context and as props | 🟡 | Home page, 404 page, Navbar and Footer now rely on context alone. Other pages still pass props (harmless); to be cleaned up page by page. |
| E5 | Dead code: unused `clsx` / `tailwind-merge`, Academy `assets/js/*`, `css/styles.css`, `static/css/*`, `js/tailwind-config.js`, `site-only/`, extensionless `NATI Logo (1)` files | 🟡 | `clsx` and `tailwind-merge` removed. **You:** approve deleting the unused Academy files, `site-only/` and the `NATI Logo (1)` files. Note: `@fontsource/inter` is now unused because the site switched to Roboto and Pilcrow in parallel work; it can be removed too. |
| E6 | No linting or checks in CI | ✅ | ESLint 9 with React, Hooks and `jsx-a11y` (`npm run lint`), wired into the deploy workflow. It found and fixed: keyboard access to story cards, unlabelled dialogs, an unused prop, and unescaped text. Current result: 0 errors, 2 minor Hook warnings. |
| E7 | Hero re-rendered on every scroll event | ✅ | Scroll updates are throttled to one per animation frame and only when the value changes. |
| E8 | Outdated dependencies (Vite 5, React 18, Tailwind 3, lucide 0.395) | 🟡 | Vite and plugin-react upgraded. React 19, Tailwind 4 and lucide 1.x are major upgrades; schedule them separately (Dependabot will raise them). |
| E9 | Deploy workflow listened on a nonexistent `master` branch; uncommitted NewsPage change | 🟡 | Workflow now deploys from `main` only. **You:** review and commit the working-tree changes (including the NewsPage image change); nothing has been committed or pushed. |

---

## Also noted while fixing

- **Captions:** the Missions page video player has no captions track. Add a `.vtt` file if the video contains speech (marked with a TODO in `MissionsPage.jsx`).
- **Parallel edits:** another session was changing fonts and styles in this folder at the same time as these fixes (switching to Roboto and Pilcrow Rounded). Review the combined diff before committing.
- **Local tunnel:** `dist/` has been rebuilt with all of the above. The Cloudflare quick tunnel in `live-url.txt` is no longer running; restart it with `scripts/run-live.ps1` to share a live preview.
