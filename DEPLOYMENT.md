# windows-95-portfolio

Deployed with GitHub Pages.

## Deployment

1. Update the `homepage` field in `package.json` to your GitHub Pages URL (e.g., https://<username>.github.io/<repo-name>/).
2. Add the following scripts to `package.json`:
   - "predeploy": "npm run build"
   - "deploy": "gh-pages -d build"
3. Run `npm run deploy` to publish.

---

## Example `package.json` changes

```
"homepage": "https://<username>.github.io/<repo-name>/",
"scripts": {
  ...existing scripts,
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

Replace `<username>` and `<repo-name>` with your GitHub username and repository name.
