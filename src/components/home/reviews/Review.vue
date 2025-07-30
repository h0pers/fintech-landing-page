<script setup>
import { cn } from "@/lib/utils";
import { reviewsVariants } from '.'

const props = defineProps({
  body: {
    type: String,
    required: true
  },
  avatar: {
    type: String,
    required: false,
  },
  fullName: {
    type: String,
    required: true,
  },
  variant: {
    type: String,
    required: false,
  },
  position: {
    type: String,
    required: false,
  }
})
</script>

<template>
  <div :class="cn(
    reviewsVariants({ variant }))"
  >
    <div>
      <img src="@/assets/icons/quote.svg" alt="Quote">
    </div>
    <p class="leading-[150%]">
      {{ body }}
    </p>
    <div class="flex items-center gap-3">
      <img :src="props.avatar" alt="Avatar">
      <div>
        <div>
          <img src="@/assets/img/reviews/stars.svg" alt="Stars">
        </div>
        <h4 class="font-medium ">{{ fullName }}</h4>
        <h5 v-if="props.position">{{ position }}</h5>
      </div>
    </div>
  </div>
</template>
