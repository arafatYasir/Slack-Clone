# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

**Product users:** members of a small team working in a shared workspace. They sign in, find the right channel or person, and hold a conversation without losing context.

**Showcase audience:** hiring managers, clients, and peers evaluating this build as portfolio work. They arrive skeptical of "another Slack clone" and judge whether it looks, feels, and functions like a real product end to end.

Device priority is undecided; desktop-first is the current working assumption.

## Product Purpose

A Slack-like team communication workspace built as a portfolio showcase. It exists to demonstrate that its builder can ship a complete, polished, full-stack product: real accounts, persisted messages, and the workspace essentials around them. Success means a reviewer can sign in, use the workspace, and come away believing it is production product work rather than a UI mockup.

## Positioning

End-to-end completeness with real persistence and real accounts. The product does not stop at a static interface: chat and workspace essentials run against a live backend, so the showcase proves product engineering rather than visual mockup skill alone.

## Operating Context

- Conversation in channels and direct messages is the core loop.
- A shared workspace is the unit of use; team members join, find their conversations, and stay in context across sessions.
- Sign-in offers email/password plus Google and GitHub OAuth.
- Reviewers explore the product in a browser as portfolio work, and may arrive without guidance.

## Capabilities and Constraints

- Repository evidence: Next.js 16 (App Router), React 19, Tailwind CSS v4, shadcn/ui-style components on Base UI, lucide-react, and react-icons.
- Current state: only the auth surface exists (`app/page.tsx` → `features/auth`). Email/password fields and the Google/GitHub buttons are present but non-functional; there is no backend, session handling, or data model yet.
- Confirmed scope: chat plus workspace essentials, specifically channels, direct messages, threads, presence, search, and file sharing.
- Backend and persistence are required. The provider (for example Convex, Supabase, or another) is undecided.
- Accessibility standard is undecided.
- Final product name is undecided.

## Brand Commitments

- Working name: "slack-clone" (explicit placeholder).
- Presentation: Slack-like workspace look and feel — the familiar purple/aubergine workspace character — with its own name and identity, not an impersonation of Slack.
- The Slack-like presentation is a binding reference confirmed by the user.

## Evidence on Hand

- No real users, testimonials, case studies, press coverage, seed conversations, or brand assets exist yet.
- `public/` contains only the default create-next-app SVGs, and app metadata is still the Next.js default.
- Future work must not fabricate customer logos, quotes, metrics, or usage claims.

## Product Principles

1. **Ship the whole loop.** Every visible affordance a reviewer can reach should work against real data, not a dead control.
2. **Feel like a product, not an exercise.** Use the workspace patterns people already know, then make the execution distinctly ours.
3. **Persistence is the proof.** Accounts, messages, and workspace state survive reloads and sessions.
4. **Reviewers explore alone.** The experience must be self-explanatory without a guided tour or annotations.
