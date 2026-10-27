# Typography and colour audit

Audit includes all declarations, including older overridden rules. Homepage and Past Projects structure remains unchanged.

## Colours before cleanup

| Literal | Selectors / usage |
| --- | --- |
| `#111` | `.site-header` |
| `#191a19` | `:root` |
| `#2600ff` | `:root` |
| `#65634e` | `.current-date` |
| `#666` | `.about-node-label::before` |
| `#686963` | `:root` |
| `#979265` | `.current-inner>.eyebrow` |
| `#b8b9b0` | `:root` |
| `#deded6` | `.footer-bottom` |
| `#e9dfbd` | `.about-card` |
| `#eae1ce` | `.upcoming` |
| `#ebe7de` | `.archive-cover`, `.archive-gallery img` |
| `#f5f1e8` | `:root` |
| `#f6f1e6` | `.paper-sheet` |
| `#f7f6f1` | `:root` |
| `#faf8f2` | `.about-description` |
| `#ffe800` | `.site-header a:hover`, `.site-header a:focus-visible,.site-header button:focus-visible` |
| `#fff` | `:root`, `.site-header .wordmark`, `.site-header .wordmark:hover`, `.community-action .proposal-link` |
| `#fff49b` | `:root` |
| `#fff4b5` | `.community-action .proposal-link` |
| `rgba(25,26,25,.07)` | `.about-description` |
| `rgba(25,26,25,.18)` | `.about-toggle` |
| `rgba(25,26,25,.2)` | `.about-cards` |
| `rgba(25,26,25,.3)` | `.ticker-pause` |
| `rgba(25,26,25,.45)` | `.registration-ticker` |

Paper duplicates: #f7f6f1, #f5f1e8, #f6f1e6, #faf8f2. Yellow duplicates: #fff49b, #fff4b5, #ffe800. Near-grey duplicates: #686963, #666, #65634e; rules #b8b9b0, #deded6, #979265. Beige surfaces #eae1ce, #ebe7de and obsolete #e9dfbd are consolidated into paper or an ink-derived neutral. No green or teal interface accent was found.

JavaScript wordmark hover accents (outside CSS inventory): #567bff, #ffe800, #ff45d4, #ff8b38, #b483ff, #ff6fa9. These now reference shared palette tokens, retaining random colour changes.

## Complete original typography declaration inventory

