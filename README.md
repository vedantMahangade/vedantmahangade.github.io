# vedantmahangade.github.io
This portfolio website is created using a a template from [HTML5UP](https://html5up.net/). Parts of the HTML and CSS code has been modified to suit my needs of the website.

## Editing content
- Update all page copy in `assets/data/siteContent.json` (hero, socials, about, resume link, projects, experience, publications, certifications, skills, contact text).
- Add or swap project images in `images/` and point to them from the JSON file.
- Social links in that same JSON are reused in both the header and footer.

## How it works
- `assets/js/content.js` loads `assets/data/siteContent.json` and renders it into the placeholders in `index.html`.
- `assets/js/projects.js` renders the project grid from the provided data.
- No build step is required—changes to the JSON will appear on the next page load or GitHub Pages deploy.
