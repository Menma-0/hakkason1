<template>
    <div>
      <h1>生成された画像の表示</h1>
      <img :src="imageSrc" alt="Generated Image" v-if="imageSrc" />
      <button @click="goBack">戻る</button>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { useRoute, useRouter } from 'vue-router';
  
  const route = useRoute();
  const router = useRouter();
  
  const imageSrc = route.params.imageSrc as string;
  
  // 戻るボタンの処理
  const goBack = () => {
    router.push('/');
  };
  </script>
  
  <style scoped>
  h1 {
    font-size: 24px;
    margin-bottom: 16px;
  }
  
  img {
    max-width: 100%;
    height: auto;
    margin-top: 16px;
    border: 1px solid #000;
  }
  
  button {
    margin-top: 16px;
    padding: 8px 16px;
    font-size: 16px;
    cursor: pointer;
  }
  </style>
  