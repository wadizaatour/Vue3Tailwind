<script lang="ts" setup>
  import { defaultButton } from "@/services/buttons";
  import { defineEmits } from "vue";
  type Size = "small" | "default" | "large";
  const emit = defineEmits(["submit"]);
  defineProps({
    size: {
      type: String,
      default: "default",
    },
    events: {
      type: String,
      default: "default",
    },

    value: {
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
  function submit() {
    emit("submit");
  }
</script>
<template>
  <button type="submit" :class="sizeStyle[size]" @click="submit">
    {{ value }}
  </button>
</template>
