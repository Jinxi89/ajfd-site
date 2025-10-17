# SECURITY

- Nooit secrets committen. Gebruik `.env` lokaal en project-secrets in hosting (Vercel/Netlify).
- Houd **Approval Mode** aan voor Codex; geen write-toegang buiten projectmap.
- Activeer branch protection op `main` + verplichte check-runs (CI).
- Rotatie van API keys en beperkte permissies (principle of least privilege).
