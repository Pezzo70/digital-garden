# Codex Notes

This repository is the Quartz site application.

- `content/` is a Git submodule named `public-notes`.
- Quartz must keep using `content/` as the content folder path.
- When editing files inside `content/`, follow `content/AGENTS.md` and treat the work as changes to the separate `public-notes` repository.
- Do not place private vault notes or daily journal content in this repo.
- Keep Quartz app/config changes in this repository and public note changes in the submodule repository.
- After changing public notes, commit and push inside `content/`, then update and commit the submodule pointer here.
