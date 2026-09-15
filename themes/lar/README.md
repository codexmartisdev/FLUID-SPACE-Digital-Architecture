# LaR Theme

Canonical visual identity namespace for **LaR Arquitetura e Interiores**.

G4 promotes this directory to the active visual source of truth. `app/globals.css` imports `theme.css` and consumes its semantic tokens while existing pages continue to render with the same approved visual language.

## Source of truth

- `theme.css` — runtime CSS custom properties used by the interface.
- `theme.ts` — typed contract for React/TypeScript code, future admin tooling and reusable components.

## Token groups

The LaR theme formalizes:

- mineral, cream, light and dark surfaces;
- primary/muted/on-dark text roles;
- subtle borders, focus and selection states;
- display/body/mono typography roles;
- card/panel/pill radii;
- section spacing and container/header metrics;
- fast/standard/slow motion and the FLUID easing curve;
- image saturation/contrast treatment used by the main heroes.

## Compatibility

Legacy aliases such as `--bg-site`, `--text-primary` and `--focus-ring` remain available in `theme.css`. They are intentional migration shims and prevent a broad visual refactor from changing the approved site while components are gradually moved to semantic `--lar-*` tokens.

## Rule

New shared components should consume `--lar-*` CSS tokens or values from `larTheme` instead of introducing new hard-coded brand colors. Page-specific composition may still use local values when they are truly unique to that composition.
