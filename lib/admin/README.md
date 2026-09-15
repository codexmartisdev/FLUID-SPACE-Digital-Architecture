# Admin Foundation

G11 prepares the administrative area without exposing or simulating privileged access.

## Rules

- `/admin` stays disabled until Firebase Authentication + MFA are connected.
- The UI shell must not write to localStorage as a substitute for a backend.
- Administrative components depend on domain/repository contracts, not directly on Firebase SDK calls.
- Authentication belongs behind the `AdminAuthGateway` contract.
- Firestore and Storage implementations are introduced only after the external Firebase configuration and security rules are ready.
- Enabling the route requires a real authorization gate; changing `shellEnabled` alone is not a production deployment procedure.

## Planned modules

Dashboard, Home, About, Projects, Services, Blog, Contact, Inbox and Media.
