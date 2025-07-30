<script setup>

const props = defineProps({
  icon: {
    type: [Object, Function]
  }
})
</script>

<template>
  <div>
    <div class="relative w-full h-full">
      <component :is="props.icon" class="size-6 absolute left-1/2 top-1/2 transform -translate-1/2" />
    </div>
  </div>
</template>
