<script setup>
import { computed, nextTick, onBeforeUnmount, onMounted, ref } from 'vue';
import { projects } from '../data/profile';
import ProjectSelect from './ProjectSelect.vue';

const activeIndex = ref(0);
const current = computed(() => projects[activeIndex.value]);
const projectIds = projects.map((project, index) => project.id || 'work-' + index);
const failedPreviews = ref([]);
const projectList = ref(null);
const projectButtons = ref([]);

const selectProject = (index, focus = false) => {
  activeIndex.value = Math.max(0, Math.min(projects.length - 1, index));
  window.history.replaceState(null, '', '#' + projectIds[activeIndex.value]);
  nextTick(() => {
    const button = projectButtons.value[activeIndex.value];
    const list = projectList.value;
    if (list && button) {
      list.scrollTop = button.offsetTop - list.clientHeight / 2 + button.offsetHeight / 2;
      if (focus) button.focus({ preventScroll: true });
    }
  });
};
const syncFromHash = () => {
  const index = projectIds.indexOf(window.location.hash.slice(1));
  if (index >= 0) selectProject(index);
};
onMounted(() => {
  syncFromHash();
  window.addEventListener('hashchange', syncFromHash);
});
onBeforeUnmount(() => window.removeEventListener('hashchange', syncFromHash));
</script>

<template>
  <section id="projects" class="work section-space" aria-labelledby="work-title">
    <div class="shell">
      <div class="section-intro">
        <div><h2 id="work-title">The things I build.</h2><p class="work-count">{{ projects.length }} projects, from experiments to everyday tools.</p></div>
        <p>Pick a project. Take a closer look.</p>
      </div>

      <div class="project-mobile-picker">
        <ProjectSelect :model-value="activeIndex" :options="projects" @update:model-value="selectProject" />
      </div>

      <div class="project-explorer">
        <nav class="project-index" aria-label="Choose a project">
          <p class="project-index-heading">Explore the work <span>{{ projects.length }}</span></p>
          <div ref="projectList" class="project-index-list" @keydown.home.prevent="selectProject(0, true)" @keydown.end.prevent="selectProject(projects.length - 1, true)">
            <button v-for="(project, index) in projects" :key="project.title" :ref="(element) => projectButtons[index] = element" class="project-index-button" type="button" :aria-pressed="activeIndex === index" :aria-controls="projectIds[activeIndex]" @click="selectProject(index)" @keydown.down.prevent="selectProject(index + 1, true)" @keydown.up.prevent="selectProject(index - 1, true)">
              <span class="project-index-title">{{ project.title.replaceAll('—', '·') }}</span>
              <span class="project-index-type">{{ project.category || project.tags.join(' · ') }}</span>
              <span class="project-index-arrow" aria-hidden="true">→</span>
            </button>
          </div>
          <p class="project-index-hint">Scroll to browse, or use ↑ and ↓.</p>
        </nav>

        <div class="project-stage">
          <article :id="projectIds[activeIndex]" :key="current.title" class="project" :class="{ 'project--featured': current.scope, 'project--previous': !current.scope }" aria-labelledby="active-project-title">
            <component :is="current.link ? 'a' : 'div'" class="project-cover" :href="current.link" :target="current.link ? '_blank' : undefined" :rel="current.link ? 'noopener noreferrer' : undefined" :aria-label="current.link ? 'Visit ' + current.title + ' (opens in a new tab)' : undefined">
              <div class="project-browser-bar"><span class="window-controls" aria-hidden="true"><i></i><i></i><i></i></span><span>{{ current.domain || current.tags[0] }}</span><span v-if="current.link" aria-hidden="true">↗</span></div>
              <img v-if="!failedPreviews.includes(current.title)" class="project-preview" :src="current.image" :alt="current.title + ' project screenshot'" width="1440" height="900" loading="lazy" @error="failedPreviews.push(current.title)" />
              <div v-else class="cover-statement"><strong>{{ current.title }}</strong><span>Preview unavailable. {{ current.link ? 'Visit the live project.' : 'Read about the project below.' }}</span></div>
              <span v-if="current.link" class="project-open" aria-hidden="true">↗</span>
            </component>
            <div class="project-body">
              <div class="project-heading"><h3 id="active-project-title" translate="no">{{ current.title.replaceAll('—', '·') }}</h3><span v-if="current.year" class="project-year">{{ current.year }}</span></div>
              <p class="project-desc">{{ current.desc }}</p>
              <div class="project-tags"><span v-for="tag in current.tags || ['Product design', 'Full-stack', 'Deployment']" :key="tag">{{ tag }}</span></div>
              <details v-if="current.scope" class="project-details">
                <summary>Behind the build</summary>
                <p>{{ current.scope }}</p>
                <ul><li v-for="feature in current.features" :key="feature">{{ feature }}</li></ul>
              </details>
            </div>
          </article>
          <div class="project-controls">
            <button class="project-previous" type="button" aria-label="Previous project" :disabled="activeIndex === 0" @click="selectProject(activeIndex - 1)"><span aria-hidden="true">←</span> Previous</button>
            <p class="project-progress" aria-live="polite" aria-atomic="true"><span>{{ activeIndex + 1 }}</span> / {{ projects.length }}<span class="progress-title"> · {{ current.title.replaceAll('—', '·') }}</span></p>
            <button class="project-next" type="button" aria-label="Next project" :disabled="activeIndex === projects.length - 1" @click="selectProject(activeIndex + 1)">Next <span aria-hidden="true">→</span></button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.work { background: var(--surface); }
