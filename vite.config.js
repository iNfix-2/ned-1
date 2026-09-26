import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Content-Security-Policy for the production build. Added only at build time because the dev
// server relies on inline scripts for hot reloading. frame-ancestors, HSTS and the other
// header-only protections must also be set at the edge (see docs/REVIEW-CHECKLIST.md).
// When VITE_INQUIRY_ENDPOINT points the inquiry form at a form service, its origin is allowed in connect-src.
const inquiryEndpoint = process.env.VITE_INQUIRY_ENDPOINT
const connectSrc = ["'self'", inquiryEndpoint && new URL(inquiryEndpoint).origin].filter(Boolean).join(' ')
const CSP = [
  "default-src 'self'",
  "script-src 'self'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data:",
  "font-src 'self' data:",
  "media-src 'self'",
  `connect-src ${connectSrc}`,
  'frame-src https://www.google.com',
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self' mailto:",
  'upgrade-insecure-requests',
].join('; ')

const cspPlugin = {
  name: 'inject-csp',
  apply: 'build',
  transformIndexHtml: () => [
    { tag: 'meta', attrs: { 'http-equiv': 'Content-Security-Policy', content: CSP }, injectTo: 'head-prepend' },
  ],
}

// Hosts allowed to reach the local preview server through the Cloudflare quick tunnel
const TUNNEL_HOSTS = ['.trycloudflare.com', 'localhost', '127.0.0.1']

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), cspPlugin],
  server: {
    // Use the port assigned by the launcher when there is one (avoids clashes between parallel dev servers).
    // Bound to this machine only: the dev server must never be reachable from the network or a tunnel.
    port: Number(process.env.PORT) || 3000,
    host: 'localhost',
  },
  preview: {
    // The tunnel script connects to 127.0.0.1, so the preview server needs no wider binding
    port: 3000,
    host: '127.0.0.1',
    allowedHosts: TUNNEL_HOSTS,
  }
})
