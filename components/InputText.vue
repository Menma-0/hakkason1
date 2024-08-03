<!-- <template>
    <div>
        <p>{{ title }}</p>
        <input/>
    </div>
</template>
<script setup lang="ts">
const props = defineProps({
    title: String,
})
</script> -->

<template>
    <div>
      <p>{{ title }}</p>
      <input v-model="inputValue" />
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, defineProps, defineEmits } from 'vue';
  
  // Propsを定義
  const props = defineProps({
    title: String,
    modelValue: String,
  });
  
  // emitsを定義
  const emit = defineEmits(['update:modelValue']);
  
  // 入力値をリアクティブにする
  const inputValue = ref(props.modelValue);
  
  // 入力値の変更を監視
  watch(inputValue, (newValue) => {
    emit('update:modelValue', newValue);
  });
  </script>
  
  <style scoped>
  input {
    width: calc(100% - 24px);
    padding: 8px;
    font-size: 16px;
    margin-bottom: 8px;
  }
  </style>
  