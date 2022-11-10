<script lang="ts" setup>
  import { defaultButton } from "@/services/buttons";
  type Size = "small" | "default" | "large";
  defineProps({
    size: {
      type: String,
      default: "default",
    },
  });

  //Record to define object in typescript
  const sizeStyle: Record<Size, string> = {
    small: `h-8 w-22 bg-red-600  ${defaultButton}`,
    default: `h-12 w-22  bg-indigo-600 ${defaultButton}`,
    large: `h-16 w-22 bg-blue-600 ${defaultButton}`,
  };
</script>
<template>
  <button type="button" :class="sizeStyle[size]">Button {{ size }}</button>
</template>
