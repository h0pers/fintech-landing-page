<script setup>
import { Primitive } from "reka-ui";
import { cn } from "@/lib/utils";
import { buttonVariants, sideIconVariants } from '.'
import SideIcon from '@/components/ui/button/SideIcon.vue'

const props = defineProps({
  variant: { type: null, required: false },
  size: { type: null, required: false },
  class: { type: null, required: false },
  sideIcon: { type: null, required: false },
  asChild: { type: Boolean, required: false },
  as: { type: null, required: false, default: "button" },
});
</script>
<template>
    <Primitive
      data-slot="button"
      :as="as"
      :as-child="asChild"
      :class="cn(
        buttonVariants({ variant, size }),
        props.class,
        props.sideIcon && 'relative group pr-8')"
    >
      <slot />
      <SideIcon
        v-if="props.sideIcon"
        :icon="props.sideIcon"
        :class="cn(
          sideIconVariants({ variant })
        )"
      />
    </Primitive>
</template>
