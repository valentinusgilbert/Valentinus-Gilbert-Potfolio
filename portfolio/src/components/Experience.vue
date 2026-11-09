<script setup>
import { experiences, campusRoles } from '../data/profile';
const formatPeriod = (period) => period.replaceAll('—', '–');
</script>

<template>
  <section id="experience" class="experience section-space" aria-labelledby="experience-title">
    <div class="shell">
      <div class="section-intro">
        <h2 id="experience-title">Where I’ve<br />been building.</h2>
        <p>Frontend at Blibli. HRIS at Pusat Gadai. Manufacturing systems at Toyo. A different kind of learning in every role.</p>
      </div>
      <ol class="jobs">
        <li v-for="job in experiences" :key="job.company" class="job">
          <div class="job-meta"><span>{{ formatPeriod(job.period) }}</span><span v-if="job.current" class="job-current">Currently here</span><span v-else>{{ job.employmentType }}</span></div>
          <p class="job-company" translate="no">{{ job.company }}</p>
          <h3>{{ job.role }}</h3>
          <ul class="job-highlights"><li v-for="point in job.highlights" :key="point">{{ point }}</li></ul>
          <p class="job-skills">{{ job.skills.join(' · ') }}</p>
        </li>
      </ol>
      <details class="campus">
        <summary>Before that, a little campus life</summary>
        <ul><li v-for="role in campusRoles" :key="role.role"><strong>{{ role.role }}</strong> · {{ role.company }}<br /><span class="muted">{{ formatPeriod(role.period) }}</span></li></ul>
      </details>
    </div>
  </section>
</template>

<style scoped lang="scss">
.jobs { list-style: none; display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 24px; align-items: start; }
.job { min-width: 0; padding: 32px; border-radius: 24px; background: var(--surface); }
.job:first-child { background: #eef0ff; }
.job-meta { display: flex; align-items: center; justify-content: space-between; gap: 12px; flex-wrap: wrap; font-size: 13px; color: var(--muted); }
.job-current { color: #3043bc; background: #dfe4ff; padding: 4px 10px; border-radius: 999px; font-weight: 600; }
.job-company { margin-top: 28px; font-family: var(--display); font-size: 26px; font-weight: 700; line-height: 1.15; letter-spacing: -0.04em; }
.job h3 { font-family: 'DM Sans', sans-serif; font-size: 18px; font-weight: 600; letter-spacing: -0.02em; margin-top: 12px; }
.job-highlights { padding-left: 20px; margin-top: 24px; }
.job-highlights li + li { margin-top: 8px; }
.job-skills { margin-top: 24px; color: var(--muted); font-size: 14px; }
.campus { margin-top: 32px; padding: 14px 24px; border-radius: 16px; background: var(--surface); }
.campus > summary { font-weight: 600; }
.campus ul { list-style: none; display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 24px; padding-block: 12px; }
@media (max-width: 700px) {
  .jobs { grid-template-columns: minmax(0, 1fr); }
  .job { padding: 24px; border-radius: 20px; }
  .job-company { font-size: 24px; }
  .campus ul { grid-template-columns: minmax(0, 1fr); }
}
</style>
