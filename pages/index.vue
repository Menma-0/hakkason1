<template>
  <div>
    <h1>画像とテキストをキャプチャ</h1>

    <!-- 画像のアップロード -->
    <input type="file" accept="image/*" @change="onImageFileChange" />

    <!-- テキスト入力フィールド -->
    <div class="container">
      <img
        v-if="uploadedImageSrc"
        :src="uploadedImageSrc"
        alt="Input Image"
        class="input-image"
      />

      <!-- テキスト入力フィールド -->
      <input-text
        v-for="(text, index) in textAreas"
        :key="index"
        :title="`テキスト ${index + 1}`"
        v-model="textAreas[index]"
      />
    </div>

    <!-- 画像を生成 -->
    <button @click="captureAndSaveImage">画像を生成</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import html2canvas from 'html2canvas';
import { useRouter } from 'vue-router';

// 入力された画像のURL
const uploadedImageSrc = ref('');

// テキストエリアの配列
const textAreas = ref([
  '','','','','',
]); // 初期値として設定

// ルーター
const router = useRouter();

// 画像ファイルが選択されたときの処理
const onImageFileChange = (event: Event) => {
  const input = event.target as HTMLInputElement;
  if (input.files && input.files[0]) {
    const file = input.files[0];
    uploadedImageSrc.value = URL.createObjectURL(file);
  }
};

// 配置情報を定義（画像とテキストの配置を決める）
const layout = {
  image: { x: 20, y: 20, width: 300, height: 200 }, // 画像の配置
  textStart: { x: 350, y: 40 }, // テキストの開始位置
  lineHeight: 30, // 行間
};

// コンテンツをキャプチャして画像として保存
const captureAndSaveImage = async () => {
  const canvas = document.createElement('canvas');
  canvas.width = 390; // キャンバスの幅
  canvas.height = 844; // キャンバスの高さ

  const context = canvas.getContext('2d');
  if (!context) return;

  // 背景色を白に設定
  context.fillStyle = 'white';
  context.fillRect(0, 0, canvas.width, canvas.height);

  // 画像を描画
  if (uploadedImageSrc.value) {
    const img = new Image();
    img.src = uploadedImageSrc.value;
    await new Promise((resolve) => (img.onload = resolve)); // 画像がロードされるのを待つ
    context.drawImage(
      img,
      layout.image.x,
      layout.image.y,
      layout.image.width,
      layout.image.height
    );
  }

  // テキストを描画
  context.font = 'bold 24px Arial';
  context.fillStyle = 'black';
  textAreas.value.forEach((text, index) => {
    const x = layout.textStart.x;
    const y = layout.textStart.y + index * layout.lineHeight;
    context.fillText(text, x, y);
  });

  // 画像データURLを取得
  const imageSrc = canvas.toDataURL('image/png');

  // Base64文字列からBlobを作成
  const blob = dataURLToBlob(imageSrc);

  // ファイル名を生成
  const fileName = `captured_image_${Date.now()}.png`;

  // ファイルをstaticディレクトリに保存
  const filePath = await saveImageToFile(blob, fileName);

  // セッションストレージにパスを保存
  sessionStorage.setItem('imagePath', filePath);

  // 次のページに遷移
  router.push({ name: 'image' });
};

// Base64データURLをBlobに変換
const dataURLToBlob = (dataURL: string): Blob => {
  const byteString = atob(dataURL.split(',')[1]);
  const mimeString = dataURL.split(',')[0].split(':')[1].split(';')[0];
  const arrayBuffer = new ArrayBuffer(byteString.length);
  const uintArray = new Uint8Array(arrayBuffer);

  for (let i = 0; i < byteString.length; i++) {
    uintArray[i] = byteString.charCodeAt(i);
  }

  return new Blob([uintArray], { type: mimeString });
};

// Blobをstaticディレクトリに保存
const saveImageToFile = async (blob: Blob, fileName: string): Promise<string> => {
  const formData = new FormData();
  formData.append('file', blob, fileName);

  try {
    // APIエンドポイントにファイルをPOST
    const response = await fetch('/api/save-image', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();

    if (response.ok) {
      //alert(`画像が保存されました: ${data.path}`);
      return data.path; // 保存された画像のパスを返す
    } else {
      console.error('画像の保存に失敗しました:', data.error);
      return '';
    }
  } catch (error) {
    console.error('画像の保存に失敗しました:', error);
    return '';
  }
};
</script>

<style scoped>
h1 {
  margin-top: 60px;
}

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

button {
  margin-top: 16px;
  margin-bottom: 60px;
  padding: 8px 16px;
  font-size: 16px;
  cursor: pointer;
}
</style>
