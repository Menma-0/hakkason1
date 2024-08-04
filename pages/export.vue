<template>
    <div class="i-phone-13-14-1">
      <div class="profile">
        <img class="picture" :src="imageSrc" alt="Uploaded Image" />
        <div class="data">
          <div class="name">フシギバナ</div>
          <div class="character">
            <div class="性格：">性格：</div>
            <div class="れいせい">れいせい</div>
          </div>
          <div class="date">
            <div class="出会った日：">出会った日：</div>
            <div class="date_value">2024/03/17</div>
          </div>
          <div class="field">
            <div>出会ったフィールド：</div>
            <div>ワカクサ本島</div>
          </div>
          <div class="time">
            <div class="一緒に眠った時間：">一緒に眠った時間：</div>
            <div class="time_value">994時間</div>
          </div>
        </div>
      </div>
      <div class="love">
        ６月に出会った子です！毎日トマトを山ほど持ってきます！ポケモンスリープで2体目に捕まえた相棒です！
      </div>
      <div class="subskill">
        <div class="subskill-small">スキルレベルアップM</div>
        <div class="subskill-small">お手伝いスピードM</div>
        <div class="subskill-small">最大所持数L</div>
        <div class="subskill-small">スキル確率アップM</div>
        <div class="subskill-small">最大所持数S</div>
      </div>
      <div class="home-btn">
        <v-btn to="/" color="rgba(103, 217, 119, 1)" width="200px" height="60px" style="font-size: 20px;">
            ホームに戻る
        </v-btn>

      </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const imageSrc = ref('');

// クライアントサイドでのみsessionStorageからデータを取得
onMounted(() => {
  if (process.client) {
    const storedImage = sessionStorage.getItem('uploadedImage');
    if (storedImage) {
      imageSrc.value = storedImage;
    } else {
      console.warn('画像データが見つかりません');
    }
  }
});
</script>

    <style scoped>
    .i-phone-13-14-1 {
    background-color: rgba(255, 255, 255, 1);
    display: flex;
    min-height: 844px;
    max-width: 480px;
    width: 100%;
    flex-direction: column;
    overflow: hidden;
    align-items: center;
    font-family: Inter, sans-serif;
    color: rgba(0, 0, 0, 1);
    font-weight: 400;
    justify-content: start;
    margin: 0 auto;
    }
    .header {
    align-self: stretch;
    background-color: rgba(124, 254, 113, 1);
    min-height: 96px;
    width: 100%;
    gap: 10px;
    font-size: 30px;
    white-space: nowrap;
    padding: 0 20px;
    }
    .profile {
    display: flex;
    margin-top: 30px;
    align-items: start;
    gap: 20px 39px;
    font-size: 16px;
    white-space: nowrap;
    justify-content: start;
    }
    .picture {
    background-color: rgba(0, 0, 0, 0.38);
    display: flex;
    width: 117px;
    height: 252px;
    margin: auto 0;
    }
    .data {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    width: 201px;
    }
    .name {
    align-self: stretch;
    gap: 10px;
    font-size: 24px;
    }
    .character {
    display: flex;
    margin-top: 13px;
    align-items: center;
    justify-content: start;
    }
    .性格： {
    align-self: stretch;
    margin: auto 0;
    }
    .れいせい {
    align-self: stretch;
    margin: auto 0;
    }
    .date {
    display: flex;
    margin-top: 13px;
    align-items: center;
    justify-content: start;
    }
    .出会った日： {
    align-self: stretch;
    margin: auto 0;
    }
    .date_value {
    align-self: stretch;
    margin: auto 0;
    }
    .field {
    align-self: stretch;
    display: flex;
    margin-top: 13px;
    width: 100%;
    align-items: start;
    justify-content: start;
    flex-wrap: wrap;
    }
    .time {
    align-self: stretch;
    display: flex;
    margin-top: 13px;
    width: 100%;
    align-items: center;
    justify-content: start;
    flex-wrap: wrap;
    }
    .一緒に眠った時間： {
    align-self: stretch;
    margin: auto 0;
    }
    .time_value {
    align-self: stretch;
    margin: auto 0;
    }
    .love {
    border-radius: 8px;
    background-color: rgba(107, 234, 75, 0.61);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    margin-top: 30px;
    width: 308px;
    max-width: 100%;
    font-size: 20px;
    padding: 2px 0 77px;
    }
    .subskill {
    display: flex;
    margin-top: 30px;
    width: 340px;
    max-width: 100%;
    align-items: start;
    gap: 20px;
    font-size: 16px;
    white-space: nowrap;
    justify-content: start;
    flex-wrap: wrap;
    }
    .subskill-small {
        padding:3px 5px ;
    border-radius: 3px;
    width: 160px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    border: 1px solid #727171;
    }
    .home-btn {
    align-self: center;
    border-radius: 8px;
    margin-top: 30px;
    min-height: 40px;
    width: 190px;
    max-width: 100%;
    gap: 10px;
    font-size: 24px;
    white-space: nowrap;
    }
    .footer {
    background-color: rgba(237, 128, 95, 1);
    margin-top: 30px;
    min-height: 96px;
    width: 100%;
    font-size: 48px;
    white-space: nowrap;
    padding: 19px 114px;
    }

    </style>