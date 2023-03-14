<template>
  <SliceSimulator v-slot="{ slices }">
    <SliceZone :slices="slices" :components="components" />
  </SliceSimulator>
</template>

<script>
import { SliceSimulator } from '@prismicio/slice-simulator-vue'
import { components } from '~/slices'

import state from '~~/.slicemachine/libraries-state.json'

export default {
  components: {
    SliceSimulator
  },
  data () {
    return { components }
  }
}
</script>
