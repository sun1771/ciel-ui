---
'@acme/ui': patch
'@acme/icons': minor
---

Polish follow-up:

- SelectMenu: the menu opens right below the button even inside a flex row or grid that stretches its items.
- TabBar: with no selected tab, the first enabled tab is reachable with Tab.
- Carousel: the page-dot navigation is named after the carousel (`"<aria-label>: slides"`, or `labels.pagination`), so several carousels on one page have distinct landmarks.
- NavigationPanel: group headings use the heading text colour.
- Icons: new `Hamburger` icon.
