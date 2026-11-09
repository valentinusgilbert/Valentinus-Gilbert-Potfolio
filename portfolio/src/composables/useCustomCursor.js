import { ref, watch } from 'vue';

const STORAGE_KEY = 'vgs:custom-cursor';

const media = (query) =>
  typeof window !== 'undefined' && window.matchMedia(query).matches;

/**
 * A custom cursor only makes sense for precise pointers, and hiding the system
 * cursor would be hostile to anyone who asked for reduced motion.
 */
export const canUseCustomCursor =
  media('(pointer: fine)') && !media('(prefers-reduced-motion: reduce)');

const readStored = () => {
  try {
    return localStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
};

const stored = readStored();

export const customCursorEnabled = ref(
  canUseCustomCursor && (stored === null ? true : stored === '1'),
);

watch(
  customCursorEnabled,
  (enabled) => {
    try {
      localStorage.setItem(STORAGE_KEY, enabled ? '1' : '0');
    } catch {
      /* storage blocked (private mode) — the preference just won't persist */
    }
    document.body?.classList.toggle('has-custom-cursor', enabled);
  },
  { immediate: true },
);

export const toggleCustomCursor = () => {
  if (!canUseCustomCursor) return;
  customCursorEnabled.value = !customCursorEnabled.value;
};
