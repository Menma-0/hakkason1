<!-- <template>
    <p>ここに画像いれるで</p>
    <ImageUpload />
    <InputText title="ポケモンの名前を入力"/>
    <InputText title="性格"/>
    <InputText title="出会った日"/>
    <InputText title="睡眠時間"/>
    <InputText title="出会った場所"/>
    <InputText title="愛を語れ"/>
    <canvas/>


</template>
<script setup>
</script>


<style>
p{
    top: 100px;   
}
</style> -->

<!-- <template>
    <div>
        <InputTest />
    </div>
</template>

<script setup>
import InputTest from '@/components/inputTest.vue';
</script>
   -->

   <template>
    <div>
      <h1>画像とテキストをキャプチャ</h1>
  
      <!-- 画像のアップロード -->
      <input type="file" accept="image/*" @change="onImageFileChange" />
  
      <!-- inputTextコンポーネントを使用 -->
      <div class="container">
        <img v-if="uploadedImageSrc" :src="uploadedImageSrc" alt="Input Image" class="input-image" />
        <input-text
          v-for="(text, index) in textAreas"
          :key="index"
          :title="`テキスト ${index + 1}`"
          v-model="textAreas[index]"
        />
      </div>
  
      <!-- 画像を生成 -->
      <button @click="captureAndNavigate">画像を生成</button>
    </div>
  </template>
  
  <script setup lang="ts">

  import { useRouter } from 'vue-router';
  import html2canvas from 'html2canvas';
 // inputTextコンポーネントをインポート
  
  const uploadedImageSrc = ref('');
  const imageSrc = ref('');
  const textAreas = ref(['', '', '', '', '']);
  
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
  
  // コンテンツをキャプチャして画像として保存し、次のページへ遷移
  const captureAndNavigate = async () => {
    const container = document.querySelector('.container');
    if (!container) return;
  
    // html2canvasでコンテナをキャプチャ
    const canvas = await html2canvas(container, {
      useCORS: true, // クロスオリジンの画像を処理するため
    });
  
    // 画像データURLを取得して表示
    imageSrc.value = canvas.toDataURL('image.png');
  
    // 生成した画像を表示するページへ遷移
    router.push({ name: 'image', params: { imageSrc: imageSrc.value } });
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
  
  button {
    margin-top: 16px;
    padding: 8px 16px;
    font-size: 16px;
    cursor: pointer;
  }
  </style>
  