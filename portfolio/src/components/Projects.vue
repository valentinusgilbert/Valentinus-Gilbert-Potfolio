<script setup>
import { ref } from 'vue';
import { featuredProjects, projects } from '../data/profile';
const earlierProjects = projects.filter((project) => !project.id);
const archiveOpen = ref(false);
const failedPreviews = ref([]);
</script>

<template>
  <section id="projects" class="work shell section-space" aria-labelledby="work-title">
    <div class="section-intro">
      <h2 id="work-title">A few things<br />I’ve built.</h2>
      <p>Different businesses. Different problems. My part: planning, design, full-stack development &amp; deployment.</p>
    </div>
    <div class="work-grid">
      <article v-for="project in featuredProjects" :id="project.id" :key="project.id" class="project" :class="'project--' + project.id" :aria-labelledby="project.id + '-title'">
        <a class="project-cover" :class="'cover--' + project.id" :href="project.link" target="_blank" rel="noopener noreferrer" :aria-label="'Visit ' + project.title + ' (opens in a new tab)'">
          <span class="cover-domain" translate="no">{{ project.domain }} <span class="cover-open" aria-hidden="true">↗</span></span>
          <img v-if="!failedPreviews.includes(project.id)" class="project-preview" :src="project.image" :alt="project.title + ' website screenshot'" width="1440" height="1050" loading="lazy" @error="failedPreviews.push(project.id)" />
          <div v-else class="cover-statement"><span v-for="line in project.cover" :key="line">{{ line }}</span><small>Preview unavailable. Visit the live project.</small></div>
        </a>
        <div class="project-heading">
          <h3 :id="project.id + '-title'" translate="no">{{ project.title }}</h3>
          <span class="project-role">Design &amp; full-stack</span>
        </div>
        <p class="project-desc">{{ project.desc }}</p>
        <details class="project-details">
          <summary>My part in {{ project.title }}</summary>
          <p>{{ project.scope }}</p>
          <ul><li v-for="feature in project.features" :key="feature">{{ feature }}</li></ul>
        </details>
      </article>
    </div>
    <details class="work-archive" @toggle="archiveOpen = $event.target.open">
      <summary>More from the archive <span class="muted">({{ earlierProjects.length }} projects)</span></summary>
      <div v-if="archiveOpen" class="archive-list">
        <article v-for="project in earlierProjects" :key="project.title" class="archive-item">
          <img :src="project.image" :alt="project.title + ' project screenshot'" width="480" height="300" loading="lazy" @error="$event.target.hidden = true" />
          <div>
            <h3>{{ project.title }}</h3>
            <p>{{ project.desc }}</p>
            <p class="archive-tools">{{ project.tags.join(' · ') }} · {{ project.year }}</p>
            <a v-if="project.link" class="text-link" :href="project.link" target="_blank" rel="noopener noreferrer">Visit project <span aria-hidden="true">↗</span></a>
          </div>
        </article>
      </div>
    </details>
  </section>
</template>

<style scoped lang="scss">
.work-grid { display: grid; grid-template-columns: repeat(12, minmax(0, 1fr)); column-gap: 48px; row-gap: 72px; align-items: start; }
.project { grid-column: span 7; min-width: 0; }
.project:nth-child(2), .project:nth-child(3) { grid-column: span 5; }
.project:nth-child(2) { padding-top: 128px; }
.project:nth-child(4) { padding-top: 80px; }
.project-cover { display: flex; flex-direction: column; justify-content: space-between; gap: 24px; min-height: 400px; padding: 24px; text-decoration: none; overflow: hidden; }
.project-preview { width: 100%; aspect-ratio: 48 / 35; height: auto; transition: transform 200ms; }
.project-cover:hover .project-preview { transform: translateY(-4px); }
.project-cover:hover { color: inherit; }
.cover-domain { display: flex; justify-content: space-between; align-items: center; gap: 16px; font-size: 16px; font-weight: 600; }
.cover-statement { font-size: clamp(32px, 4.1vw, 62px); font-weight: 600; letter-spacing: -0.065em; line-height: 1.12; transition: transform 200ms; }
.cover-statement > span { display: block; }
.cover-statement small { display: block; font-family: 'Plus Jakarta Sans', sans-serif; font-style: normal; font-size: 14px; letter-spacing: 0; line-height: 1.7; margin-top: 24px; }
.project-cover:hover .cover-statement { transform: translateY(-6px); }
.cover-open { font-size: 32px; line-height: 1; }
.cover--juragantruk { background: #dce5ed; color: #253c55; min-height: 440px; }
.cover--juragantruk:hover { color: #253c55; }
.cover--intraniaga { background: #e4dfc7; color: #3e4934; min-height: 440px; }
.cover--intraniaga .cover-statement { font-family: 'Instrument Serif', Georgia, serif; font-weight: 400; font-size: clamp(40px, 4.7vw, 70px); }
.cover--diskonan { background: #e9a272; color: #472b20; }
.cover--diskonan .cover-statement { font-size: clamp(34px, 3.7vw, 54px); }
.cover--insuren { background: #d6e1eb; color: #294865; }
.project-heading { display: flex; align-items: baseline; justify-content: space-between; flex-wrap: wrap; gap: 8px 16px; margin-top: 16px; }
.project-role { font-size: 13px; color: var(--muted); }
.project-desc { margin-top: 16px; }
.project-details { margin-top: 12px; }
.project-details summary { font-size: 14px; font-weight: 600; }
.project-details p { color: var(--muted); }
.project-details ul { padding-left: 20px; margin-top: 16px; }
.work-archive { margin-top: 72px; background: var(--surface); padding: 24px 32px; }
.work-archive > summary { font-size: 20px; letter-spacing: -0.03em; }
.archive-list { display: grid; gap: 40px; padding-block: 24px; }
.archive-item { display: grid; grid-template-columns: 220px minmax(0, 1fr); gap: 32px; align-items: start; }
.archive-item img { width: 100%; height: auto; aspect-ratio: 8 / 5; object-fit: cover; }
.archive-item h3 { font-size: 24px; }
.archive-item p { margin-top: 12px; }
.archive-tools { color: var(--muted); font-size: 14px; }
@media (max-width: 1000px) {
  .work-grid { column-gap: 32px; }
  .project, .project:nth-child(2), .project:nth-child(3) { grid-column: span 6; }
  .project-cover { min-height: 360px; padding: 24px; }
  .cover-statement { font-size: 38px; }
}
@media (max-width: 650px) {
  .work-grid { display: flex; flex-direction: column; gap: 48px; }
  .project { width: 100%; }
  .project:nth-child(2), .project:nth-child(4) { padding-top: 0; }
  .project-cover { min-height: 340px; padding: 24px; }
  .cover-statement, .cover--diskonan .cover-statement { font-size: clamp(32px, 8vw, 48px); }
  .cover--intraniaga .cover-statement { font-size: 48px; }
  .work-archive { padding: 20px; margin-top: 48px; }
  .work-archive > summary { font-size: 18px; }
  .archive-item { grid-template-columns: minmax(0, 1fr); gap: 20px; }
}
</style>
