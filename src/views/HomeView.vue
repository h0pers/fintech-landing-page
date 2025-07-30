<script setup>
import {
  AboutSection,
  HeroSection,
  PartnersSection,
  FeaturesSection,
  SecuritySection,
  ServicesSection,
  ReviewsSection
} from '@/components/home/index.js'
</script>

<template>
  <HeroSection/>
  <PartnersSection class="mb-[120px]"/>
  <AboutSection class="mb-[100px]"/>
  <FeaturesSection class="mb-[120px]"/>
  <SecuritySection class="mb-[120px]" />
  <ServicesSection class="mb-[120px]"/>
  <ReviewsSection class="mb-[120px] py-[120px]"/>
</template>
