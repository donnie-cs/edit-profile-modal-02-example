# Code Review Exercise — Edit Profile Modal

Welcome, and thanks for taking the time! This is a short, collaborative **code review**
exercise. It's a conversation, not a test with a hidden answer key — we're interested in how
you think.

## Your task

A teammate has opened a pull request that adds an **Edit Profile modal dialog** to our
account-settings page. We'd like you to **review that PR** the way you would for a colleague:

> ### 👉 Open the PR: https://github.com/donnie-cs/edit-profile-modal-02-example/pull/1

Walk us through what you'd comment on, what you'd approve, and what (if anything) you'd ask the
author to change before merging. There's no single "correct" list — we care about how you read
code, how you **prioritize** (blocking vs. nice-to-have), and how you'd **communicate** the
feedback to the author.

## What a good review looks like here

Review it as you would any production PR — consider whether it is:

- **faithful to the design** and our design system,
- **accessible** and usable,
- **readable and maintainable**, and
- **production-ready**.

You're encouraged to **run the app and use your browser's dev tools** — this isn't a memory
test, and poking at the real thing is exactly what we'd want a teammate to do.

## The design & spec (your source of truth)

- **[`DESIGN_SYSTEM.md`](./DESIGN_SYSTEM.md)** — our design tokens and component guidelines.
  Implementations are expected to consume these.
- **[`docs/dialog.png`](./docs/dialog.png)** — the Figma design the dialog should match.

## Running it locally (optional)

```bash
npm install
npm run dev      # then open the printed localhost URL and click "Edit profile"
```

Requires Node 18+. The PR's changes live on the `pr/edit-profile-modal` branch; `main` is the
starting point before the modal was added.

## A few notes

- The project is intentionally small and **framework-free** (plain TypeScript + HTML + SCSS) so
  we can focus on fundamentals — whether your background is Angular, React, or something else.
- Take your time, think out loud, and ask questions. 🙂
