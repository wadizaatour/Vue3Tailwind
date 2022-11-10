<script lang="ts" setup>
  import { InputType, inputStyle } from "@/services/inputs";
  defineProps({
    typeInput: {
      type: String,
      default: "default",
    },
  });
</script>
<template>
  <slot />
  <input :type="InputType[typeInput]" :class="inputStyle" />
</template>
