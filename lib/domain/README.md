# Domain Models

Canonical business/content contracts for the LaR site.

These models describe **what the application works with**, independent of where data is stored.

Current domains:

- `Project` and project metadata;
- `Article` and editorial themes;
- services, deliverables, process steps and project formats;
- public site configuration;
- contact messages and quote requests.

Rules:

1. Domain models must not import Firebase, Firestore, React or UI code.
2. Firestore-specific types such as `Timestamp` must be converted in repository/mapping code before reaching the domain layer.
3. Pages/components should consume domain-shaped data rather than persistence SDK objects.
4. Adding Firebase later must not require changing the visual model of a project/article merely because the storage format changes.
