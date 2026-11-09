<script setup>
import { ref } from 'vue';
import { projects } from '../data/profile';
const failedPreviews = ref([]);
</script>

<template>
  <section id="projects" class="work section-space" aria-labelledby="work-title">
    <div class="shell">
      <div class="section-intro">
        <div><h2 id="work-title">The things I build.</h2><p class="work-count">{{ projects.length }} projects. Quite a few browser tabs.</p></div>
        <p>Client work, product builds, and the projects where I learned by doing. All here.</p>
      </div>
      <div class="work-grid">
        <article v-for="(project, index) in projects" :id="project.id || 'work-' + index" :key="project.title" class="project" :class="{ 'project--featured': project.scope, 'project--previous': !project.scope }" :aria-labelledby="'project-title-' + index">
          <component :is="project.link ? 'a' : 'div'" class="project-cover" :href="project.link" :target="project.link ? '_blank' : undefined" :rel="project.link ? 'noopener noreferrer' : undefined" :aria-label="project.link ? 'Visit ' + project.title + ' (opens in a new tab)' : undefined">
            <div class="project-browser-bar"><span class="window-controls" aria-hidden="true"><i></i><i></i><i></i></span><span>{{ project.domain || project.tags[0] }}</span><span v-if="project.link" aria-hidden="true">↗</span></div>
            <img v-if="!failedPreviews.includes(project.title)" class="project-preview" :src="project.image" :alt="project.title + ' project screenshot'" width="1440" height="900" loading="lazy" @error="failedPreviews.push(project.title)" />
            <div v-else class="cover-statement"><strong>{{ project.title }}</strong><span>Preview unavailable. {{ project.link ? 'Visit the live project.' : 'Read about the project below.' }}</span></div>
            <span v-if="project.link" class="project-open" aria-hidden="true">↗</span>
          </component>
          <div class="project-body">
            <div class="project-heading"><h3 :id="'project-title-' + index" translate="no">{{ project.title.replaceAll('—', '·') }}</h3><span v-if="project.year" class="project-year">{{ project.year }}</span></div>
            <p class="project-desc">{{ project.desc }}</p>
            <div class="project-tags"><span v-for="tag in project.tags || ['Product design', 'Full-stack', 'Deployment']" :key="tag">{{ tag }}</span></div>
            <details v-if="project.scope" class="project-details">
              <summary>Behind the build</summary>
              <p>{{ project.scope }}</p>
              <ul><li v-for="feature in project.features" :key="feature">{{ feature }}</li></ul>
            </details>
          </div>
        </article>
      </div>
      <p class="work-outro">From a college assignment to a business running on it.<br /><strong>Every build taught me something.</strong></p>
    </div>
  </section>
</template>

<style scoped lang="scss">
.work { background: var(--surface); }
.work-count { margin-top: 14px; color: var(--muted); }
.work-grid { display: grid; grid-template-columns: repeat(6, minmax(0, 1fr)); gap: 32px 24px; align-items: start; }
.project { grid-column: span 2; min-width: 0; background: #fff; border-radius: 22px; padding: 14px; }
.project--featured { grid-column: span 3; }
.project-cover { position: relative; display: block; border-radius: 12px; overflow: hidden; background: #e9edf7; text-decoration: none; transition: transform 300ms var(--ease); }
.project:nth-child(3n + 2) .project-cover { background: #f0eedd; }
.project:nth-child(3n + 3) .project-cover { background: #f2e5f0; }
.project-browser-bar { display: flex; align-items: center; justify-content: space-between; gap: 12px; padding: 12px 14px; font-size: 13px; color: #424958; }
.window-controls { display: inline-flex; gap: 5px; }
.window-controls i { display: block; width: 6px; height: 6px; border-radius: 50%; background: #a9afbe; }
.project-preview { width: 100%; aspect-ratio: 8 / 5; object-fit: cover; object-position: top; transition: transform 650ms var(--ease); }
a.project-cover:hover .project-preview { transform: scale(1.035); }
.project-open { position: absolute; right: 16px; bottom: 16px; display: grid; place-items: center; width: 42px; height: 42px; border-radius: 50%; background: #fff; color: var(--ink); font-size: 24px; transform: rotate(-20deg); transition: background-color 180ms, color 180ms, transform 250ms; }
a.project-cover:hover .project-open { background: var(--accent); color: #fff; transform: rotate(0); }
.project-body { padding: 22px 10px 12px; }
.project-heading { display: flex; justify-content: space-between; align-items: baseline; gap: 12px; }
.project-heading h3 { font-size: 24px; }
.project--featured h3 { font-size: 30px; }
.project-year { color: var(--muted); font-size: 13px; flex-shrink: 0; }
.project-desc { margin-top: 12px; color: var(--muted); }
.project-tags { display: flex; flex-wrap: wrap; gap: 6px; margin-top: 18px; }
.project-tags span { border-radius: 6px; background: var(--surface); padding: 4px 9px; font-size: 13px; }
.project-details { margin-top: 12px; font-size: 14px; }
.project-details summary { font-weight: 600; }
.project-details p { color: var(--muted); }
.project-details ul { padding-left: 20px; margin-top: 12px; }
.cover-statement { min-height: 220px; padding: 28px; display: grid; align-content: center; gap: 16px; }
.cover-statement strong { font-family: var(--display); font-size: 28px; line-height: 1.1; }
.cover-statement span { font-size: 14px; }
.work-outro { text-align: center; margin-top: 56px; color: var(--muted); }
.work-outro strong { font-family: var(--display); font-size: 24px; font-weight: 600; color: var(--ink); }
@media (max-width: 1000px) {
  .work-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 24px; }
  .project, .project--featured { grid-column: auto; }
  .project--featured h3 { font-size: 26px; }
  .project-desc { font-size: 16px; }
}
@media (max-width: 650px) {
  .work-grid { grid-template-columns: minmax(0, 1fr); }
  .project { padding: 12px; border-radius: 18px; }
  .project-body { padding: 18px 4px 8px; }
  .project-desc { font-size: 16px; }
  .project-heading h3, .project--featured h3 { font-size: 25px; }
}
</style>
