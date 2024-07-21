<template>
  <main class="container">
    <div class="flex flex-col gap-4">
      Страница-1

      <button 
        class="px-3 py-2 bg-green-500 rounded-lg w-min whitespace-nowrap hover:bg-green-600" 
        @click="modalActive = true"
      >
        Открыть модальное окно
      </button>

      

      <BaseModal 
        :modalActive="modalActive"
        @close-modal="toggleModal"
      >
        <div>
          Контент модального окна
        </div>
      </BaseModal>
    </div>
  </main>
</template>

<script setup>
import BaseModal from "../components/BaseModal.vue";
import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

const router = useRouter();

const modalActive = ref(false);
const toggleModal = () => {
  modalActive.value = !modalActive.value
}

</script>

<style lang="scss" scoped></style>
