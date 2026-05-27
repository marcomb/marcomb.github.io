# AGENTS.MD

## Repository overview

This repository is a personal static website built with GitHub Pages and Jekyll. The site content is written in Markdown files at the repository root, with shared includes in the `_includes` directory and supporting assets under `assets/`.

## Purpose

- Document the repository structure for agents and collaborators.
- Provide context for automation, tooling, and review workflows.
- Capture the naming and publication conventions used by the site.

## Key files and directories

- `_config.yml` — Jekyll site configuration.
- `CNAME` — custom domain name for GitHub Pages.
- `index.md` — homepage content.
- `*.md` — main site pages, each rendered as a published HTML page.
- `_includes/` — reusable page fragments, including `language-switcher.html` and `head-custom.html`.
- `assets/` — static CSS/JS resources.
- `images/` — site images.
- `robots.txt`, `sitemap.xml` — site metadata files.

## Published URL control

Pages are published according to Jekyll rules:

- If a Markdown page has a `permalink` in its front matter, that permalink defines the public URL.
- If `permalink` is omitted, the published URL is derived from the source file name and location.

Example:

- Source file `aiachecklistpa.md` publishes to `https://www.marcocombetto.com/aiachecklistpa.html` when no permalink is set.
- Source file `aiarisks.md` publishes to `https://www.marcocombetto.com/aiarisks.html` when `permalink: /aiarisks.html` is present.

## Language support

The site uses a JavaScript-driven language selector with these conventions:

- English and Italian page content are wrapped in `<div data-language-section="en">` and `<div data-language-section="it" hidden>`.
- The `language-switcher.html` include adds the language toggle buttons.
- `assets/js/language.js` controls the active language and preserves the selection.

## Notes for agents

- Prefer direct updates to page front matter and markup rather than changing the URL mapping unless explicitly requested.
- Validate that each page has both English and Italian sections when multilingual content is expected.
- Confirm that `permalink` values match the intended published URLs or remove them to let the source file name determine the URL.
- If a page appears blank in one language, inspect the surrounding HTML for missing `</div>` closures or malformed nesting.

## Recommended agent actions

- When fixing page issues, verify the file in the repository and the live published URL.
- Use the repository root as the reference point for changes.
- Do not assume the source filename and published URL are identical if a permalink is present.
