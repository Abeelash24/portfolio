# TODO - Portfolio Angular Build Fixes

- [x] Initialize Angular standalone + router project under `portfolio/`.
- [x] Fix hero typing component import (standalone component path).
- [x] Fix missing `CommonModule` imports for standalone components (contact/project cards).
- [x] Fix SCSS `@use` paths for shared `variables.scss` / `mixins.scss`.
- [x] Remove unsafe `document` access from project cards template.
- [x] Fix `document` access in hero template by exposing `globalThis.document`.
- [x] Re-run `npm run build` and ensure compilation succeeds.
- [ ] (Optional) Reduce hero SCSS size to satisfy bundle budget (warning only).

