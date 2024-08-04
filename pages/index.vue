<script setup>
    const characterList=ref(['さみしがり(おてスピ↑げんき↓)', 'いじっぱり(おてスピ↑食材↓)', 'やんちゃ(おてスピ↑スキル↓)','ゆうかん(おてスピ↑EXP↓)','ずぶとい(げんき↑おてスピ↓)','わんぱく(げんき↑食材↓)','のうてんき(げんき↑スキル↓)','のんき(げんき↑EXP↓)','ひかえめ(食材↑おてスピ↓)','おっとり(食材↑げんき↓)','うっかりや(食材↑スキル↓)','れいせい(食材↑EXP↓)','おだやか(スキル↑おてスピ↓)','おとなしい(スキル↑げんき↓)','しんちょう(スキル↑食材↓)','なまいき(スキル↑EXP↓)','おくびょう(EXP↑おてスピ↓)','せっかち(EXP↑げんき↓)','ようき(EXP↑食材↓)','むじゃき(EXP↑スキル↓)','てれや(無補正)','がんばりや(無補正)','すなお(無補正)','きまぐれ(無補正)','まじめ(無補正)']);
    const character=ref("");
    const name=ref("");
    const a=new Date();
    const date=ref(a);
    const time=ref("時間");
    const fieldList=ref(['ワカクサ本島','シアンの砂浜','トープ洞窟','カンムリ雪原','ラピスラズリ湖畔']);
    const field=ref("");
    const love=ref("");
    const subskillList=ref(['元気回復ボーナス','ゆめのかけらボーナス','リサーチEXPボーナス','睡眠EXPボーナス','おてつだいボーナス','きのみの数S','スキルレベルアップM','スキル確率アップM','食材確率アップM','スキルレベルアップS','最大所持数アップL','最大所持数M','おてつだいスピードM','スキル確率アップS','食材確率アップS','最大所持数アップS','お手伝いスピードS']);
    const subskill1=ref("");
    const subskill2=ref("");
    const subskill3=ref("");
    const subskill4=ref("");
    const subskill5=ref("");
</script>