- `:root`: `font-family:Arial,Helvetica,sans-serif`
- `body`: `font-size:14px`; `line-height:1.45`
- `h1,h2,h3`: `font-weight:400`
- `button,input`: `font:inherit`
- `.eyebrow`: `font-size:10px`; `line-height:1.7`; `letter-spacing:2px`
- `.small-note`: `font-size:11px`
- `.text-link,summary`: `font-size:12px`
- `.text-link span`: `font-size:20px`
- `.wordmark`: `font-size:21px`; `letter-spacing:5px`; `font-weight:600`
- `.main-nav a`: `font-size:13px`
- `.header-marker`: `font-size:20px`
- `.hero h1`: `font-size:clamp(32px,3vw,42px)`; `line-height:1.07`; `letter-spacing:-1.1px`
- `.intro`: `font-size:15px`; `line-height:1.4`
- `.down-link`: `font-size:28px`; `line-height:1`
- `.hero-note p:last-child`: `font-size:13px`; `line-height:1.4`
- `.hero-note .eyebrow`: `font-size:9px`; `letter-spacing:1.5px`
- `.current h2`: `font-size:20px`; `letter-spacing:-.5px`; `line-height:1.25`
- `.current-date`: `font-size:12px`
- `.section-index`: `font-size:10px`; `letter-spacing:1.5px`
- `.about h2`: `font-size:30px`; `line-height:1.08`; `letter-spacing:-.7px`
- `.about-copy>p:not(.eyebrow)`: `font-size:13px`
- `.principles h3`: `font-size:15px`
- `.principles p`: `font-size:13px`; `line-height:1.3`
- `.tag`: `font-size:8px`; `letter-spacing:1px`
- `.project-number`: `font-size:11px`
- `.projects h3`: `font-size:17px`; `line-height:1.2`
- `.project-description`: `font-size:12px`
- `.project-secondary h3`: `font-size:15px`
- `details>p`: `font-size:12px`
- `.connect-grid h3`: `font-size:20px`; `letter-spacing:-.3px`
- `.connect-grid article>p`: `font-size:13px`; `line-height:1.4`
- `.archive-content .eyebrow`: `font-size:8px`; `letter-spacing:1.5px`
- `.archive h3`: `font-size:22px`; `letter-spacing:-.4px`
- `.archive-content p:not(.eyebrow)`: `font-size:13px`
- `.footer-brand .wordmark`: `font-size:16px`; `letter-spacing:4px`
- `.footer-brand .eyebrow`: `font-size:9px`
- `.footer-nav`: `font-size:12px`
- `.newsletter h2`: `font-size:12px`
- `.newsletter>p`: `font-size:11px`
- `.email-field input`: `font-size:11px`
- `.email-field button`: `font-size:22px`
- `.newsletter #newsletter-status`: `font-size:10px`
- `.footer-social`: `font-size:11px`
- `.footer-social .eyebrow`: `font-size:9px`
- `.footer-social .small-note`: `font-size:9px`
- `.footer-bottom`: `font-size:10px`
- `.current h2`: `font-size:18px`
- `.hero h1`: `font-size:36px`
- `.wordmark`: `font-size:18px`; `letter-spacing:3.6px`
- `.main-nav a`: `font-size:12px`
- `.hero-copy .eyebrow`: `font-size:9px`
- `.hero h1`: `font-size:34px`
- `.intro`: `font-size:14px`
- `.current-inner>.eyebrow`: `font-size:9px`
- `.current h2`: `font-size:18px`
- `.current-date`: `font-size:11px`
- `.current .text-link`: `font-size:11px`
- `.about h2`: `font-size:29px`
- `.principles h3`: `font-size:14px`
- `.project-secondary h3`: `font-size:16px`
- `.connect-grid h3`: `font-size:19px`
- `.connect-grid article>p`: `font-size:12px`
- `.archive h3`: `font-size:20px`
- `.archive-content p:not(.eyebrow)`: `font-size:12px`
- `.eyebrow`: `font-size:9px`; `letter-spacing:1.5px`
- `.interaction-hint`: `font-size:10px`
- `.current h2`: `font-size:25px`
- `.project-number`: `letter-spacing:1px`; `font-size:9px`
- `.disclosure-button`: `font:inherit`; `font-size:12px`
- `.disclosure-button>span:last-child`: `font-size:18px`; `line-height:1`
- `.story-images figcaption`: `font-size:10px`; `letter-spacing:.5px`
- `.archive-toggle`: `font-size:10px`; `letter-spacing:1.4px`
- `.archive-strip figcaption`: `font-size:11px`
- `.archive-strip figcaption span`: `font-size:9px`
- `.archive-note`: `font-size:12px`
- `.current h2`: `font-size:22px`
- `.current h2`: `font-size:21px`
- `.event-line-composition h2`: `font-size:clamp(11px,1.25vw,18px)`; `letter-spacing:2px`
- `.programme-note`: `font-size:12px`
- `.event-pin`: `font-size:9px`
- `.event-poster>.eyebrow`: `font-size:9px`
- `.event-poster h3`: `font-size:29px`; `line-height:1.08`; `letter-spacing:-.6px`
- `.event-poster>p`: `font-size:11px`
- `.event-caption>p`: `font-size:11px`
- `.event-poster h3`: `font-size:25px`
- `.event-line-composition h2`: `font-size:12px`; `letter-spacing:1px`
- `.event-line-composition h2`: `font-size:11px`; `letter-spacing:.8px`
- `.event-caption>p`: `font-size:10px`
- `.project-grid .project-secondary h3`: `font-size:15px`
- `.event-line-composition h2`: `font-size:clamp(11px,1.1vw,16px)`; `letter-spacing:1.4px`
- `.event-posters .eyebrow`: `font-size:8px`; `letter-spacing:1.2px`
- `.event-posters h3`: `font-size:16px`; `line-height:1.2`
- `.event-posters figcaption>p`: `font-size:11px`; `line-height:1.5`
- `.about-copy h2`: `font-size:32px`
- `.about-chapters .chapter-label`: `font-size:9px`; `letter-spacing:1.7px`
- `.about-chapters h3`: `font-size:16px`
- `.about-chapters p:not(.chapter-label)`: `font-size:12px`
- `.chapter-number`: `font-size:10px`
- `.event-line-composition h2`: `font-size:10px`; `letter-spacing:.6px`
- `.about-copy h2`: `font-size:29px`
- `.event-line-composition h2`: `font-size:11px`
- `.event-posters h3`: `font-size:17px`
- `.event-posters figcaption>p`: `font-size:12px`
- `.about-copy h2`: `font-size:28px`
- `.event-line-composition h2`: `font-size:clamp(11px,1.1vw,16px)`
- `.event-details>p`: `font-size:12px`
- `.footer-nav>h2`: `font-size:9px`
- `.footer-nav summary`: `font-size:12px`
- `.footer-nav details>p`: `font-size:11px`
- `:root`: `font-family:"Avenir Next",Avenir,"Helvetica Neue",Helvetica,Arial,sans-serif`
- `body`: `font-size:15px`; `line-height:1.5`
- `.eyebrow`: `font-size:11px`; `letter-spacing:1.3px`; `line-height:1.5`
- `.small-note`: `font-size:12px`
- `.wordmark`: `letter-spacing:3.5px`
- `.hero h1`: `font-weight:500`; `letter-spacing:-1.2px`; `line-height:1.1`
- `.hero-note p:last-child,.about-copy>p:not(.eyebrow),.project-description`: `font-size:14px`
- `.hero-note .eyebrow,.interaction-hint`: `font-size:11px`
- `.text-link,.disclosure-button,summary,.main-nav a`: `font-size:13px`
- `.project-number,.tag,.event-posters .eyebrow`: `font-size:10px`; `letter-spacing:1px`
- `.event-posters figcaption>p`: `font-size:13px`
- `.story-images figcaption,.archive-strip figcaption`: `font-size:12px`
- `.footer-nav a,.footer-nav summary`: `font-size:13px`
- `.newsletter>p,.newsletter h2,.footer-social`: `font-size:12px`
- `.footer-brand .eyebrow,.footer-nav>h2,.footer-social .eyebrow`: `font-size:10px`; `letter-spacing:1px`
- `.footer-bottom`: `font-size:11px`
- `.event-line-composition h2`: `font-size:17px`; `letter-spacing:1px`
- `.event-pin`: `font-size:11px`
- `.event-posters h3`: `font-size:18px`; `font-weight:500`
- `.about-copy h2`: `font-weight:500`; `line-height:1.17`
- `.about-chapters .chapter-label`: `font-size:11px`; `letter-spacing:1.2px`
- `.about-chapters h3`: `font-size:17px`; `font-weight:500`
- `.about-chapters p:not(.chapter-label)`: `font-size:13px`; `line-height:1.5`
- `.connect-grid article>p`: `font-size:14px`
- `.connect-grid h3`: `font-size:21px`; `font-weight:500`
- `.eyebrow`: `font-size:10px`; `letter-spacing:1.1px`
- `.event-line-composition h2`: `font-size:15px`
- `.about-copy h2`: `font-size:28px`
- `.connect-grid article>p`: `font-size:13px`
- `.hero h1`: `font-size:34px`
- `@font-face`: `font-family:"Dosis Bleed"`; `font-weight:400`
- `.site-header .wordmark`: `font-family:var(--display)`; `font-size:clamp(38px,4.2vw,66px)`; `font-weight:400`; `letter-spacing:1px`
- `.site-header .main-nav a`: `font-family:var(--display)`; `font-size:clamp(25px,2.7vw,39px)`; `line-height:1.1`
- `.hero h1`: `font-family:var(--display)`; `font-weight:400`; `font-size:clamp(42px,5.1vw,72px)`; `line-height:1.05`; `letter-spacing:0`
- `.hero-copy .intro`: `font-size:17px`
- `.display-title,.event-line-composition h2,.projects>.section-heading h2,.connect>.section-heading h2`: `font-family:var(--display)`; `font-size:clamp(34px,4vw,56px)`; `line-height:1.05`; `font-weight:400`; `letter-spacing:.3px`
- `.project-archive>.archive-toggle`: `font-family:var(--display)`; `font-size:clamp(42px,6vw,82px)`; `line-height:1.05`; `letter-spacing:0`
- `.project-archive>.archive-toggle>span:last-child`: `font-family:Arial,sans-serif`; `font-size:40px`
- `.site-footer .wordmark`: `font-family:var(--display)`; `font-size:30px`; `font-weight:400`; `letter-spacing:1px`
- `.about-introduction>p`: `font-size:18px`; `line-height:1.4`
- `.about-toggle>span:first-child`: `font-family:var(--display)`; `font-size:31px`; `font-weight:400`; `letter-spacing:.3px`; `line-height:1`
- `.about-toggle .card-subtitle`: `font-size:14px`
- `.card-sign`: `font-size:25px`; `font-weight:300`
- `.paper-copy h4`: `font-size:25px`; `font-weight:500`; `line-height:1.2`
- `.paper-copy p`: `font-size:16px`; `line-height:1.7`
- `.hero-copy .intro`: `font-size:15px`
- `.site-header .wordmark`: `font-size:35px`
- `.site-header .main-nav a`: `font-size:29px`
- `.hero h1`: `font-size:clamp(33px,8.5vw,55px)`
- `.hero-copy .intro`: `font-size:16px`
- `.display-title,.event-line-composition h2,.projects>.section-heading h2,.connect>.section-heading h2`: `font-size:34px`
- `.about-introduction>p`: `font-size:16px`
- `.about-toggle>span:first-child`: `font-size:27px`
- `.about-toggle .card-subtitle`: `font-size:12px`
- `.paper-copy h4`: `font-size:23px`
- `.paper-copy p`: `font-size:15px`; `line-height:1.65`
- `.project-archive>.archive-toggle`: `font-size:48px`
- `.paper-about .display-title`: `font-family:var(--display)`; `font-size:clamp(34px,4vw,56px)`; `font-weight:400`; `line-height:1.05`
- `.paper-about .display-title`: `font-size:34px`
- `.project-archive>.archive-toggle`: `font-size:clamp(34px,10vw,44px)`
- `.project-archive>.archive-toggle>span:last-child`: `font-size:30px`
- `.event-line-composition h2`: `font-size:clamp(28px,8.5vw,34px)`
- `.site-header .wordmark`: `font-size:36px`; `line-height:1`
- `.site-header .main-nav a`: `font-family:var(--body-font)`; `font-size:16px`; `font-weight:500`; `line-height:1.4`
- `.hero h1`: `font-size:clamp(40px,4.6vw,65px)`
- `.display-title,.paper-about .display-title,.event-line-composition h2,.projects>.section-heading h2,.connect>.section-heading h2`: `font-size:clamp(32px,3.5vw,49px)`
- `.about-toggle>span:first-child`: `font-family:var(--body-font)`; `font-size:21px`; `font-weight:650`; `letter-spacing:1px`
- `.about-toggle .card-subtitle`: `font-size:15px`
- `.card-sign`: `font:300 26px/1 var(--body-font)`
- `.project-archive>.archive-toggle`: `font-size:clamp(40px,5vw,68px)`
- `.site-footer .wordmark`: `font-size:30px`
- `.site-footer .footer-brand .eyebrow`: `font-family:var(--body-font)`; `font-size:11px`; `letter-spacing:.7px`; `line-height:1.6`
- `.footer-nav>h2,.newsletter>h2,.footer-social>.eyebrow`: `font-family:var(--body-font)`; `font-size:11px`; `line-height:1.4`; `font-weight:600`; `letter-spacing:1px`
- `.footer-nav>a,.footer-nav summary,.footer-social summary,.footer-social>a`: `font-family:ui-monospace,"SFMono-Regular",Menlo,Consolas,monospace`; `font-size:13px`; `line-height:1.5`
- `.footer-nav details>p,.footer-social details>p`: `font-size:12px`; `line-height:1.5`
- `.newsletter>p`: `font-size:13px`
- `.email-field input`: `font-size:13px`
- `.newsletter #newsletter-status`: `font-size:11px`
- `.footer-bottom`: `font-size:11px`
- `.site-header .main-nav a`: `font-size:14px`
- `.site-header .wordmark`: `font-size:30px`
- `.site-header .wordmark`: `font-size:30px`
- `.site-header .main-nav a`: `font-size:17px`
- `.hero h1`: `font-size:clamp(32px,8.2vw,49px)`
- `.display-title,.paper-about .display-title,.event-line-composition h2,.projects>.section-heading h2,.connect>.section-heading h2`: `font-size:clamp(28px,8vw,33px)`
- `.about-toggle>span:first-child`: `font-size:18px`
- `.about-toggle .card-subtitle`: `font-size:13px`
- `.project-archive>.archive-toggle`: `font-size:clamp(34px,10vw,44px)`
- `.site-footer .wordmark`: `font-size:25px`
- `.ticker-copy`: `font-size:13px`; `font-weight:600`; `letter-spacing:1.2px`
- `.ticker-pause`: `font:inherit`; `font-size:11px`
- `.ticker-copy`: `font-size:11px`; `letter-spacing:.8px`
- `.ticker-copy`: `line-height:1.7`
- `.about-statement h3`: `font-size:clamp(24px,2.5vw,34px)`; `font-weight:500`; `line-height:1.25`
- `.about-statement p`: `font-size:15px`; `line-height:1.7`
- `.concept-index dt`: `font-size:11px`; `font-weight:600`; `letter-spacing:1.2px`
- `.concept-index dd`: `font-size:15px`
- `.archive-entry .text-link>span`: `font:32px/1 var(--body-font)`
- `.archive-project-copy h2`: `font-size:clamp(25px,2.5vw,35px)`; `font-weight:500`; `line-height:1.2`
- `.archive-gallery figcaption`: `font-size:12px`
- `.concept-index dd`: `font-size:14px`
- `@font-face`: `font-family:"About Dosis Bleed"`; `font-weight:400`
- `.about-network-intro h2`: `font:400 clamp(34px,3.5vw,49px)/1.05 "About Dosis Bleed",sans-serif`
- `.about-network-intro h3`: `font:500 clamp(23px,2.3vw,32px)/1.3 var(--body-font)`
- `.about-network-intro>p`: `font-size:15px`; `line-height:1.7`
- `.about-node`: `font-family:var(--body-font)`
- `.about-node-label`: `font-size:12px`; `font-weight:650`; `letter-spacing:1px`
- `.about-node-subtitle`: `font-size:13px`; `line-height:1.4`
- `.about-description-category`: `font-size:10px`; `letter-spacing:1px`
- `.about-description h3`: `font:500 18px/1.3 var(--body-font)`
- `.about-description-copy`: `font-size:14px`; `line-height:1.55`
- `.about-description-close`: `font:22px/1 var(--body-font)`
- `.about-node-subtitle`: `font-size:15px`
- `.about-node-label::before`: `font-size:9px`; `font-weight:400`; `letter-spacing:.5px`
- `.connect-welcome h1`: `font-size:clamp(42px,5vw,70px)`
- `.connect-welcome-copy h2`: `font-size:clamp(25px,2.6vw,36px)`; `line-height:1.25`; `font-weight:500`
- `.connect-welcome-copy p`: `font-size:16px`; `line-height:1.7`
- `.connection-methods article p`: `font-size:15px`; `line-height:1.7`
- `.connection-methods .text-link`: `font-size:11px`; `letter-spacing:.6px`
- `.community-intro p`: `font-size:17px`; `line-height:1.7`
- `.community-groups p`: `font-size:15px`; `line-height:1.75`
- `.community-action .proposal-link`: `font-size:13px`; `font-weight:600`; `letter-spacing:.5px`
- `.community-action p`: `font-size:13px`
- `.connection-methods .text-link`: `letter-spacing:0`; `font-size:10px`
- `.connect-welcome h1`: `font-size:clamp(36px,10vw,48px)`
- `.connection-methods .text-link`: `font-size:12px`
- `.community-intro p`: `font-size:16px`
- `.community-action .proposal-link`: `font-size:11px`

