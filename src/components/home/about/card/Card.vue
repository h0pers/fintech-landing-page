<script setup>
const props = defineProps({
  isActive: { type: Boolean, required: false, default: false },
})

const emit = defineEmits(['click'])
</script>
<template>
  <button
    @click="emit('click', $event)"
    type="button"
    class="flex flex-col items-start text-start py-6 px-5 gap-2 rounded-[20px]"
    :class="props.isActive ? 'border-none bg-lime-300/25' : 'border bg-white border-[#E5E5E5] hover:bg-lime-300/15'"
  >
    <slot></slot>
  </button>
</template>
