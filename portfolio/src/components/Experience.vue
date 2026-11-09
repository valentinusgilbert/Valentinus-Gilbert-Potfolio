<script setup>
import { experiences, campusRoles } from '../data/profile';
const formatPeriod = (period) => period.replaceAll('—', '–');
</script>

<template>
  <section id="experience" class="experience section-space" aria-labelledby="experience-title">
    <div class="shell">
      <div class="section-intro">
        <h2 id="experience-title">The work<br />behind the work.</h2>
        <p>From customer-facing interfaces to the systems that keep a business moving.</p>
      </div>
      <ol class="jobs">
        <li v-for="job in experiences" :key="job.company" class="job">
          <div class="job-time">
            <span>{{ formatPeriod(job.period) }}</span>
            <span v-if="job.current" class="job-current">Currently here</span>
            <span v-else class="muted">{{ job.employmentType }}</span>
          </div>
          <div class="job-content">
            <h3>{{ job.role }}</h3>
            <p class="job-company" translate="no">{{ job.company }}</p>
            <p class="job-skills">{{ job.skills.join(' · ') }}</p>
            <ul class="job-highlights"><li v-for="point in job.highlights" :key="point">{{ point }}</li></ul>
          </div>
        </li>
      </ol>
      <details class="campus">
        <summary>Earlier, on campus</summary>
        <ul><li v-for="role in campusRoles" :key="role.role"><strong>{{ role.role }}</strong> · {{ role.company }}<br /><span class="muted">{{ formatPeriod(role.period) }}</span></li></ul>
      </details>
    </div>
  </section>
</template>

<style scoped lang="scss">
.experience { background: var(--surface); }
.jobs { list-style: none; display: grid; gap: 56px; }
.job { display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 2fr); gap: 40px; }
.job-time { display: flex; flex-direction: column; gap: 4px; font-size: 14px; }
.job-current { color: var(--accent); font-weight: 600; }
.job-company { margin-top: 12px; font-size: 18px; }
.job-highlights { padding-left: 20px; margin-top: 20px; }
.job-highlights li + li { margin-top: 8px; }
.job-skills { margin-top: 20px; font-size: 16px; }
.campus { margin-top: 56px; margin-left: calc((100% - 80px) / 3 + 40px); }
.campus > summary { font-weight: 600; }
.campus ul { list-style: none; display: grid; gap: 20px; }
@media (max-width: 700px) {
  .job { grid-template-columns: minmax(0, 1fr); gap: 16px; }
  .job-time { flex-direction: row; flex-wrap: wrap; gap: 8px 16px; }
  .campus { margin-left: 0; }
}
</style>
