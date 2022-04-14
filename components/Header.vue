<template>
  <Bounded as="header">
    <div class="grid grid-cols-1 justify-items-center gap-20">
      <nav>
        <ul class="flex flex-wrap justify-center gap-10">
          <HeaderNavItem>
            <NuxtLink to="/">
              {{ $prismic.asText(navigation.data.homepageLabel) }}
            </NuxtLink>
          </HeaderNavItem>
          <HeaderNavItem
            v-for="item in navigation.data.links"
            :key="$prismic.asText(item.label)"
          >
            <PrismicLink :field="item.link">
              {{ $prismic.asText(item.label) }}
            </PrismicLink>
          </HeaderNavItem>
        </ul>
      </nav>
      <HeaderProfile
        v-if="withProfile"
        :name="settings.data.name"
        :description="settings.data.description"
        :profile-picture="settings.data.profilePicture"
      />
      <HorizontalDivider v-if="withDivider" />
    </div>
  </Bounded>
</template>

<script>
export default {
  props: {
    withDivider: {
      type: Boolean,
      default: true
    },
    withProfile: {
      type: Boolean,
      default: true
    },
    navigation: {
      type: Object,
      required: true
    },
    settings: {
      type: Object,
      required: true
    }
  }
}
</script>
