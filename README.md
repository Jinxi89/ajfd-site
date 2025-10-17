# Codex Setup Bundle

Dit pakket zet de basis klaar om met **OpenAI Codex (coding agent)** te werken in jouw repo, zonder dat er al app-code wordt aangemaakt.

## Wat zit erin?
- `.codex/plan.md` — Takenpakket en prompts om in Codex te plakken.
- `.github/ISSUE_TEMPLATE/` — Sjablonen voor Feature, Bug en Task.
- `.github/workflows/ci.yml` — CI-pipeline (install, lint, build, e2e smoke).
- `.github/workflows/setup-labels.yml` — Handmatige workflow om labels aan te (laten) maken.
- `.github/labels.json` — Labeldefinities (voor GitHub CLI of de labels-workflow).
- `CONTRIBUTING.md` — Werkafspraken met Codex.
- `SECURITY.md` — Beveiligingsrichtlijnen (ENV, secrets, approval-mode).
- `vercel.sample.json` — Voorbeeld Vercel-config (optioneel).
- `.env.example` — Voorbeeld environment-variabelen.

## Snel starten
1. Maak een lege GitHub-repo aan en commit deze map als eerste commit.
2. Ga naar **Actions** en run handmatig de workflow **“Setup labels (manual)”**.
3. Open Issues → **“Backlog: Codex takenpakket”** en start met Taak 1.
4. Start Codex in **Approval Mode** en plak de prompts uit `.codex/plan.md`.

> Tip: Gebruik branch protection op `main` en vereis dat CI slaagt + 1 review.