<template>
    <div class="i-phone-13-14">
      <ImageUpload/>

      <div class="sidebar">名前・性格</div>
      <div class="div">
        <div class="div-2">
            <div class="性格">
                <div class="name name1">名前</div>
                <div class="性格を入力">
                    <v-text-field
                    label="名前を入力しよう！"
                    v-model="name"
                  ></v-text-field>
                </div>
            </div>
            <div class="性格">
                <div class="name name1">性格</div>
                <div class="性格を入力"><v-select v-model="character" :items="characterList" label="選択してください"></v-select></div>
          </div>
        </div>
      </div>
      <div class="detail_all">
        <div class="sidebar">出会った日、睡眠時間</div>
        <div class="detail_sohubo">
          <div class="detail_oya">
            <div class="detail1">出会った日</div>
            <div class="detail">睡眠時間</div>
            <div class="detail">出会った場所</div>
          </div>
          <div class="detail_frame">
            <div class="detail_value"><v-text-field style="width: 200px;" type="date" v-model="date"></v-text-field></div>
            <div class="detail_value"><v-text-field style="width: 200px;" v-model="time"  ></v-text-field></div>
            <div class="detail_value"><v-select style="width: 200px;" v-model="field" :items="fieldList" label="選択してください"></v-select></div>
          </div>
        </div>
      </div>
      <div class="sidebar">愛を語って！</div>
      <div class="自由に書いてください！-200-字以内">
        <v-textarea
        label="相棒との思い出を語ろう！"
        v-model="love"
        rows="5"
        outlined
      ></v-textarea>
      </div>
      <div class="div-4">
        <div class="sidebar">サブスキル</div>
        <div class="サブスキル-4">
          <div class="levels">
            <div class="level1">レベル10</div>
            <div class="level">レベル25</div>
            <div class="level">レベル50</div>
            <div class="level">レベル75</div>
            <div class="level">レベル100</div>
          </div>
          <div class="サブスキル-5">
            <div class="サブスキル"><v-select  style="height:50px;" v-model="subskill1" :items="subskillList" label="Lv.10サブスキルを入力" ></v-select></div>
            <div class="サブスキル"><v-select style="height:50px;" v-model="subskill2" :items="subskillList" label="Lv.25サブスキルを入力" ></v-select></div>
            <div class="サブスキル"><v-select style="height:50px;" v-model="subskill3" :items="subskillList" label="Lv.50サブスキルを入力" ></v-select></div>
            <div class="サブスキル"><v-select style="height:50px;" v-model="subskill4" :items="subskillList" label="Lv.75サブスキルを入力" ></v-select></div>
            <div class="サブスキル"><v-select style="height:50px;" v-model="subskill5" :items="subskillList" label="Lv.100サブスキルを入力" ></v-select></div>
          </div>
        </div>
      </div>
      <v-divider thickness="3px" width="100%" class="mt-12"></v-divider>
      <div class="画像を生成">
        <v-btn to="export" color="rgba(103, 217, 119, 1)" width="200px" height="60px" style="font-size: 20px;">
            作成
        </v-btn>
      </div>
    </div>
    </template>
    
    
    
    <style scoped>
    .i-phone-13-14 {
    background-color: rgba(255, 255, 255, 1);
    display: flex;
    max-width: 480px;
    width: 100%;
    flex-direction: column;
    overflow: hidden;
    font-family: Inter, sans-serif;
    white-space: nowrap;
    justify-content: center;
    margin: 0 auto;
    }
    .ファイル選択ボタン {
    align-self: center;
    border-radius: 5px;
    background-color: rgba(217, 217, 217, 1);
    margin-top: 40px;
    min-height: 55px;
    width: 125px;
    max-width: 100%;
    gap: 10px;
    font-size: 12px;
    color: rgba(0, 0, 0, 1);
    font-weight: 400;
    padding: 20px;
    }
    .写真 {
    background-color: rgba(217, 246, 187, 1);
    align-self: center;
    margin-top: 40px;
    width: 353px;
    max-width: 100%;
    overflow: hidden;
    font-size: 20px;
    color: rgba(0, 0, 0, 1);
    font-weight: 400;
    padding: 220px 70px 176px;
    text-align: center;
    }
    .名前・性格 {
    background-color: rgba(103, 217, 119, 1);
    margin-top: 40px;
    width: 100%;
    font-size: 16px;
    color: rgba(255, 255, 255, 1);
    font-weight: 400;
    padding: 2px 10px;
    }
    .div {
    align-self: center;
    display: flex;
    margin-top: 40px;
    width: 342px;
    max-width: 100%;
    align-items: center;
    gap: 20px 22px;
    justify-content: start;
    }
    .div-2 {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    min-width: 240px;
    width: 342px;
    align-items: start;
    gap: 15px 22px;
    justify-content: start;
    margin: auto 0;
    }
    .name {
    align-self: stretch;
    border-radius: 6px;
    background-color: rgba(107, 234, 75, 1);
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
    height: 30px;
    font-size: 20px;
    color: rgba(255, 255, 255, 1);
    font-weight: 700;
    width: 50px;
    padding: 3px 10px;
    }
    .ここに入力 {
    align-self: stretch;
    min-height: 30px;
    gap: 10px;
    font-size: 12px;
    color: rgba(0, 0, 0, 1);
    font-weight: 400;
    padding: 8px 35px;
    }
    .性格 {
    display: flex;
    min-width: 240px;
    align-items: center;
    gap: 20px 22px;
    justify-content: start;
    }
    .性格を入力 {
    align-self: stretch;
    min-height: 30px;
    gap: 10px;
    font-size: 16px;
    color: rgba(0, 0, 0, 1);
    font-weight: 400;
    width: 240px;
    margin: auto 0;
    }
    .detail_all {
    display: flex;
    margin-top: 40px;
    width: 100%;
    flex-direction: column;
    justify-content: start;
    }
    .sidebar {
    align-self: stretch;
    background-color: rgba(103, 217, 119, 1);
    min-height: 22px;
    width: 100%;
    gap: 10px;
    font-size: 16px;
    color: rgba(255, 255, 255, 1);
    font-weight: 400;
    padding: 0 10px;
    }
    .detail_sohubo {
    align-self: center;
    display: flex;
    margin: 12px 0 30px 0;
    align-items: center;
    gap: 20px 24px;
    font-size: 12px;
    justify-content: start;
    width: 100%;
    }
    .detail_oya {
    align-self: stretch;
    display: flex;
    flex-direction: column;
    font-weight: 700;
    justify-content: start;
    position: relative;
    left: 20px;
    justify-content: space-between;
    margin-top: 30px;
    height: 210px;
    }
    .detail {
    align-self: stretch;
    border-radius: 6px;
    background-color: rgba(107, 234, 75, 1);
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
    color: #FFFFFF;
    gap: 10px;
    font-weight: 600;
    padding: 3px 10px;
    margin-top: 10px;
    padding: 6px 10px;
    text-align: center;
    }
    .detail1 {
        align-self: stretch;
        border-radius: 6px;
        background-color: rgba(107, 234, 75, 1);
        box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
        color: #FFFFFF;
        gap: 10px;
        font-weight: 600;
        padding: 3px 10px;
        padding: 6px 10px;
        text-align: center;
        }
    .detail_value {
    align-self: stretch;
    background-color: rgba(255, 255, 255, 1);
    margin-top: 10px;
    min-height: 20px;
    max-width: 360px;
    width: 180px;
    gap: 10px;
    padding: 3px 35px;
    }
    .愛を語って！ {
    align-self: stretch;
    background-color: rgba(103, 217, 119, 1);
    margin-top: 40px;
    min-height: 22px;
    width: 100%;
    gap: 10px;
    font-size: 16px;
    color: rgba(255, 255, 255, 1);
    font-weight: 400;
    padding: 0 10px;
    }
    .自由に書いてください！-200-字以内 {
    align-self: center;
    margin-top: 40px;
    min-height: 121px;
    width: 320px;
    max-width: 100%;
    gap: 10px;
    font-size: 16px;
    color: rgba(0, 0, 0, 1);
    font-weight: 400;
    }
    .div-4 {
    display: flex;
    margin-top: 40px;
    width: 100%;
    flex-direction: column;
    justify-content: start;
    }
    .サブスキル{
    align-self: stretch;
    background-color: rgba(255, 255, 255, 1);
    margin-top: 10px;
    min-height: 20px;
    max-width: 100%;
    width: 240px;
    gap: 10px;
    }
    .level {
    align-self: stretch;
    border-radius: 6px;
    background-color: rgba(107, 234, 75, 1);
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
    margin-top: 10px;
    min-height: 20px;
    gap: 10px;
    padding: 3px 14px;
    text-align: center;
    }
    .level1{
        align-self: stretch;
        border-radius: 6px;
        background-color: rgba(107, 234, 75, 1);
        box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
        min-height: 20px;
        gap: 10px;
        padding: 3px 14px;
        text-align: center;
        }
    
    .サブスキル-5 {
    align-self: stretch;
    background-color: rgba(255, 255, 255, 1);
    display: flex;
    flex-direction: column;
    min-height: 20px;
    max-width: 100%;
    width: 240px;
    gap: 10px;
    margin-left: 20px;
    }
    .画像を生成 {
    align-self: center;
    margin-top: 40px;
    min-height: 60px;
    width: 200px;
    max-width: 100%;
    gap: 10px;
    font-size: 36px;
    color: rgba(0, 0, 0, 1);
    font-weight: 400;
    padding: 8px 10px;
    }
    .levels {
        align-self: stretch;
        display: flex;
        flex-direction: column;
        color: rgba(255, 255, 255, 1);
        font-weight: 700;
        justify-content: center;
        align-items: center;
        width: 108px;
        margin-left: 15px;
        justify-content: space-between;
        margin-top: 25px;
        height: 310px;
    }
    .サブスキル-4 {
        align-self: stretch;
        background-color: rgba(255, 255, 255, 1);
        margin-top: 10px;
        min-height: 20px;
        max-width: 100%;
        display: flex;
        flex-direction: row;
    }
    .detail_flame{
        position: relative;
        left: 120px;
        height: 310px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width:270px;
    }
    .name1{
        position: relative;
        top: 15px;
    }
    </style>