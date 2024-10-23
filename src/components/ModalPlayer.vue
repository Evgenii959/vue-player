<template>
  <div>
    <a-button @click="showModal">Open Modal</a-button>
    <a-modal
      :open="isModalVisible"
      @cancel="handleCancel"
      @ok="handleOk"
    >
      <p>Content of the Modal</p>
    </a-modal>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isModalVisible = ref(false);

const showModal = () => {
  isModalVisible.value = true;
};

const handleCancel = () => {
  isModalVisible.value = false;
};

const handleOk = () => {
  isModalVisible.value = false;
};
</script>