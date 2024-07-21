<template>
  <main class="container">
    Главная
    <div class="relative pt-4 mb-8">
      <input
        type="text"
        v-model="searchQuery"
        @input="getSearchRezults"
        placeholder="Поиск..."
        class="py-2 px-1 w-full bg-transparent border-b focus:border-weather-secondary focus:outline-none focus:shadow-[0px_1px_0_0_#004E71]"
      />
    </div>
    <div class="flex flex-col gap-4">
      <Suspense>
        <template #fallback>
        </template>
      </Suspense>
    </div>
  </main>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

const router = useRouter();
const searchQuery = ref('')
const getSearchRezults = () => {
  console.log('getSearchRezults');
}
</script>

<style lang="scss" scoped></style>
