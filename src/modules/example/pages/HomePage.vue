<script lang="ts">
  //Step 1 import component using @ <== alias configured in Vite
  import GridListsComponent from "@/components/GridListsComponent.vue";
  //Step 2 Register your component so the SFC have access for it
  export default {
    components: {
      GridListsComponent: GridListsComponent,
    },
  };
</script>

<template>
  <div>
    <h1 class="text-3xl font-bold underline">Hello cow manager</h1>
    <!-- step 3 We like to have all hour component registred in this format -->
    <grid-lists-component></grid-lists-component>
  </div>
</template>
