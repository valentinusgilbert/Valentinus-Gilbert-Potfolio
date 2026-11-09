<script setup>
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue';

const props = defineProps({ modelValue: { type: Number, required: true }, options: { type: Array, required: true } });
const emit = defineEmits(['update:modelValue']);
const root = ref(null);
const trigger = ref(null);
const open = ref(false);
const highlighted = ref(props.modelValue);
const optionElements = ref([]);
const selected = computed(() => props.options[props.modelValue]);
const title = (option) => option.title.replaceAll('—', '·');
let search = '';
let searchTimer;

const moveTo = (index) => {
  highlighted.value = Math.max(0, Math.min(props.options.length - 1, index));
  nextTick(() => optionElements.value[highlighted.value]?.scrollIntoView({ block: 'nearest', behavior: 'instant' }));
};
const show = () => {
  open.value = true;
  moveTo(props.modelValue);
};
const close = () => {
  open.value = false;
  search = '';
  clearTimeout(searchTimer);
};
const choose = (index) => {
  emit('update:modelValue', index);
  close();
  trigger.value.focus({ preventScroll: true });
};
const onKeydown = (event) => {
  if (event.key === 'Tab' || event.key === 'Escape') {
    close();
    if (event.key === 'Escape') event.preventDefault();
    return;
  }
  if (['ArrowDown', 'ArrowUp', 'Home', 'End', 'Enter', ' '].includes(event.key)) {
    event.preventDefault();
    if (!open.value) {
      show();
      if (event.key === 'Home') moveTo(0);
      if (event.key === 'End') moveTo(props.options.length - 1);
      return;
    }
    if (event.key === 'Enter' || event.key === ' ') choose(highlighted.value);
    else if (event.key === 'Home') moveTo(0);
    else if (event.key === 'End') moveTo(props.options.length - 1);
    else moveTo(highlighted.value + (event.key === 'ArrowDown' ? 1 : -1));
    return;
  }
  if (event.key.length === 1 && !event.ctrlKey && !event.metaKey && !event.altKey) {
    if (!open.value) show();
    search += event.key.toLocaleLowerCase();
    clearTimeout(searchTimer);
    searchTimer = setTimeout(() => { search = ''; }, 600);
    const match = props.options.findIndex(option => title(option).toLocaleLowerCase().startsWith(search));
    if (match >= 0) moveTo(match);
  }
};
const onOutside = (event) => { if (!root.value?.contains(event.target)) close(); };
const onFocusout = (event) => { if (!root.value?.contains(event.relatedTarget)) close(); };
watch(() => props.modelValue, (index) => { highlighted.value = index; });
onMounted(() => document.addEventListener('pointerdown', onOutside));
onBeforeUnmount(() => { document.removeEventListener('pointerdown', onOutside); clearTimeout(searchTimer); });
</script>

<template>
  <div ref="root" class="project-select" @focusout="onFocusout">
    <span id="project-picker-label" class="select-label">Choose a project</span>
    <button id="project-picker" ref="trigger" class="select-trigger" type="button" role="combobox" aria-haspopup="listbox" aria-labelledby="project-picker-label project-picker-value" :aria-expanded="open" aria-controls="project-picker-options" :aria-activedescendant="open ? 'project-option-' + highlighted : undefined" @click="open ? close() : show()" @keydown="onKeydown">
      <span id="project-picker-value" translate="no">{{ title(selected) }}</span>
      <svg viewBox="0 0 24 24" aria-hidden="true" :class="{ 'is-open': open }"><path d="m7 10 5 5 5-5" /></svg>
    </button>
    <div v-if="open" id="project-picker-options" class="select-options" role="listbox" aria-labelledby="project-picker-label">
      <div v-for="(option, index) in options" :id="'project-option-' + index" :key="option.title" :ref="element => optionElements[index] = element" class="select-option" :class="{ 'is-highlighted': highlighted === index }" role="option" :aria-selected="modelValue === index" @pointermove="highlighted = index" @pointerdown.prevent @click="choose(index)">
        <span><strong translate="no">{{ title(option) }}</strong><small>{{ option.category || option.tags.join(' · ') }}</small></span>
        <svg v-if="modelValue === index" viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12 4 4L19 6" /></svg>
      </div>
    </div>
  </div>
</template>

<style scoped>
.project-select { position: relative; width: 100%; }
.select-label { display: block; margin-bottom: 8px; font-size: 14px; font-weight: 600; }
.select-trigger { display: flex; align-items: center; justify-content: space-between; gap: 12px; width: 100%; min-height: 54px; padding: 12px 16px; border: 1px solid #a4abc5; border-radius: 14px; background: #fff; color: var(--ink); text-align: left; }
.select-trigger > span { min-width: 0; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
.select-trigger:hover, .select-trigger[aria-expanded="true"] { border-color: var(--accent); }
svg { width: 20px; height: 20px; flex-shrink: 0; fill: none; stroke: currentColor; stroke-width: 1.8; stroke-linecap: round; stroke-linejoin: round; }
.select-trigger svg { color: var(--accent); transition: transform 180ms; }
.select-trigger svg.is-open { transform: rotate(180deg); }
.select-options { position: absolute; z-index: 20; inset-inline: 0; top: calc(100% + 8px); max-height: min(340px, 45dvh); overflow-y: auto; overscroll-behavior: contain; padding: 6px; border: 1px solid #dce0ee; border-radius: 16px; background: #fff; box-shadow: 0 12px 36px #1517221a; scrollbar-width: thin; scrollbar-color: #6976b0 #f3f4f8; scroll-padding-block: 6px; }
.select-option { display: flex; align-items: center; justify-content: space-between; gap: 12px; min-height: 64px; padding: 12px; border-radius: 10px; cursor: pointer; }
.select-option.is-highlighted { background: #eef0ff; }
.select-option[aria-selected="true"] { color: var(--accent); }
.select-option strong { display: block; font-size: 15px; font-weight: 600; }
.select-option small { display: block; margin-top: 3px; color: var(--muted); font-size: 12px; }
@media (forced-colors: active) { .select-option.is-highlighted { outline: 2px solid Highlight; outline-offset: -2px; } }
</style>
