# Core

Reusable infrastructure for the LaR site.

This directory intentionally contains **no Firebase/Auth implementation during G2**. Its purpose now is to establish a stable boundary before importing the consolidated Site-Eng infrastructure.

Reserved domains:

- `firebase/` — Firebase client bootstrap, App Check and shared exports;
- `auth/` — authentication/session helpers;
- `security/` — reusable security helpers and guards;
- `storage/` — file/upload abstractions;
- `services/` — external/integration services.

Rules:

1. Core must not depend on presentation components.
2. Pages/components should consume core through explicit exports or adapters.
3. Secrets must never be committed here.
4. Firebase and authorization are migrated as a coherent block later, not file-by-file during G2.
