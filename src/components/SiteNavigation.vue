<script setup>
 import {routes} from '../router'
</script>
<template>
 <div class="flex gap-2 p-4 bg-gray-400 border rounded-lg">
  <router-link v-for="route in routes" :key="route.name" :to="route.path" class="px-2 border-2 border-black rounded-lg">
   {{ route.meta.title }}
  </router-link>
 </div>
</template>