<template>
  <SliceSimulator v-slot="{ slices }">
    <SliceZone :slices="slices" :components="components" />
  </SliceSimulator>
</template>

<script>
import { SliceSimulator } from '@slicemachine/adapter-nuxt2/dist/simulator.cjs'
import { components } from '~/slices'

export default {
  components: {
    SliceSimulator
  },
  data () {
    return { components }
  }
}
</script>
