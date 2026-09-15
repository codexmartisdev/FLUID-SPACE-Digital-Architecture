# Data Access Layer

Application-facing data access for LaR.

## Current flow

`data/*.ts` → local repository implementation → repository contract → application-facing functions

## Future Firebase flow

Firestore → mapper/repository implementation → same repository contract → application-facing functions

The current repository registry uses the local implementation intentionally. Firebase, authentication and App Check are not initialized in G6.

### Public facade

Import read operations from `@/lib/data`:

- `getProjects()`
- `getProjectBySlug()`
- `getProjectSlugs()`
- `getArticles()`
- `getArticleBySlug()`
- `getArticleSlugs()`
- `getBlogThemes()`
- `getServices()`
- `getDeliverables()`
- `getServiceProcessSteps()`
- `getProjectFormats()`

### Persistence contracts

`ContactRepository` exists only as a contract during G6. It deliberately has no fake/local persistence implementation. Real contact and quote persistence will be registered only when Firebase is integrated.

### Migration rule

Pages and components must never import the Firebase SDK directly. Any Firestore implementation belongs behind these repository contracts.
