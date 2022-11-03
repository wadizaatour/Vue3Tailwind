<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <nav aria-label="Progress">
    <ol role="list" class="overflow-hidden">
      <li v-for="(step, stepIdx) in steps" :key="step.name" :class="[stepIdx !== steps.length - 1 ? 'pb-10' : '', 'relative']">
        <div v-if="step.status === 'complete'">
          <div v-if="stepIdx !== steps.length - 1" class="absolute top-4 left-4 -ml-px mt-0.5 h-full w-0.5 bg-indigo-600" aria-hidden="true" />
          <a :href="step.href" class="group relative flex items-start">
            <span class="flex h-9 items-center">
              <span class="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 group-hover:bg-indigo-800">
                <CheckIcon class="h-5 w-5 text-white" aria-hidden="true" />
              </span>
            </span>
            <span class="ml-4 flex min-w-0 flex-col">
              <span class="text-sm font-medium">{{ step.name }}</span>
              <span class="text-sm text-gray-500">{{ step.description }}</span>
            </span>
          </a>
        </div>
        <div v-else-if="step.status === 'current'" condition="step.status === 'current'">
          <div v-if="stepIdx !== steps.length - 1" class="absolute top-4 left-4 -ml-px mt-0.5 h-full w-0.5 bg-gray-300" aria-hidden="true" />
          <a :href="step.href" class="group relative flex items-start" aria-current="step">
            <span class="flex h-9 items-center" aria-hidden="true">
              <span class="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 border-indigo-600 bg-white">
                <span class="h-2.5 w-2.5 rounded-full bg-indigo-600" />
              </span>
            </span>
            <span class="ml-4 flex min-w-0 flex-col">
              <span class="text-sm font-medium text-indigo-600">{{ step.name }}</span>
              <span class="text-sm text-gray-500">{{ step.description }}</span>
            </span>
          </a>
        </div>
        <div v-else>
          <div v-if="stepIdx !== steps.length - 1" class="absolute top-4 left-4 -ml-px mt-0.5 h-full w-0.5 bg-gray-300" aria-hidden="true" />
          <a :href="step.href" class="group relative flex items-start">
            <span class="flex h-9 items-center" aria-hidden="true">
              <span class="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 border-gray-300 bg-white group-hover:border-gray-400">
                <span class="h-2.5 w-2.5 rounded-full bg-transparent group-hover:bg-gray-300" />
              </span>
            </span>
            <span class="ml-4 flex min-w-0 flex-col">
              <span class="text-sm font-medium text-gray-500">{{ step.name }}</span>
              <span class="text-sm text-gray-500">{{ step.description }}</span>
            </span>
          </a>
        </div>
      </li>
    </ol>
  </nav>
</template>

<script setup>
import { CheckIcon } from '@heroicons/vue/20/solid'

const steps = [
  { name: 'Create account', description: 'Vitae sed mi luctus laoreet.', href: '#', status: 'complete' },
  {
    name: 'Profile information',
    description: 'Cursus semper viverra facilisis et et some more.',
    href: '#',
    status: 'current',
  },
  { name: 'Business information', description: 'Penatibus eu quis ante.', href: '#', status: 'upcoming' },
  { name: 'Theme', description: 'Faucibus nec enim leo et.', href: '#', status: 'upcoming' },
  { name: 'Preview', description: 'Iusto et officia maiores porro ad non quas.', href: '#', status: 'upcoming' },
]
</script>