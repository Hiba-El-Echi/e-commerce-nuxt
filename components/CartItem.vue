<template>
  <div class="flex justify-start my-2">
    <div class="my-auto">
      <div
        @mouseenter="isHover = true"
        @mouseleave="isHover = false"
        class="flex items-center justify-start p-0.5 cursor-pointer"
      >
        <div
          @click="isSelected = !isSelected"
          class="flex items-center justify-center h-[20px] w-[20px] rounded-full border mr-5 ml-2"
          :class="[
            isHover ? 'border-[#4ade80]' : 'border-gray-300',
            isSelected ? 'bg-[#4ade80]' : '',
          ]"
        >
          <div class="h-[8px] w-[8px] rounded-full bg-white" />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
let isHover = ref(false)
let isSelected = ref(false)
</script>
