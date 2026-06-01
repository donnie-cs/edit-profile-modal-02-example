# Aurora Design System — Quick Reference

> This is the **source of truth** for visual styling. Components must consume these
> tokens (defined in `src/styles/tokens.scss`) via `var(--token-name)`. Never hardcode
> raw colors, pixel spacing, or radii in a component.

## Principles

1. **Token-driven** — all color, spacing, radius, and type come from tokens so themes and
   future rebrands stay consistent. A raw value like `margin-top: 13px` or `#3b82f6` is a bug.
2. **Accessible by default** — components are keyboard operable, expose correct semantics
   and ARIA, and keep a visible focus indicator. WCAG 2.1 AA is the bar.
3. **Responsive** — components adapt down to a 320px viewport; no fixed pixel widths that
   overflow small screens.
4. **Reusable** — components are self-contained and themeable, not one-off implementations.

## Color tokens

| Token | Value | Use |
| --- | --- | --- |
| `--color-primary` | `#1a1f2e` | Primary action background (brand navy) |
| `--color-primary-hover` | `#2d3548` | Primary action hover |
| `--color-on-primary` | `#ffffff` | Text/icon on primary |
| `--color-surface` | `#ffffff` | Dialog / card background |
| `--color-text` | `#1a1f2e` | Body text |
| `--color-text-muted` | `#65718a` | Secondary / description text |
| `--color-border` | `#e2e8f0` | Borders (inputs, containers) |
| `--color-overlay` | `rgba(15,23,42,0.5)` | Modal backdrop scrim |
| `--color-focus-ring` | `#2563eb` | Visible keyboard focus ring |

## Spacing scale (4px base)

| Token | Value |
| --- | --- |
| `--spacing-xs` | 4px |
| `--spacing-sm` | 8px |
| `--spacing-md` | 16px |
| `--spacing-lg` | 24px |
| `--spacing-xl` | 32px |

## Radius

| Token | Value |
| --- | --- |
| `--radius-sm` | 4px |
| `--radius-md` | 8px |
| `--radius-lg` | 12px |

## Typography

| Token | Value |
| --- | --- |
| `--font-size-sm` | 14px |
| `--font-size-md` | 16px |
| `--font-size-lg` | 20px |
| `--font-weight-regular` | 400 |
| `--font-weight-semibold` | 600 |

## Modal dialog spec (from Figma — `docs/dialog.png`)

- Surface background, `--radius-lg` corners, `--shadow-modal` elevation.
- Title (`--font-size-lg`, semibold) + muted description below it.
- Two labelled fields: **Name** and **Username**.
- Primary **Save changes** button (brand navy) bottom-right.
- Backdrop uses `--color-overlay`.
- Must be keyboard accessible: focus moves into the dialog, `Esc` closes it, focus is
  trapped while open and returns to the trigger on close.
