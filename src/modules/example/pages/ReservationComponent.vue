<script lang="ts">
  //Step 1 import component using @ <== alias configured in Vite
  import Calendar from "@/components/CalendarComponent.vue";
  //Step 2 Register your component so the SFC have access for it
  export default {
    components: {
      Calendar: Calendar,
    },
  };
</script>

<template>
  <div>
    <calendar></calendar>
  </div>
</template>
