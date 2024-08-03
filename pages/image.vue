<template>
  <div>
    <h1>生成された画像の表示</h1>
    <img :src="imagePath" alt="Generated Image" v-if="imagePath" />
    <button @click="goBack">戻る</button>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const imagePath = ref<string | null>(null);
const router = useRouter();

onMounted(() => {
  const storedImagePath = sessionStorage.getItem('imagePath');
  if (storedImagePath) {
    imagePath.value = storedImagePath;
  } else {
    alert('画像が見つかりません');
    goBack();
  }
});

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
