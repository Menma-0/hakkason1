<template>
  <div class="image-upload">
    <!-- ファイル選択ボタン -->
    <input type="file" class="input-button" @change="onFileChange" />

    <!-- アップロードされた画像のプレビュー -->
    <div class="image-preview">
      <!-- アップロードされた画像がない場合にプレースホルダーを表示 -->
      <div v-if="!uploadedImageSrc" class="placeholder">
        プレビュー
      </div>
      <!-- アップロードされた画像がある場合に画像を表示 -->
      <img v-else :src="uploadedImageSrc" alt="Selected Image" class="uploaded-image" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      uploadedImageSrc: null, // アップロードされた画像のURLを保持
    };
  },
  methods: {
    // ファイルが選択されたときの処理
    onFileChange(e) {
      const file = e.target.files[0];
      if (file) {
        this.uploadedImageSrc = URL.createObjectURL(file); // 選択した画像のプレビュー用URLを作成
      }
    },
  },
};
</script>

<style scoped>
.image-upload {
  text-align: center;
  margin-top: 40px;
}

.input-button {
  margin-bottom: 20px;
  display: block;
  width: 150px; /* ボタンの幅 */
  height: 40px; /* ボタンの高さ */
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
}

.input-file {
  display: block;
  margin: 10px auto;
}

.image-preview {
  width: 100%;
  max-width: 351px; /* 写真領域に合わせた幅 */
  height: 760px; /* 写真領域の高さ */
  background-color: rgba(217, 246, 187, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px auto;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 5px;
}

.placeholder {
  font-size: 20px;
  color: rgba(0, 0, 0, 1);
}

.uploaded-image {
  width: 100%;
  height: 100%;
  object-fit: cover; /* 画像を領域内にフィットさせる */
  border-radius: 5px;
}
</style>
