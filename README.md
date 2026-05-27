<header>

# Marcomb GitHub Pages

</header>
<img src=/images/image1.jpg alt=marcomb width=300 align=right>

This repository contains the source for the personal website published at `https://www.marcocombetto.com`.

The site is built with Jekyll and GitHub Pages. Content pages are written in Markdown at the repository root, with shared includes for the language selector and any custom head code.

## What is included

- `index.md` — homepage content
- `*.md` — published site pages
- `_includes/` — reusable page fragments such as `language-switcher.html` and `head-custom.html`
- `assets/` — CSS and JavaScript used by the site
- `images/` — image assets
- `CNAME` — custom domain name for GitHub Pages
- `robots.txt` and `sitemap.xml` — site metadata

## Multi-language pages

Most pages use a simple language switcher with:

- `<div data-language-section="en">` for English content
- `<div data-language-section="it" hidden>` for Italian content

The JavaScript file `assets/js/language.js` toggles the visible section and preserves the selected language.

## Published URLs and permalinks

The public HTML URL is controlled by front matter:

- if a page includes `permalink: /page-name.html`, that becomes the published URL
- if `permalink` is omitted, Jekyll derives the URL from the source filename

For example:

- `aiachecklistpa.md` publishes as `https://www.marcocombetto.com/aiachecklistpa.html` when no permalink is set
- `aiarisks.md` publishes as `https://www.marcocombetto.com/aiarisks.html` when `permalink: /aiarisks.html` is present

## How to edit pages

1. Open the Markdown source file in the repository root.
2. Update the English and/or Italian sections.
3. Confirm the language blocks are properly closed with `</div>`.
4. If you change the filename and want the published URL to follow it, remove or update any existing `permalink`.

## Notes for collaborators

- Keep both language sections present when a page is multilingual.
- Validate that `language-switcher.html` is included near the top of each page.
- Avoid broken HTML by ensuring each `<div data-language-section>` block is closed.

<footer>

&copy; 1969-2026 Marco Combetto

</footer>
