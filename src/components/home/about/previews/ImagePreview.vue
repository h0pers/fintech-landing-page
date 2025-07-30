<script setup>
const props = defineProps({
  image: String,
  alt: {
    type: String,
    required: true
  }
})
</script>

<template>
  <img :src="props.image" :alt="props.alt">
</template>
