# Symbiotika website

A responsive homepage foundation using plain HTML, CSS and JavaScript.

## Local preview

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

Open http://127.0.0.1:8000.

## Structure

- `index.html` — homepage sections and semantic content.
- `css/styles.css` — responsive layout and original SVG artboard positioning.
- `js/main.js` — mobile navigation and optional supplied-asset loading.

## Asset references

The current/update bar embeds `assets/graphics/line.svg` directly as an external SVG object. Its wrapper retains `data-line-state` for a future hover interaction; the source is not modified or replaced.

Project cover paths currently follow the original brief. The actual project folder and file names still require verification against the supplied directory before these references can be confirmed.

All existing files in `assets/` and `source/` are unchanged. SVG artboard whitespace is handled using CSS viewports around external images.

## Prototype scope

Hero outlines are static; the hero collaboration asset is hidden. There is one current update strip. Project notes, opportunities, collaboration, support and archive links expand inline placeholder text. Newsletter and social connections are explicitly placeholders. No secondary pages, backend, donations, popups or animation are included.

## Verification

Initial prototype Chrome checks at 320, 390, 768 and 1440 CSS pixels passed: no horizontal overflow, valid internal links, no broken visible images, one update strip and hidden hero collaboration. Mobile menu opening and Escape dismissal also passed. Desktop and mobile screenshots were reviewed; SHA-256 checks confirmed all 19 supplied asset/source files were preserved.

The direct line SVG embed has been checked structurally; its rendering still requires verification once the exact file is accessible in this workspace.
