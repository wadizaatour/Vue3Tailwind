<script setup>
  //step 1: import DefineAsyncClass
  import { defineAsyncComponent } from "vue";
  //step 2: declare a new const for the imported component
  const MyComponent = defineAsyncComponent(() =>
    import("@/components/IncentivesComponent.vue")
  );
</script>
<template>
  <!-- step 3: add the component in template -->
  <MyComponent />
</template>
