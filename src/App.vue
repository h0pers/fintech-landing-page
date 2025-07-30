<script setup>
import { RouterView } from 'vue-router'
import { Header } from '@/components/header'
import Footer from '@/components/footer/Footer.vue'
import { ref } from 'vue'

const header = ref(null)

</script>

<template>
  <Header ref="header" />
  <RouterView />
  <Footer class="mb-7" />
</template>
