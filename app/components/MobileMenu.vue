<script setup lang="ts">
import type { NavigationDocumentData } from '../../prismicio-types'

interface Props {
    navigation: NavigationDocumentData | null
}

defineProps<Props>()
const isOpen = ref(false)

// Close menu when clicking outside or pressing escape
const closeMenu = () => {
    isOpen.value = false
}

onMounted(() => {
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeMenu()
    })
})

onUnmounted(() => {
    document.removeEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeMenu()
    })
})

// Prevent body scroll when menu is open
watch(isOpen, (newValue) => {
    if (newValue) {
        document.body.style.overflow = 'hidden'
    } else {
        document.body.style.overflow = ''
    }
})
</script>

<template>
    <div class="lg:hidden">
        <!-- Hamburger Button -->
        <button @click="isOpen = !isOpen"
            class="flex flex-col justify-center items-center w-12 h-12 space-y-1.5 focus:outline-none absolute top-4 right-4 z-50"
            :aria-label="isOpen ? 'Close menu' : 'Open menu'">
            <span class="block w-7 h-0.5 transition-all duration-300"
                :class="isOpen ? 'bg-white rotate-45 translate-y-2' : 'bg-slate-800'" />
            <span class="block w-7 h-0.5 transition-all duration-300"
                :class="isOpen ? 'bg-white opacity-0' : 'bg-slate-800'" />
            <span class="block w-7 h-0.5 transition-all duration-300"
                :class="isOpen ? 'bg-white -rotate-45 -translate-y-2' : 'bg-slate-800'" />
        </button>

        <!-- Mobile Menu Overlay and Panel -->
        <Transition enter-active-class="transition duration-300 ease-out" enter-from-class="opacity-0"
            enter-to-class="opacity-100" leave-active-class="transition duration-200 ease-in"
            leave-from-class="opacity-100" leave-to-class="opacity-0">
            <div v-if="isOpen" class="fixed inset-0 bg-black bg-opacity-90 z-40 flex items-center justify-center"
                @click.self="closeMenu">
                <nav class="w-full">
                    <ul class="flex flex-col items-center space-y-8">
                        <li class="font-semibold tracking-tight text-slate-100 text-2xl">
                            <NuxtLink to="/" @click="closeMenu"
                                class="block py-2 hover:text-slate-300 transition-colors">
                                {{ $prismic.asText(navigation?.homepageLabel) }}
                            </NuxtLink>
                        </li>
                        <li v-for="item in navigation?.links" :key="$prismic.asText(item.label) || ''"
                            class="font-semibold tracking-tight text-slate-100 text-2xl">
                            <PrismicLink :field="item.link" @click="closeMenu"
                                class="block py-2 hover:text-slate-300 transition-colors">
                                {{ $prismic.asText(item.label) }}
                            </PrismicLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </Transition>
    </div>
</template>