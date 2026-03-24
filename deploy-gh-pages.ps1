# Deploy to GitHub Pages (main site)
# This deploys to https://YOUR_USERNAME.github.io/
# Replace with your actual username!

$GITHUB_USERNAME = "YOUR_USERNAME"  # ← CHANGE THIS!

npm run build
npx gh-pages -d dist -r "https://github.com/$GITHUB_USERNAME/$GITHUB_USERNAME.github.io.git"

Write-Host "✅ Deployed to GitHub Pages!"
Write-Host "Visit: https://$GITHUB_USERNAME.github.io"
