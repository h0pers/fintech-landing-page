<script setup>
import { computed, ref } from 'vue'
import { Card, CardTitle, CardBody } from '@/components/home/about/card';
import cards from './cards.js';
import { Button } from '@/components/ui/button/index.js'

const items = ref(cards)

const activeItemIndex = ref(0)

const currentPreview = computed(() => {
  return {
    component: items.value[activeItemIndex.value].preview,
    props: items.value[activeItemIndex.value].previewProps
  }
})

const changeItemPreview = (index) => {
  activeItemIndex.value = index
}

const isActiveItem = (index) => {
  return activeItemIndex.value === index
}

</script>

<template>
  <section id="about">
    <div class="container">
      <div data-aos="fade-in" class="grid grid-cols-1 lg:grid-cols-2 items-center gap-[85px]">
        <div class="order-1 lg:order-0">
          <div class="flex items-center justify-center">
            <div class="p-13 bg-[#F5F5F5] border border-black/6 rounded-[20px]">
              <component :is="currentPreview.component"
                         v-bind="currentPreview.props"
              />
            </div>
          </div>
        </div>
        <div>
          <div class="flex gap-4 flex-col items-start mb-4">
            <Button as="h3" variant="label" size="sm">
              <img src="@/assets/icons/fire-icon.svg" alt="Fire icon">
              About Us
            </Button>
            <h2 class="text-4xl sm:text-5xl uppercase font-integral leading-[120%]">
              All your money needs in one app
            </h2>
          </div>
          <div>
            <div class="flex flex-col gap-3">
              <Card @click="changeItemPreview(number)" v-for="(item, number) in items" :key="number"
                    :is-active="isActiveItem(number)">
                <CardTitle>{{ item.title }}</CardTitle>
                <CardBody>
                  {{ item.body }}
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
