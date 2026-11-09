<template>
  <div v-if="enabled" class="cursor" aria-hidden="true">
    <div ref="ring" class="cursor__ring" :class="ringClass">
      <span class="cursor__corner cursor__corner--tl" />
      <span class="cursor__corner cursor__corner--tr" />
      <span class="cursor__corner cursor__corner--bl" />
      <span class="cursor__corner cursor__corner--br" />
    </div>
    <div ref="dot" class="cursor__dot" :class="{ 'is-down': isDown }" />
    <div
      ref="label"
      class="cursor__label"
      :class="{ 'is-visible': hoverKind === 'link' && !!hintLabel }"
    >
      {{ hintLabel }}
    </div>
  </div>
</template>

<script setup>
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue';
import { canUseCustomCursor, customCursorEnabled } from '@/composables/useCustomCursor';

const enabled = computed(() => canUseCustomCursor && customCursorEnabled.value);

const ring = ref(null);
const dot = ref(null);
const label = ref(null);

const isDown = ref(false);
const hoverKind = ref(''); // '' | 'link' | 'text'
const hintLabel = ref('');
const visible = ref(false);

const ringClass = computed(() => ({
  'is-hover': hoverKind.value === 'link',
  'is-text': hoverKind.value === 'text',
  'is-down': isDown.value,
  'is-visible': visible.value,
}));

const pointer = { x: 0, y: 0 };
const trail = { x: 0, y: 0 };
let frame = null;

const INTERACTIVE = 'a, button, [role="button"], .swiper-pagination-bullet';
const TEXT_FIELD = 'input, textarea, select';

const step = () => {
  // the dot tracks the mouse exactly; the ring lags behind for a springy feel
  trail.x += (pointer.x - trail.x) * 0.18;
  trail.y += (pointer.y - trail.y) * 0.18;

  if (dot.value) {
    dot.value.style.transform = `translate3d(${pointer.x}px, ${pointer.y}px, 0) translate(-50%, -50%)`;
  }
  if (ring.value) {
    ring.value.style.transform = `translate3d(${trail.x.toFixed(2)}px, ${trail.y.toFixed(2)}px, 0) translate(-50%, -50%)`;
  }
  if (label.value) {
    label.value.style.transform = `translate3d(${trail.x.toFixed(2)}px, ${trail.y.toFixed(2)}px, 0)`;
  }

  frame = requestAnimationFrame(step);
};

const onMove = (event) => {
  pointer.x = event.clientX;
  pointer.y = event.clientY;
  if (!visible.value) {
    trail.x = pointer.x;
    trail.y = pointer.y;
    visible.value = true;
  }
};

const onOver = (event) => {
  const el = event.target instanceof Element ? event.target : null;
  if (!el) return;

  const interactive = el.closest(INTERACTIVE);
  if (interactive) {
    hoverKind.value = 'link';
    hintLabel.value =
      interactive.dataset.cursorLabel ??
      (interactive.tagName === 'A' && interactive.target === '_blank' ? 'open' : 'click');
    return;
  }

  if (el.closest(TEXT_FIELD)) {
    hoverKind.value = 'text';
    hintLabel.value = '';
    return;
  }

  hoverKind.value = '';
  hintLabel.value = '';
};

const onDown = () => (isDown.value = true);
const onUp = () => (isDown.value = false);
const onLeave = () => (visible.value = false);
const onEnter = () => (visible.value = true);

const attach = () => {
  window.addEventListener('pointermove', onMove, { passive: true });
  window.addEventListener('pointerover', onOver, { passive: true });
  window.addEventListener('pointerdown', onDown, { passive: true });
  window.addEventListener('pointerup', onUp, { passive: true });
  document.addEventListener('mouseleave', onLeave);
  document.addEventListener('mouseenter', onEnter);
  if (frame === null) frame = requestAnimationFrame(step);
};

const detach = () => {
  window.removeEventListener('pointermove', onMove);
  window.removeEventListener('pointerover', onOver);
  window.removeEventListener('pointerdown', onDown);
  window.removeEventListener('pointerup', onUp);
  document.removeEventListener('mouseleave', onLeave);
  document.removeEventListener('mouseenter', onEnter);
  if (frame !== null) {
    cancelAnimationFrame(frame);
    frame = null;
  }
};

watch(enabled, (on) => (on ? attach() : detach()));

onMounted(() => {
  if (enabled.value) attach();
});

onBeforeUnmount(detach);
</script>

<style lang="scss" scoped>
.cursor {
  position: fixed;
  inset: 0;
  z-index: 3000;
  pointer-events: none;
}

.cursor__dot {
  position: fixed;
  top: 0;
  left: 0;
  width: 7px;
  height: 7px;
  background: var(--accent);
  box-shadow: 0 0 10px var(--accent-glow);
  transition: width 0.16s var(--ease), height 0.16s var(--ease),
    background-color 0.16s var(--ease);
  will-change: transform;

  &.is-down {
    width: 11px;
    height: 11px;
    background: #fff;
  }
}

.cursor__ring {
  position: fixed;
  top: 0;
  left: 0;
  width: 30px;
  height: 30px;
  border-radius: 9px;
  border: 1px solid rgba(255, 113, 91, 0.55);
  opacity: 0;
  transition: width 0.22s var(--ease), height 0.22s var(--ease),
    opacity 0.22s var(--ease), border-color 0.22s var(--ease),
    background-color 0.22s var(--ease), border-radius 0.22s var(--ease);
  will-change: transform;

  &.is-visible {
    opacity: 1;
  }

  /* pixel corner brackets, like a retro selection marquee */
  .cursor__corner {
    position: absolute;
    width: 6px;
    height: 6px;
    border: 2px solid var(--accent);
    transition: all 0.22s var(--ease);

    &--tl {
      top: -2px;
      left: -2px;
      border-right: 0;
      border-bottom: 0;
    }

    &--tr {
      top: -2px;
      right: -2px;
      border-left: 0;
      border-bottom: 0;
    }

    &--bl {
      bottom: -2px;
      left: -2px;
      border-right: 0;
      border-top: 0;
    }

    &--br {
      bottom: -2px;
      right: -2px;
      border-left: 0;
      border-top: 0;
    }
  }

  &.is-hover {
    width: 52px;
    height: 52px;
    border-radius: 14px;
    background: rgba(255, 113, 91, 0.12);
    border-color: rgba(255, 113, 91, 0.9);

    .cursor__corner {
      width: 10px;
      height: 10px;
    }
  }

  &.is-text {
    width: 3px;
    height: 26px;
    border-radius: 2px;
    background: var(--accent);
    border-color: transparent;

    .cursor__corner {
      opacity: 0;
    }
  }

  &.is-down {
    width: 22px;
    height: 22px;
  }
}

.cursor__label {
  position: fixed;
  top: 0;
  left: 0;
  margin: 34px 0 0 20px;
  padding: 3px 8px;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: #fff;
  background: rgba(13, 21, 29, 0.85);
  border: 1px solid rgba(255, 113, 91, 0.5);
  border-radius: 6px;
  white-space: nowrap;
  opacity: 0;
  transition: opacity 0.18s var(--ease);
  will-change: transform;
}

.cursor__ring.is-hover ~ .cursor__label,
.cursor__label.is-visible {
  opacity: 1;
}
</style>
