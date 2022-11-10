<script lang="ts" setup>
  import * as Form from "@/services/form-components";
  import { InputType } from "@/services/inputs";
  import ButtonComponent from "@/components/ButtonComponent.vue";
</script>

<template>
  <div class="mx-auto w-full max-w-xs bg-gray-100 p-5">
    <Form.Input :type-input="InputType.text">
      <Form.Label>This is my new label </Form.Label>
    </Form.Input>
    <Form.Input :type-input="InputType.email">
      <Form.Label>Email</Form.Label>
    </Form.Input>
    <Form.Input :type-input="InputType.password">
      <Form.Label>Password</Form.Label>
    </Form.Input>
    <button-component class="m-2"> test </button-component>
  </div>
</template>
