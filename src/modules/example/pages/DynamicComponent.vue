<script lang="ts" setup>
  //https://vuejs.org/guide/built-ins/keep-alive.html#basic-usage
  //Step 1 import component using @ <== alias configured in Vite
  import PrimaryButtonComponent from "@/components/PrimaryButtonComponent.vue";

  import { ref } from 'vue'
  const count = ref(0)
</script>

<template>
  <div>
    <h1 class="text-3xl font-bold underline">Hello World</h1>
    <h4 class="font-bold">Dynamic components</h4>
    <!-- step 2  is refer to the actual component to render -->
    <component :is="PrimaryButtonComponent" class="tab"></component>

    <KeepAlive>
      <button  class="inline-flex items-center rounded border border-transparent bg-indigo-600 px-2.5 py-1.5 text-xs font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" @click="count++" > click me {{ count }} </button>
    </KeepAlive>
  </div>
</template>
