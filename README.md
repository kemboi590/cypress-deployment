# **What this GitHub Actions workflow does**

This is a CI workflow that:

1. Runs when you **push to `main`** or open a **pull request targeting `main`**
2. Sets up Node.js and pnpm
3. Installs dependencies
4. Runs Cypress tests **against your live Vercel deployment**
5. Uploads Cypress screenshots/videos if the tests fail
