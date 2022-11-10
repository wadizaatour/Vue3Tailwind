<template>
  <label :class="labelStyle"><slot /></label>
</template>
<script lang="ts" setup>
  import { labelStyle } from "@/services/labels";
</script>
