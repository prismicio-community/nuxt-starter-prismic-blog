<script setup lang="ts">
defineProps({
  label: {
    type: String,
    required: true
  }
})
</script>

<template>
  <label>
    <span class="text-sm text-slate-500">{{ label }}</span>
    <slot />
  </label>
</template>

