# CV / Resume variants

The website's **Resume** and **CV** buttons use the general ATS version:

- `portfolio/src/assets/Resume - Valentinus Gilbert Sanjaya.pdf`
- Source: `general.html`

Targeted versions:

- `Valentinus-Gilbert-Sanjaya-Resume-Full-Stack.pdf` - full-stack roles
- `Valentinus-Gilbert-Sanjaya-Resume-Frontend.pdf` - frontend roles
- `Valentinus-Gilbert-Sanjaya-Resume-ERP.pdf` - ERP consultant / developer roles

All versions are one-page A4, single-column, ASCII-only, and ATS-friendly.

## Notes

- Freelance work is listed as **Independent**, with products and domains:
  Insuren, VVIP.CO.ID, Vision CRM, and Intra Niaga Mulya.
- Internal work is listed as private: HRIS, handy-terminal app, voucher email,
  and pre-employment assessment (online IQ/EQ test).
- Oracle is listed under **Database** (MySQL, PostgreSQL, Oracle), not as an
  ERP or backend skill.
- `valentinusgilbert.social` must be live before sending the CV.

## Regenerate PDFs

Use Chrome headless from the repository root:

```powershell
chrome --headless=new --disable-gpu --no-pdf-header-footer `
  --print-to-pdf="docs/resume/Valentinus-Gilbert-Sanjaya-Resume-General.pdf" `
  "file:///D:/Code/Valentinus-Gilbert-Potfolio/docs/resume/general.html"
```

Repeat for `full-stack.html`, `frontend.html`, and `erp.html`.
