<template>
  <Field :label="label">
    <input
      :name="name"
      :type="type"
      :required="required || null"
      :placeholder="placeholder"
      class="w-full rounded-none border-b border-slate-200 py-3 pr-7 pl-3 text-slate-800 placeholder-slate-400"
    >
  </Field>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: 'text'
    },
    placeholder: {
      type: String,
      default: null
    },
    required: {
      type: Boolean,
      default: true
    }
  }
}
</script>
