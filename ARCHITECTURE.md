# LaR — Application Architecture

This project keeps the visual/routing strengths of the FLUID SPACE implementation while adopting the separation of responsibilities proven in the consolidated Site-Eng base.

## Architectural rule

The project is divided into five layers with different responsibilities:

### `/app`
Next.js App Router routes and page composition.

- owns URLs, metadata boundaries and page composition;
- must not initialize Firebase directly;
- must not contain authorization rules;
- consumes reusable components and data/services through explicit interfaces.

### `/components`
Presentation and interaction.

- layout, motion, project galleries, sections and UI primitives;
- receives data through props/configuration;
- must not own Firebase initialization or security decisions;
- visual components should remain portable between deployments.

### `/config`
Client/deployment identity and public configuration.

- `client.config.ts` is the canonical LaR configuration;
- `site.ts` is a temporary compatibility facade for existing imports;
- no secrets belong here;
- G3 will replace current placeholder contact values with definitive LaR data.

### `/core`
Reusable application infrastructure.

Reserved domains:

- `core/firebase` — Firebase/App Check bootstrap and shared exports;
- `core/auth` — authentication/session helpers;
- `core/security` — reusable client/server security helpers;
- `core/storage` — upload/storage abstractions;
- `core/services` — integration services that are not presentation code.

G2 creates these boundaries only. Firebase, Auth, App Check and external services are intentionally **not** copied yet.

### `/data`
Current local content source.

- projects, articles and services currently live here;
- pages may keep using this source during the visual phase;
- G5/G6 will introduce typed models/adapters so Firestore can later replace local arrays without rewriting UI.

### `/themes`
Client visual identity.

- `themes/lar` is the canonical visual identity namespace;
- G4 will formalize semantic tokens and theme CSS;
- G2 does not import the theme into runtime yet, preventing visual changes.

## Compatibility with Site-Eng

We reuse the **layering strategy**, not the old SPA navigation model. The LaR site keeps App Router routes such as `/sobre`, `/servicos`, `/projetos`, `/blog` and `/contato`.

Future migration should move consolidated infrastructure from Site-Eng into `/core` behind the existing LaR routes and components.

## Dependency direction

Preferred direction:

`app -> components -> data/config`

and later:

`app/components -> core services -> Firebase/external services`

Never allow `core` to import presentation components.

## Safe migration rules

1. Preserve the current LaR visual output while structural work is in progress.
2. Do not copy Firebase configuration, credentials, rules or App Check piecemeal.
3. Do not place secrets in `config`, `data`, components or public environment variables.
4. Keep GitHub as the source of truth.
5. Introduce integrations through small, auditable commits.
6. Keep the current Site-Eng deployment untouched until the LaR deployment is fully validated.

## Current stage

- G1 — visual consolidation: complete.
- G2 — architectural compatibility: this document and the new boundaries.
- G3 — definitive client configuration: next.
- G4 — formal LaR theme tokens: later.
- Firebase/Admin/Security migration: after the GitHub-only preparation blocks.
