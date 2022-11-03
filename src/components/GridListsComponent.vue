<template>
     <h1 v-my-directive>This is a before mount</h1>

  <ul role="list" class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
    <li
      v-for="person in people"
      :key="person.email"
      class="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow"
    >
      <div class="flex w-full items-center justify-between space-x-6 p-6">
        <div class="flex-1 truncate">
          <div class="flex items-center space-x-3">
            <h3 class="truncate text-sm font-medium text-gray-900">
              {{ person.name }}
            </h3>
            <span
              class="inline-block flex-shrink-0 rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800"
              >{{ person.role }}</span
            >
          </div>
          <p class="mt-1 truncate text-sm text-gray-500">{{ person.title }}</p>
        </div>
        <img
          class="h-10 w-10 flex-shrink-0 rounded-full bg-gray-300"
          :src="person.imageUrl"
          alt=""
        />
      </div>
      <div>
        <div class="-mt-px flex divide-x divide-gray-200">
          <div class="flex w-0 flex-1">
            <a
              :href="`mailto:${person.email}`"
              class="relative -mr-px inline-flex w-0 flex-1 items-center justify-center rounded-bl-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-gray-500"
            >
              <EnvelopeIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
              <span class="ml-3">Email</span>
            </a>
          </div>
          <div class="-ml-px flex w-0 flex-1">
            <a
              :href="`tel:${person.telephone}`"
              class="relative inline-flex w-0 flex-1 items-center justify-center rounded-br-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-gray-500"
            >
              <PhoneIcon class="h-5 w-5 text-gray-400"  aria-hidden="true" @click="showHello" />
              <span class="ml-3">Call</span>
            </a>
          </div>
        </div>
      </div>
    </li>
  </ul>
</template>


<script setup>
  import { EnvelopeIcon, PhoneIcon } from "@heroicons/vue/20/solid";
  const people = [
    {
      name: "Wadi zaatour",
      title: "Lead frontend engineer",
      role: "Admin",
      email: "wadizaatour@example.com",
      telephone: "+1-202-555-0170",
      imageUrl:
        "https://media-exp1.licdn.com/dms/image/C5603AQFToD7hLeGSgg/profile-displayphoto-shrink_800_800/0/1559116396480?e=2147483647&v=beta&t=W-5ydwEk9msHFVSQN2JSoX0oKpKUiO9XIyzdGWn6bkI",
    },
    {
      name: "Wadi zaatour",
      title: "Lead frontend engineer",
      role: "Admin",
      email: "wadizaatour@example.com",
      telephone: "+1-202-555-0170",
      imageUrl:
        "https://media-exp1.licdn.com/dms/image/C5603AQFToD7hLeGSgg/profile-displayphoto-shrink_800_800/0/1559116396480?e=2147483647&v=beta&t=W-5ydwEk9msHFVSQN2JSoX0oKpKUiO9XIyzdGWn6bkI",
    },
    {
      name: "Wadi zaatour",
      title: "Lead frontend engineer",
      role: "Admin",
      email: "wadizaatour@example.com",
      telephone: "+1-202-555-0170",
      imageUrl:
        "https://media-exp1.licdn.com/dms/image/C5603AQFToD7hLeGSgg/profile-displayphoto-shrink_800_800/0/1559116396480?e=2147483647&v=beta&t=W-5ydwEk9msHFVSQN2JSoX0oKpKUiO9XIyzdGWn6bkI",
    },
    {
      name: "Wadi zaatour",
      title: "Lead frontend engineer",
      role: "Admin",
      email: "wadizaatour@example.com",
      telephone: "+1-202-555-0170",
      imageUrl:
        "https://media-exp1.licdn.com/dms/image/C5603AQFToD7hLeGSgg/profile-displayphoto-shrink_800_800/0/1559116396480?e=2147483647&v=beta&t=W-5ydwEk9msHFVSQN2JSoX0oKpKUiO9XIyzdGWn6bkI",
    },
    {
      name: "Wadi zaatour",
      title: "Lead frontend engineer",
      role: "Admin",
      email: "wadizaatour@example.com",
      telephone: "+1-202-555-0170",
      imageUrl:
        "https://media-exp1.licdn.com/dms/image/C5603AQFToD7hLeGSgg/profile-displayphoto-shrink_800_800/0/1559116396480?e=2147483647&v=beta&t=W-5ydwEk9msHFVSQN2JSoX0oKpKUiO9XIyzdGWn6bkI",
    },
    {
      name: "Wadi zaatour",
      title: "Lead frontend engineer",
      role: "Admin",
      email: "wadizaatour@example.com",
      telephone: "+1-202-555-0170",
      imageUrl:
        "https://media-exp1.licdn.com/dms/image/C5603AQFToD7hLeGSgg/profile-displayphoto-shrink_800_800/0/1559116396480?e=2147483647&v=beta&t=W-5ydwEk9msHFVSQN2JSoX0oKpKUiO9XIyzdGWn6bkI",
    },
    {
      name: "Wadi zaatour",
      title: "Lead frontend engineer",
      role: "Admin",
      email: "wadizaatour@example.com",
      telephone: "+1-202-555-0170",
      imageUrl:
        "https://media-exp1.licdn.com/dms/image/C5603AQFToD7hLeGSgg/profile-displayphoto-shrink_800_800/0/1559116396480?e=2147483647&v=beta&t=W-5ydwEk9msHFVSQN2JSoX0oKpKUiO9XIyzdGWn6bkI",
    },
    // More people...
  ];
  function showHello() {
    console.log('hello');
  }
 
</script>

<script>
const vMyDirective = {
  beforeMount: () => {
    console.log('Hello from before mount')
  }
}
 
</script>