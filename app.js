(function () {
  "use strict";
  const S = window.SITE, P = window.PROJECTS || [], C = window.CASE_STUDIES || [],
        CERTS = window.CERTIFICATES || [], EDU = window.EDUCATION || [], R = window.RESUME || {};

  /* ------------------------------------------------------------------ */
  /* Helpers                                                             */
  /* ------------------------------------------------------------------ */
  const $ = (s, el = document) => el.querySelector(s);
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const ext = (url, label, cls = "btn btn-ghost btn-sm") =>
    `<a class="${cls}" href="${esc(url)}" target="_blank" rel="noopener">${label}${ICON.out}</a>`;

  /* ------------------------------------------------------------------ */
  /* Icons                                                               */
  /* ------------------------------------------------------------------ */
  const folder = (front, back, glyph = "") => `<svg viewBox="0 0 64 64" aria-hidden="true">
    <path d="M6 14a4 4 0 0 1 4-4h14l6 6h24a4 4 0 0 1 4 4v4H6z" fill="${back}"/>
    <rect x="6" y="20" width="52" height="36" rx="5" fill="${front}"/>
    <rect x="6" y="20" width="52" height="5" rx="2" fill="#fff" opacity=".14"/>${glyph}</svg>`;
  const ICON = {
    out: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    down: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 4v11m0 0l-4.5-4.5M12 15l4.5-4.5M5 20h14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    copy: `<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="8" y="8" width="12" height="12" rx="2" fill="none" stroke="currentColor" stroke-width="2"/><path d="M16 8V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h3" fill="none" stroke="currentColor" stroke-width="2"/></svg>`,
    arrow: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14m-5-5l5 5-5 5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    projects: folder("#14998d", "#0f766e",
      `<path d="M24 34l-4 4 4 4M40 34l4 4-4 4M34 31l-4 14" fill="none" stroke="#fff" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/>`),
    cases: folder("#3b82b0", "#2c6a93",
      `<circle cx="30" cy="37" r="6.5" fill="none" stroke="#fff" stroke-width="2.8"/><path d="M35 42l5 5" stroke="#fff" stroke-width="3" stroke-linecap="round"/>`),
    certs: folder("#f59e52", "#e07b2a",
      `<circle cx="32" cy="36" r="6.5" fill="#fff"/><path d="M28.5 41.5L27 49l5-2.6 5 2.6-1.5-7.5" fill="#fff"/><circle cx="32" cy="36" r="3" fill="#f59e52"/>`),
    resume: `<svg viewBox="0 0 64 64" aria-hidden="true"><path d="M14 6h26l12 12v38a3 3 0 0 1-3 3H14a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3z" fill="#fff" stroke="#c9d4d2" stroke-width="1.5"/><path d="M40 6v9a3 3 0 0 0 3 3h9" fill="#e5ecea"/><rect x="19" y="27" width="24" height="3.4" rx="1.7" fill="#0f766e"/><rect x="19" y="35" width="26" height="2.6" rx="1.3" fill="#b9c7c4"/><rect x="19" y="41" width="20" height="2.6" rx="1.3" fill="#b9c7c4"/><rect x="19" y="47" width="23" height="2.6" rx="1.3" fill="#b9c7c4"/></svg>`,
    terminal: `<svg viewBox="0 0 64 64" aria-hidden="true"><rect x="6" y="10" width="52" height="44" rx="9" fill="#132220" stroke="#3b5a55" stroke-width="1.5"/><path d="M17 26l7 6-7 6" fill="none" stroke="#5eead4" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"/><path d="M29 40h15" stroke="#e6efed" stroke-width="3.2" stroke-linecap="round"/></svg>`,
    mail: `<svg viewBox="0 0 64 64" aria-hidden="true"><rect x="7" y="14" width="50" height="36" rx="6" fill="#f26b3a"/><path d="M9 18l23 17 23-17" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    why: `<svg viewBox="0 0 64 64" aria-hidden="true"><circle cx="32" cy="32" r="25" fill="#dcf1ec"/><path d="M32 13c1.6 9.4 5.6 13.4 15 15-9.4 1.6-13.4 5.6-15 15-1.6-9.4-5.6-13.4-15-15 9.4-1.6 13.4-5.6 15-15z" fill="#0f766e"/><circle cx="47" cy="15" r="4" fill="#f26b3a"/></svg>`,
    home: `<svg viewBox="0 0 64 64" aria-hidden="true"><rect x="6" y="6" width="52" height="52" rx="14" fill="#0f766e"/><text x="32" y="40.5" text-anchor="middle" font-family="Inter,Arial,sans-serif" font-weight="700" font-size="20" fill="#fff">AT</text></svg>`,
    linkedin: `<svg viewBox="0 0 64 64" aria-hidden="true"><rect x="6" y="6" width="52" height="52" rx="12" fill="#0a66c2"/><circle cx="21" cy="21" r="4" fill="#fff"/><rect x="17.5" y="28" width="7" height="20" rx="1" fill="#fff"/><path d="M29 28h6.5v3c1.4-2.3 3.8-3.6 6.8-3.6 4.8 0 7.2 3 7.2 8.6V48h-7V37.4c0-2.7-1-4-3.1-4-2.4 0-3.9 1.6-3.9 4.4V48H29z" fill="#fff"/></svg>`,
    github: `<svg viewBox="0 0 64 64" aria-hidden="true"><rect x="6" y="6" width="52" height="52" rx="12" fill="#1f2328"/><path d="M32 15a17 17 0 0 0-5.4 33.1c.9.2 1.2-.4 1.2-.8v-3c-4.7 1-5.7-2-5.7-2-.8-2-1.9-2.5-1.9-2.5-1.5-1 .1-1 .1-1 1.7.1 2.6 1.8 2.6 1.8 1.5 2.6 4 1.9 5 1.4.2-1.1.6-1.9 1.1-2.3-3.8-.4-7.7-1.9-7.7-8.4 0-1.8.7-3.4 1.8-4.6-.2-.4-.8-2.2.2-4.5 0 0 1.4-.5 4.7 1.8a16 16 0 0 1 8.5 0c3.3-2.3 4.7-1.8 4.7-1.8.9 2.3.3 4.1.2 4.5 1.1 1.2 1.8 2.7 1.8 4.6 0 6.5-4 8-7.7 8.4.6.5 1.2 1.6 1.2 3.2v4.7c0 .5.3 1 1.2.8A17 17 0 0 0 32 15z" fill="#fff"/></svg>`,
    certFile: `<svg viewBox="0 0 44 52" aria-hidden="true"><path d="M6 2h22l12 12v33a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3z" fill="var(--warm-soft)" stroke="var(--cert)" stroke-width="1.5"/><circle cx="21" cy="26" r="7" fill="#f59e52"/><path d="M17 31.5l-1.5 9 5.5-3 5.5 3-1.5-9" fill="#e07b2a"/><circle cx="21" cy="26" r="3" fill="#fff"/></svg>`,
    courseFile: `<svg viewBox="0 0 44 52" aria-hidden="true"><path d="M6 2h22l12 12v33a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3z" fill="var(--accent-soft)" stroke="var(--accent)" stroke-width="1.5"/><path d="M15 20l12 7-12 7z" fill="var(--accent)"/></svg>`,
    eduFile: `<svg viewBox="0 0 44 52" aria-hidden="true"><path d="M6 2h22l12 12v33a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3z" fill="var(--accent-soft)" stroke="var(--accent)" stroke-width="1.5"/><path d="M8 26l13-6 13 6-13 6z" fill="var(--accent)"/><path d="M13 29v6c4 3 12 3 16 0v-6" fill="none" stroke="var(--accent)" stroke-width="2"/></svg>`,
    at: `<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" stroke-width="2"/><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`,
    pin: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="9.5" r="2.5" fill="currentColor"/></svg>`
  };

  /* ------------------------------------------------------------------ */
  /* Window content                                                      */
  /* ------------------------------------------------------------------ */
  const projectCard = (p) => `
    <article class="card">
      <button class="card-open" tabindex="-1" data-open="project/${esc(p.slug)}" aria-label="Open ${esc(p.title)} details">
        <div class="card-media"><img src="${esc(p.image)}" alt="Screenshot of ${esc(p.title)}" loading="lazy" width="1280" height="800"></div>
      </button>
      <div class="card-body">
        <h3 class="card-title">${esc(p.title)}</h3>
        <p class="card-tagline">${esc(p.tagline)}</p>
        <ul class="tags" style="margin-top:6px">${(p.tags || []).map((t) => `<li class="tag sm">${esc(t)}</li>`).join("")}</ul>
        <div class="card-foot">
          <button class="btn btn-primary btn-sm" data-open="project/${esc(p.slug)}">Details${ICON.arrow}</button>
          ${p.live ? ext(p.live, "Live demo") : ""}
          ${p.code ? ext(p.code, "Code") : ""}
        </div>
      </div>
    </article>`;

  const caseCard = (c) => `
    <button class="case" data-open="case/${esc(c.slug)}">
      <span class="case-meta">${esc([c.company, c.period].filter(Boolean).join(" · "))}</span>
      <h3 class="card-title" style="margin:0">${esc(c.title)}</h3>
      <p class="card-tagline">${esc(c.summary)}</p>
      ${c.metrics ? `<div class="case-metrics">${c.metrics.map((m) => `<div><b>${esc(m.value)}</b><span>${esc(m.label)}</span></div>`).join("")}</div>` : ""}
    </button>`;

  const VIEWS = {
    home: () => ({
      title: "hello.md", w: 780,
      html: `
        <p class="eyebrow">${esc(S.intro.greeting)}</p>
        <h1 class="hero" id="hero-name">${esc(S.name)}</h1>
        ${S.intro.paragraphs.map((p) => `<p class="lead">${esc(p)}</p>`).join("")}
        <ul class="tags">${S.intro.tags.map((t) => `<li class="tag${t.highlight ? " hl" : ""}">${esc(t.label)}</li>`).join("")}</ul>
        <div class="actions">
          <button class="btn btn-primary" data-open="projects">See my projects${ICON.arrow}</button>
          <button class="btn btn-ghost" data-open="why">Why work with me</button>
        </div>`
    }),

    projects: () => ({
      title: "~/Projects", w: 1000, h: 760,
      html: `
        <div class="section-head">
          <div><h2>Projects</h2><p class="muted">Things I've designed and built. Open one for the story, or jump straight to the live demo.</p></div>
        </div>
        <div class="grid cards">${P.map(projectCard).join("")}</div>`
    }),

    project: (slug) => {
      const p = P.find((x) => x.slug === slug);
      if (!p) return null;
      return {
        title: `${p.slug}.app`, w: 860, h: 800, back: "projects",
        html: `
          <p class="case-meta">Project</p>
          <h2 style="font-size:32px">${esc(p.title)}</h2>
          <p class="lead">${esc(p.summary)}</p>
          <div class="actions" style="margin-top:14px">
            ${p.live ? ext(p.live, "Open live demo", "btn btn-primary") : ""}
            ${p.code ? ext(p.code, "View code on GitHub", "btn btn-ghost") : ""}
          </div>
          <div class="detail-hero"><img src="${esc(p.image)}" alt="Screenshot of ${esc(p.title)}" width="1280" height="800"></div>
          ${p.highlights ? `<div class="stats">${p.highlights.map((h) => `<div class="stat"><b>${esc(h.value)}</b><span>${esc(h.label)}</span></div>`).join("")}</div>` : ""}
          ${p.problem ? `<h3>The problem</h3><p>${esc(p.problem)}</p>` : ""}
          ${p.built ? `<h3>What I built</h3><ul class="checks">${p.built.map((b) => `<li>${esc(b)}</li>`).join("")}</ul>` : ""}
          ${p.skills ? `<h3>Skills in play</h3><ul class="tags" style="margin-top:0">${p.skills.map((s) => `<li class="tag">${esc(s)}</li>`).join("")}</ul>` : ""}`
      };
    },

    cases: () => ({
      title: "~/Case Studies", w: 940, h: 680,
      html: `
        <div class="section-head">
          <div><h2>Case Studies</h2><p class="muted">The thinking behind the work: the problem, what I did, and what changed.</p></div>
        </div>
        <div class="grid case-list">
          ${C.map(caseCard).join("")}
          <div class="case soon"><span class="case-meta">Coming soon</span><p style="margin:0">More case studies are on the way.</p></div>
        </div>`
    }),

    case: (slug) => {
      const c = C.find((x) => x.slug === slug);
      if (!c) return null;
      return {
        title: `${c.slug}.md`, w: 800, h: 800, back: "cases",
        html: `
          <div class="article">
            <p class="case-meta">${esc(["Case study", c.company, c.period].filter(Boolean).join(" · "))}</p>
            <h2 style="font-size:30px">${esc(c.title)}</h2>
            <p class="lead">${esc(c.summary)}</p>
            ${c.role ? `<p class="muted small" style="margin:0">My role: <b>${esc(c.role)}</b></p>` : ""}
            ${c.tags ? `<ul class="tags">${c.tags.map((t) => `<li class="tag sm">${esc(t)}</li>`).join("")}</ul>` : ""}
            ${c.metrics ? `<div class="stats">${c.metrics.map((m) => `<div class="stat"><b>${esc(m.value)}</b><span>${esc(m.label)}</span></div>`).join("")}</div>` : ""}
            ${(c.sections || []).map((s) => `
              <h3>${esc(s.heading)}</h3>
              ${s.text ? `<p>${esc(s.text)}</p>` : ""}
              ${s.list ? `<ul class="checks">${s.list.map((li) => `<li>${esc(li)}</li>`).join("")}</ul>` : ""}`).join("")}
            ${c.link ? `<div class="actions">${c.link.url.startsWith("#/")
              ? `<button class="btn btn-ghost" data-open="${esc(c.link.url.slice(2))}">${esc(c.link.label)}${ICON.arrow}</button>`
              : ext(c.link.url, esc(c.link.label), "btn btn-ghost")}</div>` : ""}
          </div>`
      };
    },

    certificates: () => ({
      title: "~/Certificates", w: 860, h: 600,
      html: `
        <h2>Certificates</h2>
        <p class="muted">Credentials and courses that back up the day-to-day work.</p>
        ${[["cert", "Certifications", ICON.certFile], ["course", "Courses & training", ICON.courseFile]].map(([t, label, icon]) => {
          const list = CERTS.filter((c) => (c.type || "cert") === t);
          return list.length ? `<h3 style="margin-top:22px">${label} <span class="muted small">(${list.length})</span></h3>
          <div class="grid files">
            ${list.map((c) => `
              <div class="file">${icon}
                <div><h3>${esc(c.name)}</h3><p>${esc(c.issuer)} · ${esc(c.year)}</p>
                ${c.credentialId ? `<p class="small" style="font-family:var(--mono);font-size:12px">ID ${esc(c.credentialId)}</p>` : ""}
                ${c.verifyUrl ? `<a href="${esc(c.verifyUrl)}" target="_blank" rel="noopener">Verify credential ↗</a>` : ""}</div>
              </div>`).join("")}
          </div>` : "";
        }).join("")}
        ${EDU.length ? `<h3 style="margin-top:30px">Education</h3>
        <div class="grid files">
          ${EDU.map((e) => `<div class="file">${ICON.eduFile}<div><h3>${esc(e.name)}</h3><p>${esc(e.issuer)}</p></div></div>`).join("")}
        </div>` : ""}`
    }),

    resume: () => ({
      title: "resume.pdf", w: 880, h: 820,
      html: `
        <div class="section-head">
          <div><h2>${esc(S.name)}</h2><p class="muted">${esc(S.role)} · ${esc(S.location)}</p></div>
          <div class="actions" style="margin:0">
            <a class="btn btn-primary" href="${esc(S.resumePdf)}" download>${ICON.down}Download PDF</a>
            <a class="btn btn-ghost" href="${esc(S.resumePdf)}" target="_blank" rel="noopener">Open${ICON.out}</a>
          </div>
        </div>
        <p class="lead">${esc(R.summary)}</p>
        <h3>Experience</h3>
        <ol class="timeline">
          ${(R.experience || []).map((j) => `
            <li class="job"><h3>${esc(j.title)} · ${esc(j.company)}</h3>
              <div class="meta">${esc(j.period)} · ${esc(j.place)}</div>
              <ul>${j.points.map((p) => `<li>${esc(p)}</li>`).join("")}</ul></li>`).join("")}
        </ol>
        <h3 style="margin-top:30px">Skills</h3>
        <div class="skillset">
          ${(R.skills || []).map((g) => `<div><h4>${esc(g.group)}</h4><ul class="tags">${g.items.map((i) => `<li class="tag sm">${esc(i)}</li>`).join("")}</ul></div>`).join("")}
        </div>
        <h3 style="margin-top:30px">Certifications</h3>
        <p>${CERTS.filter((c) => c.short).map((c) => esc(c.short)).join(" · ")} <span class="muted">+ ${CERTS.filter((c) => !c.short).length} courses</span> <button class="btn btn-ghost btn-sm" style="margin-left:6px" data-open="certificates">See all</button></p>`
    }),

    contact: () => ({
      title: "say-hello.txt", w: 580,
      html: `
        <h2>Say hello</h2>
        <p class="lead">I'm always happy to talk about business systems, product ideas, or a role where I can help. The fastest way to reach me is email.</p>
        <ul class="contact-list">
          <li class="contact-row">${ICON.mail}
            <div class="grow"><b>Email</b><a href="mailto:${esc(S.email)}">${esc(S.email)}</a></div>
            <button class="btn btn-ghost btn-sm" id="copyEmail" aria-label="Copy email address">${ICON.copy}Copy</button></li>
          <li class="contact-row">${ICON.linkedin}
            <div class="grow"><b>LinkedIn</b><span>${esc(S.linkedin.replace(/^https?:\/\/(www\.)?/, ""))}</span></div>
            ${ext(S.linkedin, "Connect")}</li>
          <li class="contact-row">${ICON.github}
            <div class="grow"><b>GitHub</b><span>${esc(S.github.replace(/^https?:\/\//, ""))}</span></div>
            ${ext(S.github, "Follow")}</li>
        </ul>
        <p class="muted small" style="margin-top:16px;display:flex;align-items:center;gap:6px"><span style="width:16px;height:16px;display:inline-block">${ICON.pin}</span>Based in ${esc(S.location)}</p>
        <div class="actions" style="margin-top:12px"><a class="btn btn-primary" href="mailto:${esc(S.email)}?subject=Hello%20Alireza">${ICON.at}Write me an email</a></div>`
    }),

    why: () => ({
      title: "why-alireza.md", w: 860, h: 760,
      html: `
        <h2>Why work with me</h2>
        <p class="lead">${esc(S.why.lead)}</p>
        <div class="stats wide">${S.why.stats.map((s) => `<div class="stat"><b>${esc(s.value)}</b><span>${esc(s.label)}</span></div>`).join("")}</div>
        <h3 style="margin-top:28px">How I work</h3>
        <div class="grid" style="grid-template-columns:repeat(auto-fit,minmax(220px,1fr))">
          ${S.why.principles.map((p) => `<div class="file" style="display:block"><h3>${esc(p.title)}</h3><p style="font-size:14.5px;color:var(--ink);opacity:.85">${esc(p.text)}</p></div>`).join("")}
        </div>
        <div class="actions">
          <button class="btn btn-primary" data-open="cases">Read a case study${ICON.arrow}</button>
          <button class="btn btn-ghost" data-open="contact">Get in touch</button>
        </div>`
    }),

    terminal: () => ({
      title: "terminal — zsh", w: 680, h: 440, bodyClass: "term",
      html: `<pre class="out" id="termOut">Welcome! Type <span class="prompt">help</span> to see what I can do.\n</pre>
        <label class="line"><span class="prompt">alireza@portfolio ~ %</span><span class="sr-only">Command</span>
        <input id="termIn" autocomplete="off" autocapitalize="off" spellcheck="false" enterkeyhint="go"></label>`,
      init: initTerminal
    })
  };

  /* ------------------------------------------------------------------ */
  /* Window manager                                                      */
  /* ------------------------------------------------------------------ */
  const desk = $("#desktop"), layer = $("#windows");
  const wins = new Map(); // route -> element
  let z = 10;
  const compact = () => window.matchMedia("(max-width: 760px)").matches;

  function area() {
    const d = desk.getBoundingClientRect();
    const dock = $("#dock").getBoundingClientRect();
    const bottom = Math.min(d.height, dock.top - d.top - 12);
    const sideL = window.innerWidth > 1000 ? 120 : 16;
    const sideR = window.innerWidth > 1100 ? 120 : 16;
    return { w: d.width, top: 14, bottom, left: sideL, right: d.width - sideR };
  }

  function place(el, spec, cascade) {
    if (compact()) return;
    const a = area();
    let availW = a.right - a.left;
    let left0 = a.left;
    if (availW < 360) { availW = a.w - 32; left0 = 16; }
    const width = Math.min(spec.w || 760, availW);
    const maxH = a.bottom - a.top;
    el.style.width = width + "px";
    el.style.maxHeight = maxH + "px";
    el.style.height = spec.h ? Math.min(spec.h, maxH) + "px" : "auto";
    const h = Math.min(el.offsetHeight, maxH);
    let left = left0 + (availW - width) / 2 + cascade * 26;
    let top = a.top + Math.max(0, (maxH - h) / 2) + cascade * 26;
    el.style.left = left + "px"; el.style.top = top + "px";
    clamp(el);
  }

  function clamp(el) {
    if (compact()) return;
    const a = area();
    const w = el.offsetWidth, h = el.offsetHeight;
    const maxH = a.bottom - a.top;
    if (h > maxH) el.style.height = maxH + "px";
    let left = parseFloat(el.style.left) || 0, top = parseFloat(el.style.top) || 0;
    left = Math.max(8, Math.min(left, a.w - w - 8));
    top = Math.max(a.top, Math.min(top, a.bottom - Math.min(el.offsetHeight, maxH)));
    el.style.left = left + "px"; el.style.top = top + "px";
  }

  function focusWin(el, updateHash = true) {
    el.style.zIndex = ++z;
    wins.forEach((w) => w.classList.toggle("inactive", w !== el));
    if (updateHash) setHash(el.dataset.route);
    syncChrome();
  }

  function open(route, opts = {}) {
    route = route || "home";
    if (wins.has(route)) {
      const el = wins.get(route);
      el.hidden = false; focusWin(el, !opts.noHash);
      if (!opts.silent) $(".win-body", el).focus({ preventScroll: true });
      return el;
    }
    const [kind, arg] = route.split("/");
    const view = VIEWS[kind] && VIEWS[kind](arg);
    if (!view) return open("home");
    const id = "w-" + route.replace(/[^a-z0-9]/gi, "-");
    const el = document.createElement("section");
    el.className = "win"; el.dataset.route = route;
    el.setAttribute("role", "dialog"); el.setAttribute("aria-labelledby", id + "-t");
    el.innerHTML = `
      <header class="win-bar">
        <div class="lights">
          <button class="light l-close" data-act="close" aria-label="Close window"><svg viewBox="0 0 10 10"><path d="M2 2l6 6M8 2l-6 6" stroke="#4d0000" stroke-width="1.6"/></svg></button>
          <button class="light l-min" data-act="min" aria-label="Minimize window"><svg viewBox="0 0 10 10"><path d="M2 5h6" stroke="#5a3d00" stroke-width="1.6"/></svg></button>
          <button class="light l-max" data-act="max" aria-label="Maximize window"><svg viewBox="0 0 10 10"><path d="M2.5 6.5v-4h4M7.5 3.5v4h-4" fill="none" stroke="#004d00" stroke-width="1.4"/></svg></button>
        </div>
        <h2 class="win-title" id="${id}-t">${esc(view.title)}</h2>
        ${view.back ? `<button class="win-back" data-open="${view.back}">‹ Back</button>` : "<span></span>"}
      </header>
      <div class="win-body ${view.bodyClass || ""}" tabindex="-1">${view.html}</div>`;
    layer.appendChild(el);
    el._spec = view;
    wins.set(route, el);
    const visible = [...wins.values()].filter((w) => !w.hidden && w !== el).length;
    place(el, view, kind === "home" ? 0 : Math.min(visible, 4));
    bindDrag(el);
    if (view.init) view.init(el);
    focusWin(el, !opts.noHash);
    if (!opts.silent) $(".win-body", el).focus({ preventScroll: true });
    return el;
  }

  function close(el) {
    wins.delete(el.dataset.route);
    el.remove();
    const top = topWin();
    if (top) focusWin(top); else setHash("");
    if (top && !compact()) $(".win-body", top).focus({ preventScroll: true });
  }
  function minimize(el) {
    el.hidden = true;
    const top = topWin();
    if (top) focusWin(top); else { setHash(""); syncChrome(); }
  }
  function toggleMax(el) {
    if (compact()) return;
    if (el.classList.toggle("maximized")) {
      el._restore = { left: el.style.left, top: el.style.top, width: el.style.width, height: el.style.height };
      const a = area();
      Object.assign(el.style, { left: "8px", top: "8px", width: a.w - 16 + "px", height: a.bottom - 8 + "px", maxHeight: a.bottom - 8 + "px" });
    } else {
      Object.assign(el.style, el._restore);
      place(el, el._spec, 0);
    }
  }
  const topWin = () => [...wins.values()].filter((w) => !w.hidden).sort((a, b) => b.style.zIndex - a.style.zIndex)[0];

  function bindDrag(el) {
    const bar = $(".win-bar", el);
    bar.addEventListener("pointerdown", (e) => {
      if (e.target.closest("button") || compact() || el.classList.contains("maximized")) return;
      focusWin(el);
      const sx = e.clientX, sy = e.clientY, ox = parseFloat(el.style.left), oy = parseFloat(el.style.top);
      el.classList.add("dragging"); bar.setPointerCapture(e.pointerId);
      const move = (ev) => { el.style.left = ox + ev.clientX - sx + "px"; el.style.top = oy + ev.clientY - sy + "px"; clamp(el); };
      const up = () => { el.classList.remove("dragging"); bar.removeEventListener("pointermove", move); bar.removeEventListener("pointerup", up); bar.removeEventListener("pointercancel", up); };
      bar.addEventListener("pointermove", move); bar.addEventListener("pointerup", up); bar.addEventListener("pointercancel", up);
    });
    bar.addEventListener("dblclick", (e) => { if (!e.target.closest("button")) toggleMax(el); });
    el.addEventListener("pointerdown", () => { if (el.style.zIndex != z) focusWin(el); });
  }

  /* ------------------------------------------------------------------ */
  /* Routing                                                             */
  /* ------------------------------------------------------------------ */
  function setHash(route) {
    const want = route && route !== "home" ? "#/" + route : "";
    if (location.hash === want) return;
    history.replaceState(null, "", want || location.pathname + location.search);
  }
  const routeFromHash = () => decodeURIComponent(location.hash.replace(/^#\/?/, "")) || "home";
  window.addEventListener("hashchange", () => open(routeFromHash()));

  /* ------------------------------------------------------------------ */
  /* Desktop, dock, menubar                                              */
  /* ------------------------------------------------------------------ */
  const LEFT = [["projects", "Projects", ICON.projects], ["cases", "Case Studies", ICON.cases], ["certificates", "Certificates", ICON.certs], ["resume", "Resume", ICON.resume], ["terminal", "terminal.app", ICON.terminal]];
  const RIGHT = [["why", "Why Alireza?", ICON.why], ["contact", "Say hello", ICON.mail]];
  const iconLi = ([r, l, i]) => `<li><button class="dicon" data-open="${r}">${i}<span>${l}</span></button></li>`;
  $("#iconsLeft").innerHTML = LEFT.map(iconLi).join("");
  $("#iconsRight").innerHTML = RIGHT.map(iconLi).join("");

  const DOCK = [["home", "Home", ICON.home], ["projects", "Projects", ICON.projects], ["cases", "Case Studies", ICON.cases], ["certificates", "Certificates", ICON.certs], ["resume", "Resume", ICON.resume], ["terminal", "Terminal", ICON.terminal], ["contact", "Contact", ICON.mail]];
  $("#dock").innerHTML = DOCK.map(([r, l, i]) => `<button class="dock-item" data-open="${r}" data-dock="${r}" aria-label="${l}">${i}<span class="tip">${l}</span></button>`).join("")
    + `<span class="dock-sep" aria-hidden="true"></span>`
    + `<a class="dock-item" href="${esc(S.linkedin)}" target="_blank" rel="noopener" aria-label="LinkedIn (opens in new tab)">${ICON.linkedin}<span class="tip">LinkedIn</span></a>`
    + `<a class="dock-item" href="${esc(S.github)}" target="_blank" rel="noopener" aria-label="GitHub (opens in new tab)">${ICON.github}<span class="tip">GitHub</span></a>`;

  function syncChrome() {
    const top = topWin(); const topKind = top ? top.dataset.route.split("/")[0] : "";
    const parent = { project: "projects", case: "cases" }[topKind] || topKind;
    document.querySelectorAll("[data-dock]").forEach((d) => {
      const r = d.dataset.dock;
      const running = [...wins.values()].some((w) => !w.hidden && (w.dataset.route === r || (r === "projects" && w.dataset.route.startsWith("project/")) || (r === "cases" && w.dataset.route.startsWith("case/"))));
      d.classList.toggle("running", running);
    });
    document.querySelectorAll(".menu [data-open]").forEach((b) => b.setAttribute("aria-current", b.dataset.open === parent ? "true" : "false"));
  }

  document.addEventListener("click", (e) => {
    const act = e.target.closest("[data-act]");
    if (act) {
      const el = act.closest(".win");
      ({ close, min: minimize, max: toggleMax })[act.dataset.act](el);
      return;
    }
    const o = e.target.closest("[data-open]");
    if (o) { e.preventDefault(); open(o.dataset.open); }
    if (e.target.closest("#copyEmail")) copyEmail();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      const top = topWin();
      if (top && !(top.dataset.route === "home" && wins.size === 1)) { e.preventDefault(); close(top); }
    }
  });

  let rT;
  window.addEventListener("resize", () => {
    clearTimeout(rT);
    rT = setTimeout(() => wins.forEach((w) => {
      w.classList.remove("maximized");
      place(w, w._spec, 0);
    }), 120);
  });

  /* Clock */
  const clock = $("#clock");
  const tick = () => {
    const d = new Date();
    clock.textContent = d.toLocaleDateString(undefined, { weekday: "short" }) + " " + d.toLocaleTimeString(undefined, { hour: "numeric", minute: "2-digit" });
    clock.setAttribute("datetime", d.toISOString());
  };
  tick(); setInterval(tick, 15000);

  /* Theme */
  $("#themeToggle").addEventListener("click", () => {
    const root = document.documentElement;
    const cur = root.getAttribute("data-theme") || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    const next = cur === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try { localStorage.setItem("theme", next); } catch (e) {}
  });

  /* Toast + copy */
  const toast = (msg) => { const t = $("#toast"); t.textContent = msg; t.classList.add("show"); clearTimeout(t._t); t._t = setTimeout(() => t.classList.remove("show"), 1800); };
  function copyEmail() {
    const done = () => toast("Email copied");
    if (navigator.clipboard) navigator.clipboard.writeText(S.email).then(done, () => toast(S.email));
    else toast(S.email);
  }

  /* ------------------------------------------------------------------ */
  /* Terminal                                                            */
  /* ------------------------------------------------------------------ */
  function initTerminal(el) {
    const out = $("#termOut", el), input = $("#termIn", el), body = $(".win-body", el);
    const print = (html) => { out.innerHTML += html + "\n"; body.scrollTop = body.scrollHeight; };
    const cmds = {
      help: () => "Commands:\n  whoami      a quick intro\n  projects    list my projects\n  open NAME   open a project, e.g. open backpack\n  cases       list case studies\n  skills      what I work with\n  certs       certifications\n  resume      download my resume\n  contact     how to reach me\n  theme       toggle dark mode\n  clear       clear the screen",
      whoami: () => `${esc(S.name)}, ${esc(S.role)} in ${esc(S.location)}.\nEngineer by training, systems thinker by habit.`,
      projects: () => P.map((p) => `  ${p.slug.padEnd(11)} ${esc(p.title)}`).join("\n") + "\nType: open <name>",
      cases: () => C.map((c) => `  ${esc(c.title)}`).join("\n") || "Coming soon.",
      skills: () => (R.skills || []).map((g) => `  ${g.group}: ${g.items.join(", ")}`).join("\n"),
      certs: () => CERTS.map((c) => `  ${c.short || c.name} (${c.issuer}, ${c.year})`).join("\n"),
      resume: () => { open("resume"); return `Opening resume… or <a href="${esc(S.resumePdf)}" download>download the PDF</a>`; },
      contact: () => `  email     <a href="mailto:${esc(S.email)}">${esc(S.email)}</a>\n  linkedin  <a href="${esc(S.linkedin)}" target="_blank" rel="noopener">${esc(S.linkedin.replace(/^https?:\/\/(www\.)?/, ""))}</a>\n  github    <a href="${esc(S.github)}" target="_blank" rel="noopener">${esc(S.github.replace(/^https?:\/\//, ""))}</a>`,
      theme: () => { $("#themeToggle").click(); return "Theme toggled."; },
      clear: () => { out.innerHTML = ""; return null; },
      sudo: () => "Nice try. 🙂"
    };
    input.addEventListener("keydown", (e) => {
      if (e.key !== "Enter") return;
      const raw = input.value.trim(); input.value = "";
      print(`<span class="prompt">alireza@portfolio ~ %</span> ${esc(raw)}`);
      if (!raw) return;
      const [c, ...rest] = raw.split(/\s+/);
      const cmd = c.toLowerCase();
      if (cmd === "open") {
        const name = rest.join(" ").toLowerCase();
        const p = P.find((x) => x.slug === name || x.title.toLowerCase().includes(name));
        if (p) { open("project/" + p.slug); print("Opening " + esc(p.title) + "…"); }
        else print("No project called '" + esc(name) + "'. Try: projects");
        return;
      }
      const res = cmds[cmd] ? cmds[cmd]() : `command not found: ${esc(cmd)}. Try: help`;
      if (res) print(res);
    });
    el.addEventListener("click", (e) => { if (!e.target.closest("a,button")) input.focus(); });
    setTimeout(() => input.focus(), 50);
  }

  /* ------------------------------------------------------------------ */
  /* Boot                                                                */
  /* ------------------------------------------------------------------ */
  const initial = routeFromHash();
  open("home", { noHash: initial !== "home", silent: true });
  if (initial !== "home") open(initial);
})();
