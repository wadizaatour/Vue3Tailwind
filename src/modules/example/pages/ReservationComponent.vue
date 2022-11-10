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
    <h1 class="text-3xl font-bold underline">Hello cow manager</h1>
    <h4 class="font-bold">Tailwind reservation</h4>
    <calendar></calendar>
  </div>
</template>
