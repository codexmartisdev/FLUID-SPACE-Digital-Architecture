# Data

Static/local content used by the current LaR implementation.

## Role after G5/G6

`data/` is a **content seed / compatibility source**, not the persistence API of the application.

- `data/projects.ts` contains the current project seed;
- `data/articles.ts` contains the current editorial seed;
- `data/services.ts` contains services, deliverables, process steps and formats;
- `data/faq.ts` remains presentation content.

Canonical domain contracts live in `lib/domain/`.

Repository contracts and application-facing data access live in `lib/data/`.

Existing pages may continue importing these arrays during the compatibility phase so G5/G6 does not alter rendered output. New persistence work must not import Firestore directly into pages/components. During the Firebase phase, repository implementations will replace the local source behind `lib/data/`.
