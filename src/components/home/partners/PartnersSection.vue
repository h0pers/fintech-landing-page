<script setup>
import { ref } from 'vue'
import { VueMarqueeSlider } from 'vue3-marquee-slider'
import partners from '@/components/home/partners/partners.js'
import '@node/vue3-marquee-slider/dist/style.css'

const items = ref(partners)

</script>
<template>
  <section id="partners" class="bg-[#04684C] py-5">
    <vue-marquee-slider
      id="partners-slider"
      :speed="15000"
      :space="75"
    >
      <img v-for="(partner, index) in items" :key="index" :src="partner.img" />
    </vue-marquee-slider>
  </section>
</template>