## Final system

Fonts: body Avenir Next → Avenir → Helvetica Neue → Helvetica → Arial → sans-serif (system fonts, not bundled). Supplied Dosis Bleed and About Dosis Bleed remain for expressive headings/wordmarks, with Arial Narrow/sans-serif fallbacks. Footer retains its existing ui-monospace / SFMono-Regular / Menlo / Consolas / monospace editorial stack. Navigation uses the body face consistently. No display font in body paragraphs.

Type scale: 11px labels, 12px captions, 14px compact copy/navigation, 16px body, 18px compact subheads, 20px introductions, 28px small headings, 36px intermediate titles; responsive section headings 32–48px and hero titles 40–64px. Existing context-specific fluid title sizes and glyph sizing remain where needed. Body leading is 1.5; display leading 1.05. Compact UI retains 1–1.4 and some readable paper copy 1.55–1.6.

Palette: paper #f5f1e8; ink #191a19; white #ffffff for inverse wordmark; blue #2600ff; yellow #ffe800; thermal pink #ff45a0; thermal orange #ff8b38; muted #686963; rules ink at 28%. Derived paper shade: 5% ink; yellow tint: 24% yellow; thermal tint: 12% orange. Other ink opacity treatments retained for subtle rules/shadow.

The former combined Collaborate composition has been split into Contact and Collaborate; see the current page guidance below.

