<template>
    <div class="i-phone-13-14-1">
      <div class="profile">
        <div class="picture"></div>
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
        <div class="subskill-1">スキルレベルアップM</div>
        <div class="subskill-2">お手伝いスピードM</div>
        <div class="subskill-3">最大所持数L</div>
        <div class="subskill-4">スキル確率アップM</div>
        <div class="subskill-5">最大所持数S</div>
      </div>
      <div class="home-btn">🏠ホームへ戻る</div>
    </div>
</template>
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
    width: 120px;
    height: 194px;
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
    .subskill-1 {
    border-radius: 3px;
    width: 160px;
    }
    .subskill-2 {
    border-radius: 3px;
    width: 160px;
    }
    .subskill-3 {
    border-radius: 3px;
    width: 160px;
    }
    .subskill-4 {
    border-radius: 3px;
    width: 160px;
    }
    .subskill-5 {
    border-radius: 3px;
    width: 160px;
    }
    .home-btn {
    align-self: stretch;
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