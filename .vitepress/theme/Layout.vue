<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import {VPImage} from "vitepress/theme";
import { useData } from 'vitepress/dist/client/theme-default/composables/data'
import { nextTick, provide } from 'vue';

const { Layout } = DefaultTheme

const { frontmatter: fm, isDark } = useData()

const enableTransitions = () =>
    'startViewTransition' in document &&
    window.matchMedia('(prefers-reduced-motion: no-preference)').matches

provide('toggle-appearance', async () => {
  if (!enableTransitions()) {
    isDark.value = !isDark.value
    return
  }

  const DIY_IMAGE_CONTAINER_DOM = document.getElementById('DIY_IMAGE_CONTAINER');

  const rect = DIY_IMAGE_CONTAINER_DOM.getBoundingClientRect();
  const x = rect.left + rect.width/2;
  const y = rect.top + rect.height/2;

  const clipPath = [
    `circle(0px at ${x}px ${y}px)`,
    `circle(${Math.hypot(
        Math.max(x, innerWidth - x),
        Math.max(y, innerHeight - y)
    )}px at ${x}px ${y}px)`
  ]

  await document.startViewTransition(async () => {
    isDark.value = !isDark.value
    await nextTick()
  }).ready

  document.documentElement.animate(
      { clipPath: isDark.value ? clipPath.reverse() : clipPath },
      {
        duration: 300,
        easing: 'ease-in',
        pseudoElement: `::view-transition-${isDark.value ? 'old' : 'new'}(root)`
      }
  )
})
</script>

<style scoped>
.container{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

::view-transition-old(root),
::view-transition-new(root) {
  animation: none;
  mix-blend-mode: normal;
}

::view-transition-old(root),
.dark::view-transition-new(root) {
  z-index: 1;
}

::view-transition-new(root),
.dark::view-transition-old(root) {
  z-index: 9999;
}

.VPSwitchAppearance {
  width: 22px !important;
}

.VPSwitchAppearance .check {
  transform: none !important;
}
</style>

<template>
  <Layout>
    <template #home-hero-image>
      <div class="container" id="DIY_IMAGE_CONTAINER">
        <VPImage v-if="fm.hero.image" class="image-src" :image="fm.hero.image" />
      </div>
    </template>
  </Layout>
</template>