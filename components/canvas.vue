<template>
    <div>
      <h1>画像とテキストを組み合わせる</h1>
      <!-- 画像アップロード -->
      <input type="file" accept="image/*" @change="onImageFileChange" />
      
      <!-- テキスト入力フィールド -->
      <div v-for="(text, index) in texts" :key="index">
        <input
          type="text"
          v-model="texts[index]"
          :placeholder="`テキスト ${index + 1}`"
        />
      </div>
      <button @click="addTextInput">テキストフィールドを追加</button>
      <button @click="removeTextInput" :disabled="texts.length <= 1">テキストフィールドを削除</button>
  
      <!-- キャンバス -->
      <canvas ref="canvas" :width="canvasWidth" :height="canvasHeight" style="display: none;"></canvas>
  
      <!-- プレビュー -->
      <div v-if="imageSrc || outputImageSrc">
        <h2>プレビュー</h2>
        <div>
          <img :src="outputImageSrc" alt="Combined Image" v-if="outputImageSrc" />
        </div>
      </div>
  
      <!-- 画像生成 -->
      <button @click="combineImageAndText" :disabled="!imageSrc">
        画像を生成
      </button>
      <button @click="downloadImage" :disabled="!outputImageSrc">
        画像をダウンロード
      </button>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { ref } from 'vue'
  
  // キャンバスの設定
  const canvasWidth = 800 // キャンバスの幅
  const canvasHeight = 600 // キャンバスの高さ
  
  // リアクティブな状態の管理
  const imageSrc = ref<string | null>(null)
  const outputImageSrc = ref<string | null>(null)
  const texts = ref<string[]>(['']) // 初期状態で1つのテキスト入力
  
  // 画像ファイルの選択
  const onImageFileChange = (event: Event) => {
    const input = event.target as HTMLInputElement
    if (input.files && input.files[0]) {
      const file = input.files[0]
      imageSrc.value = URL.createObjectURL(file)
    }
  }
  
  // テキスト入力フィールドを追加
  const addTextInput = () => {
    texts.value.push('')
  }
  
  // テキスト入力フィールドを削除
  const removeTextInput = () => {
    if (texts.value.length > 1) {
      texts.value.pop()
    }
  }
  
  // 画像とテキストを組み合わせてキャンバスに描画
  const combineImageAndText = () => {
    const canvas = document.createElement('canvas')
    canvas.width = canvasWidth
    canvas.height = canvasHeight
    const context = canvas.getContext('2d')
    if (!context) return
  
    // 背景を白で塗りつぶす
    context.fillStyle = 'white'
    context.fillRect(0, 0, canvasWidth, canvasHeight)
  
    // 画像を描画
    if (imageSrc.value) {
      const img = new Image()
      img.src = imageSrc.value
      img.onload = () => {
        const aspectRatio = img.width / img.height
        const drawWidth = canvasWidth
        const drawHeight = canvasWidth / aspectRatio
        const drawX = 0
        const drawY = (canvasHeight - drawHeight) / 2
  
        context.drawImage(img, drawX, drawY, drawWidth, drawHeight)
  
        // テキストを描画
        context.fillStyle = 'black'
        context.font = '24px Arial'
        const textPadding = 20
  
        texts.value.forEach((text, index) => {
          const textX = textPadding
          const textY = drawHeight + (index * 30) + textPadding * 2
          context.fillText(text, textX, textY)
        })
  
        // キャンバスを画像に変換
        outputImageSrc.value = canvas.toDataURL('image/png')
      }
    }
  }
  
  // 画像をダウンロード
  const downloadImage = () => {
    if (outputImageSrc.value) {
      const a = document.createElement('a')
      a.href = outputImageSrc.value
      a.download = 'combined_image.png'
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
    }
  }
  </script>
  
  <style scoped>
  h1 {
    font-size: 24px;
    margin-bottom: 16px;
  }
  
  button {
    margin-top: 16px;
    padding: 8px 16px;
    font-size: 16px;
    margin-right: 8px;
  }
  
  input[type="text"] {
    margin-top: 8px;
    padding: 8px;
    font-size: 16px;
    width: calc(100% - 24px);
  }
  
  img {
    max-width: 100%;
    height: auto;
    margin-top: 16px;
    border: 1px solid #ccc;
  }
  </style>
  