Only shared typography/colour declarations change on other pages. No homepage/Past Projects layout selectors or markup changed.


## Contact and Collaborate — current structure

Contact (`contact.html`) handles direct communication: LET’S CONNECT, welcome copy, supplied contact.svg, Instagram, LinkedIn and direct email. The asymmetric desktop composition stacks on mobile. Collaborate (`collaborate.html`) invites joint projects: BE PART OF IT, supplied symbiotika_collaboration.svg, seven audience groups and the original prefilled collaboration proposal email. Header and footer Contact destinations point to contact.html on all four pages; existing other footer functions remain.

### Two levels of colour

| Family | Strong accent | Soft surface |
| --- | --- | --- |
| Blue | #2600ff | --blue-soft: #d8d2ff |
| Yellow | #ffe800 | --yellow-soft: #fff3a6 |
| Pink | #ff45a0 | --pink-soft: #ffd1e5 |
| Orange | #ff8b38 | --orange-soft: #ffd8bd |

Strong colours are for small rules, hover states, arrows and graphic details. Soft variants are for large panels. Paper #f5f1e8, ink #191a19 and muted #686963 remain. Supplied artwork is unchanged and retains its full saturation. Pink-soft is available but not used in these panels.

Contact: Instagram uses blue-soft with a cobalt rule; LinkedIn stays on paper with a cobalt rule; Email uses yellow-soft with a yellow rule. Collaborate: Individuals uses blue-soft, Programmers & Curators orange-soft, Sponsors & Donors yellow-soft; the other four groups stay on paper. Final CTA remains ink.

### Typography actually used on these pages

Body/navigation/labels/CTAs: Avenir Next, Avenir, Helvetica Neue, Helvetica, Arial, sans-serif. Major headings: supplied Dosis Bleed; existing About Dosis Bleed elsewhere is unchanged. Footer retains ui-monospace, SFMono-Regular, Menlo, Consolas, monospace. Wordmark fonts remain unchanged.

Page headings use --heading-lg (clamp 40px–64px, 4.6vw). Contact welcome subheading uses --heading-sm (28px). Paragraphs use --text-base (16px), line-height 1.5. Method labels use --text-xs (11px); method CTAs 11px desktop / --text-caption (12px) mobile. Proposal CTA uses --text-sm (14px) desktop / 11px mobile; helper text 14px. Arrow glyphs use --text-lg (20px). Shared navigation remains 16px, weight 500, line-height 1.4. No new size tokens added. The full standard scale and original historical inventory remain above.
