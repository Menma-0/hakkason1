<template>
    <div>
      <h1>画像とテキストをキャプチャ</h1>
      
      <!-- 画像のアップロード -->
      <input type="file" accept="image/*" @change="onImageFileChange" />
  
      <!-- テキストエリア -->
      <div class="container">
        <img v-if="uploadedImageSrc" :src="uploadedImageSrc" alt="Input Image" class="input-image" />
        <textarea v-model="textAreas[0]" class="input-area"></textarea>
        <textarea v-model="textAreas[1]" class="input-area"></textarea>
        <textarea v-model="textAreas[2]" class="input-area"></textarea>
        <textarea v-model="textAreas[3]" class="input-area"></textarea>
        <textarea v-model="textAreas[4]" class="input-area"></textarea>
      </div>
  
      <!-- ページをキャプチャして画像として保存 -->
      <button @click="captureAndSaveImage">画像を生成</button>
      
      <!-- 生成された画像のプレビュー -->
      <div v-if="imageSrc" class="output-container">
        <h2>生成された画像</h2>
        <img :src="imageSrc" alt="Output Image" class="output-image" />
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import html2canvas from 'html2canvas';
  
  const uploadedImageSrc = ref('');
  const imageSrc = ref('');
  const textAreas = ref(['', '', '', '', '']);
  
  // 画像ファイルが選択されたときの処理
  const onImageFileChange = (event) => {
    const input = event.target;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      uploadedImageSrc.value = URL.createObjectURL(file);
    }
  };
  
  // コンテンツをキャプチャして画像として保存
  const captureAndSaveImage = async () => {
    const container = document.querySelector('.container');
    if (!container) return;
  
    // html2canvasでコンテナをキャプチャ
    const canvas = await html2canvas(container, {
      useCORS: true, // クロスオリジンの画像を処理するため
    });
  
    // 画像データURLを取得して表示
    imageSrc.value = canvas.toDataURL('image/png');
  
    // 画像をダウンロードする場合
    // const link = document.createElement('a');
    // link.href = imageSrc.value;
    // link.download = 'captured_image.png';
    // link.click();
  };
  </script>
  
  <style scoped>
  .container {
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    border: 1px solid #ccc;
    padding: 16px;
    background-color: #f9f9f9;
    width: 100%;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }
  
  .input-image {
    max-width: 100%;
    height: auto;
    border: 1px solid #000;
  }
  
  .input-area {
    width: calc(100% - 24px);
    height: 60px;
    font-size: 16px;
    padding: 8px;
    margin-bottom: 8px;
  }
  
  .output-container {
    margin-top: 24px;
    text-align: center;
  }
  
  .output-image {
    max-width: 100%;
    height: auto;
    border: 1px solid #000;
    margin-top: 16px;
  }
  </style>
  