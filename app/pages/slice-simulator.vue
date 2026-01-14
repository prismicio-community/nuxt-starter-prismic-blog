<script setup lang="ts">
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
