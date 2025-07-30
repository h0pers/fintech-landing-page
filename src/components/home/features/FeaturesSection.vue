<script setup>
import features from '@/components/home/features/features.js'
import { Button } from '@/components/ui/button'
import { ref } from 'vue'
import { ArrowUpRight } from 'lucide-vue-next'

const items = ref(features)
</script>

<template>
  <div class="container">
    <div data-aos="fade-in" class="grid grid-cols-1 lg:grid-cols-2 gap-20">
      <div class="space-y-10">
        <div class="space-y-5">
          <Button as="h3" variant="label" size="sm">
            <img src="@/assets/icons/fire-icon.svg" alt="Fire icon">
            Featured
          </Button>
          <div class="space-y-3">
            <h2 class="text-neutral-950 font-integral text-4xl sm:text-5xl uppercase leading-[120%]">
              All the features in one app
            </h2>
            <ul class="space-y-4 list-disc ml-6 leading-[150%] text-[#676666]">
              <li v-for="(feature, number) in items" :key="number">
                {{ feature.text }}
              </li>
            </ul>
          </div>
        </div>
        <Button variant="outline" :side-icon="ArrowUpRight">Get Started</Button>
      </div>
      <div class="rounded-[20px] bg-[#F6F9F8] border border-black/6 pl-10 pr-2.5">
        <img src="@/assets/img/features/thumbnail.png" alt="Thumbnail">
      </div>
    </div>
  </div>
</template>
