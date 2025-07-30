<script setup>
import { ref } from 'vue'
import { Navbar, links } from '.'

const navbar = ref(null)
const items = ref(links)

defineExpose({
  navbar
})
</script>

<template>
  <header id="header" class="fixed top-0 left-0 w-full z-10 py-5">
    <div class="container">
      <Navbar ref="navbar" :items="items" />
    </div>
  </header>
</template>
