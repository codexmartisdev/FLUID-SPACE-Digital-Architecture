# Config

Client/deployment-facing public configuration.

- `client.config.ts` is the canonical source for LaR identity and public contact fallbacks.
- `site.ts` is a compatibility facade retained during migration.
- secrets, Firebase credentials that are not public client configuration, service private keys and authorization logic do not belong here.
- G3 will expand this layer and replace current placeholder contact/social values with definitive LaR information.
