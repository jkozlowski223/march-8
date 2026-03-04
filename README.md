# GitHub Pages Deployment

This project is configured to publish to GitHub Pages using the `gh-pages` branch.

## Deploy

Run:

`npm run deploy`

That command will:
- Build the app
- Push the `build/` output to the `gh-pages` branch

Your site URL:

`https://jkozlowski223.github.io/march-8`

## One-time GitHub setting

In your GitHub repository:
- Go to **Settings** → **Pages**
- Under **Build and deployment**, set **Source** to **Deploy from a branch**
- Select branch: **gh-pages** and folder: **/(root)**
