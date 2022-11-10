import { mount } from "@vue/test-utils";
import ButtonComponent from "@/components/ButtonComponent.vue";

test("trigger", async () => {
  const wrapper = mount(ButtonComponent);

  // trigger the element
  await wrapper.find("button").trigger("click");

  // assert some action has been performed, like an emitted event.
  expect(wrapper.emitted()).toHaveProperty("submit");
});
