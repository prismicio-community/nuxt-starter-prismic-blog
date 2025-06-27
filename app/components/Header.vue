<script setup lang="ts">
defineProps({
  withDivider: {
    type: Boolean,
    default: true,
  },
  withProfile: {
    type: Boolean,
    default: true
  }
})

const navigation = useNavigation()
const settings = useSettings()

// Detect if mobile menu should be shown based on navigation links
const shouldShowMobileMenu = ref(false)
const navRef = ref<HTMLElement>()
const isNavReady = ref(false)

onMounted(() => {
  const checkNavOverflow = () => {
    if (navRef.value) {
      const nav = navRef.value
      const navItems = nav.querySelectorAll('li')
      let totalWidth = 0

      navItems.forEach(item => {
        totalWidth += item.offsetWidth
      })

      // Add some padding for the gap between items
      const gapWidth = (navItems.length - 1) * 40 // gap-10 = 2.5rem = 40px
      totalWidth += gapWidth

      // If total width exceeds container width, show mobile menu
      shouldShowMobileMenu.value = totalWidth > nav.offsetWidth
      isNavReady.value = true
    }
  }

  // Check on mount and window resize
  checkNavOverflow()
  window.addEventListener('resize', checkNavOverflow)

  // Cleanup
  onUnmounted(() => {
    window.removeEventListener('resize', checkNavOverflow)
  })
})
</script>

<template>
  <Bounded as="header">
    <div class="relative grid grid-cols-1 justify-items-center gap-20">
      <nav class="w-full flex flex-col items-center">
        <!-- Desktop Navigation -->
        <ul ref="navRef" class="flex flex-wrap justify-center gap-10 lg:flex-nowrap" :class="{
          'hidden lg:flex': shouldShowMobileMenu && isNavReady,
          'hidden': !isNavReady,
          'flex': isNavReady && !shouldShowMobileMenu
        }">
          <HeaderNavItem>
            <NuxtLink to="/">
              {{ $prismic.asText(navigation?.data.homepageLabel) }}
            </NuxtLink>
          </HeaderNavItem>
          <HeaderNavItem v-for="item in navigation?.data.links" :key="$prismic.asText(item.label) || ''">
            <PrismicLink :field="item.link">
              {{ $prismic.asText(item.label) }}
            </PrismicLink>
          </HeaderNavItem>
        </ul>
        <!-- Mobile Menu -->
        <MobileMenu v-if="shouldShowMobileMenu && isNavReady" :navigation="navigation?.data || null"
          :settings="settings?.data || null" />
      </nav>
      <HeaderProfile v-if="withProfile" :name="settings?.data.name" :description="settings?.data.description"
        :profile-picture="settings?.data.profilePicture" />
      <HorizontalDivider v-if="withDivider" />
    </div>
  </Bounded>
</template>
