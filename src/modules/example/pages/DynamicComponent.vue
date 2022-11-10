<script lang="ts" setup>
  //Step 1 import component using @ <== alias configured in Vite
  import PrimaryButtonComponent from "@/components/PrimaryButtonComponent.vue";
  import { onMounted } from "vue";
  import { buttons } from "@/services/buttons";

  onMounted(() => {
    //Proof that not everything should be strongly types
    // console.log("this is the type: ", typeof buttons);
  });
</script>
<script lang="ts">
  export default {
    components: {
      PrimaryButtonComponent: PrimaryButtonComponent,
    },
  };
</script>
<template>
  <div>
    <h4 class="font-bold">Dynamic components</h4>
    <!-- step 2  is refer to the actual component to render -->
    <div class="space-x-5">
      <component :is="PrimaryButtonComponent" size="small"></component>
      <component :is="PrimaryButtonComponent" size="default"></component>
      <component :is="PrimaryButtonComponent" size="large"></component>
    </div>
    <div class="space-x-5 m-1">
      <component
        :is="button.name"
        v-for="button in buttons"
        :id="button.id"
        :key="button.id"
        :size="button.size"
      ></component>
    </div>
    <!-- <PrimaryButtonComponent size="default" /> -->
  </div>
</template>
