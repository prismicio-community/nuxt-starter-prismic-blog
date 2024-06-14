<script setup lang="ts">
import { SliceSimulator } from "@slicemachine/adapter-nuxt/simulator";
import { components } from "~/slices";
</script>

<template>
  <SliceSimulator v-slot="{ slices }">
    <SliceZone
      :slices="slices"
      :components="components"
    />
  </SliceSimulator>
</template>
