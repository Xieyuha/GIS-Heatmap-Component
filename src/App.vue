<template>
  <Home />
</template>

<script setup lang="ts" name="App">
import Home from '@/ui/pages/Home.vue';
</script>

<style>
:root {
  /* 背景 */
  /* 页面背景 */
  --page-bg: #f5f7fb;
  /* 组件背景 */
  --panel-bg: #ffffff;
  /* 组件柔和背景 */
  --panel-soft: #edf0f5;
  /* 组件边框 */
  --panel-border-width:1px;
  --panel-border-style: solid;
  --panel-border-color: rgba(255, 255, 255, 0.25);
  /* 主题色 */
  --accent: #2f6fed;
  --bg-glass:rgba(255, 255, 255, 0.25);
  
  /* 圆角/阴影 */
  --border-radius: 4px;
  /* --panel-border-radius: 8px; */
  --shadow-soft: 0 0 4px rgba(0, 0, 0, 0.15);
  /* 文本 */
  --text-strong: #1f2937;
  --text-muted: #5c667a;

  
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Segoe UI", "Helvetica Neue", Arial, sans-serif;
  color: var(--text-strong);
  background: var(--page-bg);
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}
</style>
