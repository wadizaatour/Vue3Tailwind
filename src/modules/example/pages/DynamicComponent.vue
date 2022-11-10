<script lang="ts" setup>
  //Step 1 import component using @ <== alias configured in Vite
  import ButtonComponent from "@/components/ButtonComponent.vue";
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
      ButtonComponent: ButtonComponent,
    },
  };
</script>
<template>
  <div>
    <h4 class="font-bold">Dynamic components</h4>
    <!-- step 2  is refer to the actual component to render -->
    <!-- <div class="space-x-5">
      <component :is="ButtonComponent" size="small" value="Button"></component>
    </div> -->
    <div class="space-x-5 m-1">
      <component
        :is="button.name"
        v-for="button in buttons"
        :id="button.id"
        :key="button.id"
        :size="button.size"
        :events="button.events"
        :value="`button ${button.size}`"
      ></component>
    </div>
  </div>
</template>
