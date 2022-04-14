<template>
  <Component
    :is="as"
    class="font-sans font-semibold tracking-tighter text-slate-800"
    :class="{
      'text-3xl md:text-4xl': size === '4xl',
      'text-3xl': size === '3xl',
      'text-2xl': size === '2xl',
      'text-xl': size === 'xl'
    }"
  >
    <slot />
  </Component>
</template>

<script>
export default {
  props: {
    as: {
      type: [String, Object, Function],
      default: 'h1'
    },
    size: {
      type: String,
      default: '4xl'
    }
  }
}
</script>
