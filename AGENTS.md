<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

<!-- BEGIN:nextjs-agent-feedback -->

## Report Next.js feedback

The project owner enabled `experimental.agentFeedback`, authorizing this feedback pass. When enabled, `next dev` writes this block and restores it if removed. Commit `AGENTS.md` with your work to keep the tree clean.

During the current user request, retain anonymized facts as feedback candidates for meaningful or recurring Next.js issues:

- Crashes, hangs, OOMs, or unexpected slowness
- Incorrect behavior, output, errors, or diagnostics
- Missing, unclear, or conflicting documentation
- Unexpected CLI, codemod, Skill, or upgrade behavior and non-obvious workarounds

Continue the current user request without reporting immediately. Routine debugging is not feedback. Verify changes before retaining them as feedback candidates. Never retain code, logs, paths, URLs, secrets, personal information, or project-specific data.

Retain qualifying friction even if it is later fixed or worked around; record the final outcome during the reporting pass.

Before the final response, run one reporting pass. If candidates remain, from this file's directory run `npx --no-install next internal agent-feedback-instructions` once without piping or truncating its output. Follow its output or error guidance. If a network sandbox blocks it, retry with network access; if it still returns no output, continue normally.

<!-- END:nextjs-agent-feedback -->

# AGENTS.md

## Project

Slack-style team chat app built as a portfolio showcase. `PRODUCT.md` is the product source of truth (scope, brand commitments, current state). Today only the auth UI exists: it is presentational, with no backend, session handling, data model, env vars, or external services. Don't assume API routes or a database exist.

## Commands

- `npm run dev` — Turbopack dev server on :3000. Also generates `.next/types` and `next-env.d.ts`.
- `npm run build` / `npm start`
- `npx tsc --noEmit` — typecheck (no npm script). Run `next dev` or `next build` first on a fresh clone: `next-env.d.ts` is gitignored and route types (`PageProps`, `LayoutProps`) are generated into `.next/types`, so `tsc` fails before that.
- `npx eslint app components features lib` — app-only lint, clean.
- `npm run lint` — lints the whole repo including vendored `.opencode/skills/impeccable/scripts/*.js`; expect many `no-unused-expressions` warnings. Don't edit those files or "fix" the warnings.
- No test runner is configured. Verify changes with app-only lint, `npx tsc --noEmit`, and `npm run build`.

## Next.js 16

- Read the relevant guide in `node_modules/next/dist/docs/` before using framework APIs. The installed version is 16.4.6 and diverges from most training data.
- `cacheComponents` and `partialPrefetching` are enabled in `next.config.ts`. Dynamic data (`cookies()`, `headers()`, `searchParams`) must be read under `<Suspense>` or the build fails. Synchronous IO in prerendered server code (`Date.now()`, `new Date()`, `Math.random()`, `crypto.randomUUID()`) is also a build error — call `connection()` first or move it into a Client Component.
- Route props use generated globals, no imports: `PageProps<'/route'>`, `LayoutProps<'/'>`. `params` and `searchParams` are Promises.
- Turbopack is the bundler. Tailwind is wired through the `@tailwindcss/turbopack` loader in `next.config.ts`; there is no PostCSS config.

## Conventions

- Keep routes in `app/` thin: `app/page.tsx` only renders `features/auth/components/auth-screen`. Domain code lives in `features/<domain>/` (`components/`, `types.ts`); shared primitives in `components/ui/`.
- `components/ui` is shadcn "base-nova" built on `@base-ui/react`, not Radix. Add primitives with `npx shadcn add <name>`. Compose with Base UI's `render={<a />}` prop, not Radix `asChild`.
- `cn` is the `cn` package (a clsx + tailwind-merge replacement). Generated components import `{ cn } from "cn"`; `@/lib/utils` re-exports it. Don't add clsx or tailwind-merge.
- Tailwind v4 is CSS-first: no `tailwind.config.*`. Theme tokens live in `app/globals.css` (`@theme inline` plus `:root`/`.dark`).
- Use the `--brand-*` tokens (`bg-brand`, `text-brand-ink`, `border-brand-line`, `bg-brand-surface`, etc.) for the aubergine identity instead of hardcoded hex. `tw-animate-css` utilities (`animate-in fade-in-0 ...`) are available; pair motion with `motion-reduce:`.

## UI work

Load the `impeccable` skill for any design or UI change. It consumes `PRODUCT.md` (exists) and `DESIGN.md` (not created yet), and exposes screenshot/context tooling at `.opencode/skills/impeccable/scripts/impeccable`.