.work-count { margin-top: 14px; color: var(--muted); }
.project-explorer { display: grid; grid-template-columns: 290px minmax(0, 1fr); gap: 32px; align-items: start; }
.project-mobile-picker { display: none; }
.project-index { min-width: 0; }
.project-index-heading { display: flex; align-items: center; justify-content: space-between; padding: 0 16px 16px; font-weight: 600; }
.project-index-heading > span { color: var(--muted); font-size: 14px; }
.project-index-list { position: relative; max-height: 570px; overflow-y: auto; overscroll-behavior: contain; scrollbar-gutter: stable; scrollbar-width: thin; scrollbar-color: #6976b0 #e3e6f2; padding: 8px 12px 8px 8px; scroll-padding-block: 8px; }
.project-index-list::-webkit-scrollbar { width: 10px; }
.project-index-list::-webkit-scrollbar-track { background: #e3e6f2; border-radius: 999px; }
.project-index-list::-webkit-scrollbar-thumb { min-height: 48px; background: #6976b0; border: 2px solid #e3e6f2; border-radius: 999px; }
.project-index-list::-webkit-scrollbar-thumb:hover { background: var(--accent); }
.project-index-list::-webkit-scrollbar-button { display: none; }
@supports selector(::-webkit-scrollbar) {
  .project-index-list { scrollbar-width: auto; scrollbar-color: auto; }
}
.project-index-button { position: relative; display: block; width: 100%; min-height: 94px; border: 1px solid #dce0ee; border-radius: 16px; background: #fff; box-shadow: 0 2px 6px #15172206; text-align: left; padding: 18px 48px 18px 16px; transition: background-color 180ms, border-color 180ms, color 180ms; }
.project-index-button + .project-index-button { margin-top: 12px; }
.project-index-button:hover { border-color: #abb6eb; background: #f9faff; }
.project-index-button[aria-pressed="true"] { border-color: var(--accent); background: #eef0ff; color: var(--accent); box-shadow: 0 3px 12px #4053d812; }
.project-index-button:focus-visible { outline-offset: 2px; }
.project-index-title { display: block; font-family: var(--display); font-size: 19px; font-weight: 600; line-height: 1.2; letter-spacing: -0.02em; }
.project-index-type { display: block; color: var(--muted); font-size: 13px; line-height: 1.5; margin-top: 7px; }
.project-index-arrow { position: absolute; top: 16px; right: 12px; display: grid; place-items: center; width: 28px; height: 28px; border-radius: 50%; background: var(--surface); color: var(--muted); font-size: 18px; transition: background-color 180ms, color 180ms; }
.project-index-button[aria-pressed="true"] .project-index-arrow { background: var(--accent); color: #fff; }
.project-index-hint { padding: 16px 16px 0; color: var(--muted); font-size: 13px; }
.project-stage { min-width: 0; }
.project { min-width: 0; background: #fff; border-radius: 24px; padding: 18px; scroll-margin-top: 24px; animation: project-arrive 240ms var(--ease) both; }
@keyframes project-arrive { from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); } }
.project-cover { position: relative; display: block; border-radius: 12px; overflow: hidden; background: #e9edf7; text-decoration: none; transition: transform 300ms var(--ease); }
.project-browser-bar { display: flex; align-items: center; justify-content: space-between; gap: 12px; padding: 12px 14px; font-size: 13px; color: #424958; }
.window-controls { display: inline-flex; gap: 5px; }
.window-controls i { display: block; width: 6px; height: 6px; border-radius: 50%; background: #a9afbe; }
.project-preview { width: 100%; aspect-ratio: 1.9; object-fit: cover; object-position: top; transition: transform 650ms var(--ease); }
a.project-cover:hover .project-preview { transform: scale(1.025); }
.project-open { position: absolute; right: 16px; bottom: 16px; display: grid; place-items: center; width: 42px; height: 42px; border-radius: 50%; background: #fff; color: var(--ink); font-size: 24px; transform: rotate(-20deg); transition: background-color 180ms, color 180ms, transform 250ms; }
a.project-cover:hover .project-open { background: var(--accent); color: #fff; transform: rotate(0); }
.project-body { padding: 24px 10px 8px; }
.project-heading { display: flex; justify-content: space-between; align-items: baseline; gap: 16px; }
.project-heading h3 { font-size: 32px; }
.project-year { color: var(--muted); font-size: 14px; flex-shrink: 0; }
.project-desc { margin-top: 14px; color: var(--muted); max-width: 750px; }
.project-tags { display: flex; flex-wrap: wrap; gap: 6px; margin-top: 18px; }
.project-tags > span { border-radius: 6px; background: var(--surface); padding: 4px 9px; font-size: 13px; }
.project-details { margin-top: 12px; font-size: 14px; }
.project-details summary { font-weight: 600; }
.project-details p { color: var(--muted); }
.project-details ul { padding-left: 20px; margin-top: 12px; }
.cover-statement { min-height: 260px; padding: 28px; display: grid; align-content: center; gap: 16px; }
.cover-statement strong { font-family: var(--display); font-size: 28px; line-height: 1.1; }
.cover-statement > span { font-size: 14px; }
.project-controls { display: flex; align-items: center; justify-content: space-between; gap: 16px; margin-top: 20px; }
.project-controls button { display: inline-flex; align-items: center; justify-content: center; gap: 10px; min-height: 44px; padding: 10px 16px; border: 0; border-radius: 999px; background: #fff; font-size: 14px; font-weight: 600; }
.project-controls button:hover:not(:disabled) { background: var(--accent); color: #fff; }
.project-controls button:disabled { color: var(--muted); background: #e6e8ef; cursor: default; }
.project-progress { font-size: 13px; color: var(--muted); text-align: center; font-variant-numeric: tabular-nums; }
.project-progress > span:first-child { color: var(--ink); font-weight: 700; }
@media (max-width: 1000px) {
  .project-explorer { grid-template-columns: 230px minmax(0, 1fr); gap: 20px; }
  .project-index-list { max-height: 520px; }
  .project-index-title { font-size: 17px; }
  .project { padding: 14px; }
  .project-heading h3 { font-size: 28px; }
  .progress-title { display: none; }
}
@media (max-width: 700px) {
  .project-explorer { display: block; }
  .project-index { display: none; }
  .project-mobile-picker { display: flex; flex-direction: column; gap: 8px; margin-bottom: 20px; }
  .project { padding: 12px; border-radius: 18px; }
  .project-preview { aspect-ratio: 1.6; }
  .project-body { padding: 20px 4px 8px; }
  .project-heading h3 { font-size: 26px; }
  .project-controls { gap: 8px; }
  .project-controls button { padding-inline: 14px; }
}
</style>
