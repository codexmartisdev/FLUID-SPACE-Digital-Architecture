# Security Core

This directory is the boundary for reusable application-security helpers and integration code.

## G13 — HTTP security baseline

The active HTTP security baseline is defined in `next.config.ts` and applies to every route.

Production responses include:

- `Content-Security-Policy` with `default-src 'self'`, `base-uri 'self'`, `object-src 'none'`, `frame-ancestors 'none'`, restricted form actions and no external client connections by default;
- `X-Content-Type-Options: nosniff`;
- `X-Frame-Options: DENY`;
- `Referrer-Policy: strict-origin-when-cross-origin`;
- restrictive `Permissions-Policy` for camera, microphone, geolocation, payment, USB and browsing topics;
- `Strict-Transport-Security` for HTTPS deployments;
- Next.js `X-Powered-By` disabled.

The development CSP is intentionally slightly broader so that local tooling and the Google AI Studio preview can continue to function. In development, framing is limited to the same origin and Google/AI Studio preview origins, WebSocket/HTTP(S) connections are permitted for development tooling, and `unsafe-eval` is allowed only for the development script policy. `X-Frame-Options: DENY` and HSTS are production-only.

## Future security layers

Firestore Rules, Firebase Authentication/MFA, App Check, Storage validation and administrative authorization are separate controls. They must not be replaced by frontend headers or client-side route guards.
