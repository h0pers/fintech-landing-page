<script setup>
import { ref } from 'vue'
import { Button } from '@/components/ui/button'
import { MenuIcon } from 'lucide-vue-next'

const menuOpen = ref(false)

const props = defineProps({
  items: {
    type: Array,
    required: true
  }
})

const closeMenu = () => {
  menuOpen.value = false
  document.body.style.overflow = 'hidden'
}

const openMenu = () => {
  menuOpen.value = open
  document.body.style.overflow = ''
}

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
  document.body.style.overflow = menuOpen.value ? 'hidden' : ''
}

defineExpose({
    toggleMenu,
    openMenu,
    closeMenu,
  }
)
</script>

<template>
  <nav class="navbar flex w-full justify-between items-center gap-10 text-[#DCDCDC]">
    <a href="#" class="z-100 md:z-0"><img src="@/assets/icons/logo.svg" alt="Logo"></a>
    <ul class="menu transition-all bg-[#04684C] md:bg-transparent duration-700 fixed left-0 md:static flex flex-col md:flex-row gap-[24px] items-center justify-center w-full h-full z-99 md:z-0" :class="menuOpen ? 'top-0 ': 'top-[-100%]'">
      <li v-for="(item, number) in props.items" :key="number" class="menu-item"><a :href="item.href">{{ item.title }}</a></li>
    </ul>
    <div class="flex items-center gap-2.5 z-100 md:z-0">
      <Button variant="secondaryOutline" as="a" size="md" href="#">Sign In</Button>
      <Button @click="toggleMenu" variant="secondaryOutline" size="md" class="p-4 flex md:hidden">
        <MenuIcon/>
      </Button>
    </div>
  </nav>
</template>
