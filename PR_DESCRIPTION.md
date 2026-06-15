# Add Edit Profile modal dialog

**Author:** @jordan-dev  ·  **Branch:** `pr/edit-profile-modal` → `main`

## What this does

Implements the Edit Profile modal from the Figma (`docs/dialog.png`). Clicking
**Edit profile** opens a dialog with Name and Username fields and a **Save changes**
button. It also shows an "Editing as @username" hint at the top that updates after you
save, so you always see who you're editing. Closes via the X, the backdrop, or Save.

## Screenshots

Matches the design — navy dialog, rounded corners, centered overlay.

## How I tested

- Opened in Chrome, edited both fields, saved — the hint updates with the new username.
- X and backdrop both close it.
- Scrolled and resized the window with it open; it stays centered.

## Notes

- Kept the whole thing in one `initProfileModal()` so the flow is easy to follow top-to-bottom.
- Re-render the hint on open so it's always fresh.

## Checklist

- [x] Matches the design
- [x] Works in Chrome
- [x] No console errors

I think this is ready — let me know if anything stands out.
