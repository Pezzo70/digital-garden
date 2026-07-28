---
draft: true
---

# Books Notes

Rules for `notes/books/`. Used by the `books` agent.

## Purpose

Store public book notes and **raw user annotations**. The agent must not invent content.

## File per book

- One Markdown file per book in this folder.
- Filename = book title.
- Example: `O andar do bêbado.md`

## Frontmatter

```yaml
---
title: "Book title"
author: "Author name"
type: "book"
tags:
  - livro
draft: false
---
```

## Body template

```markdown
# Book title

**Autor:** Author name
**Tipo:** Livro

## Ideia central

## Notas

## Anotações
```

## Anotações

- Section name is exactly `## Anotações`.
- Each entry is the user's text **verbatim**.
- Never summarize, rewrite, translate, or add ideas.
- Every entry must have date and time:

```markdown
### YYYY-MM-DD HH:MM

texto do usuário exatamente como enviado
```

- Append new entries at the end of `## Anotações` (newest last).
- If the user already includes a timestamp, keep it; otherwise use `date '+%Y-%m-%d %H:%M'`.
- Only create/edit book notes in this folder.
- Images go under `public-notes/Resources/` (see below).

## Images

- User image paths (local uploads, absolute paths, etc.) must be copied to `../../Resources/` (repo root `Resources/`).
- Use a short kebab-case filename.
- Embed in the annotation as `![[filename.ext]]` (same pattern as other public notes).
- Never keep absolute local paths in the markdown — Quartz will not resolve them.

## Commit

After each annotation or image save:

1. Commit and push inside `public-notes/`.
2. Update and commit the submodule pointer in the private vault root.
