<template>
  <label>
    <span class="text-sm text-slate-500">{{ label }}</span>
    <slot />
  </label>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true
    }
  }
}
</script>
