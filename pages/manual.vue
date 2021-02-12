<template>
  <div>
    <transition appear>
      <div justify="center" align="center">
        <h1 class="mt-5">Customize Manual</h1>
        <v-divider width="40%"></v-divider>
        <div class="custindex" justify="center" align="center">
          <h2 class="mt-10">
            <span class="qua">" </span>About MILK<span class="qua"> "</span>
          </h2>
          <p class="sub mb-1 mt-3">ミルクを変更することでカロリーを抑えたり</p>
          <p class="sub pt-0">風味を変えることも可能</p>
        <v-container>
          <v-row>
            <v-col>
              <img :src="lowfat" height="80">
              <p>低脂肪乳に変更</p>
            </v-col>
            <v-col>
              <img :src="nofat" height="80">
              <p>無脂肪乳に変更</p>
            </v-col>
            <v-col>
              <img :src="soym" height="80">
              <p class="mb-0">豆乳に変更</p>
              <p class="option">+50円</p>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <img :src="alm" height="80">
              <p class="mb-0">アーモンドミルクに変更</p>
              <p class="option">+50円</p>
            </v-col>
            <v-col>
              <img :src="formm" height="80">
              <p class="mb-0">フォームミルクの調整</p>
              <p class="option">多め/少なめ/なし</p>
            </v-col>
            <v-col>
              <img :src="hotcold" height="80">
              <p class="mb-0">温度調整</p>
              <p class="option">熱め/ぬるめ</p>
            </v-col>
          </v-row>

          <h2 class="mt-10">
            <span class="qua">" </span>About COFFEE<span class="qua"> "</span>
            </h2>
          <p class="sub">コーヒー感の強さや濃さを調整し風味を味わう</p>
          <v-row>
            <v-col>
              <img :src="caf1" height="80">
              <p class="mb-0">エスプレッソショットの追加</p>
              <p class="option">+50円</p>
            </v-col>
            <v-col>
              <img :src="caf2" height="80">
              <p class="mb-0">コーヒーの追加・増量</p>
              <p class="option">+50円</p>
            </v-col>
          </v-row>

          <h2 class="mt-10">
            <span class="qua">" </span>About ADD SPECIALS<span class="qua"> "</span>
          </h2>
          <p class="sub">ご褒美感、出ます</p>
          <v-row>
            <v-col>
              <img :src="chip" height="80">
              <p class="mb-0">チョコレートチップの追加</p>
              <p class="option">+50円</p>
            </v-col>
            <v-col>
              <img :src="whip" height="80">
              <p class="mb-0">ホイップクリームの追加</p>
              <p class="option">+50円</p>
            </v-col>
            <v-col>
              <img :src="vanillas" height="80">
              <p class="mb-0">バニラシロップ</p>
              <p class="option">+50円</p>
            </v-col>
            <v-col>
              <img :src="caramels" height="80">
              <p class="mb-0">キャラメルシロップ</p>
              <p class="option">+50円</p>
            </v-col>
          </v-row>

          <v-row class="mb-1">
            <v-col>
              <img :src="almondts" height="80">
              <p class="mb-0">アーモンドトフィーシロップ</p>
              <p class="option">+50円</p>
            </v-col>
            <v-col>
              <img :src="chocos" height="80">
              <p class="mb-0">チョコレートソース</p>
            </v-col>
            <v-col>
              <img :src="caramelsa" height="80">
              <p class="mb-0">キャラメルソース</p>
            </v-col>
          </v-row>
          <v-row class="mb-10">
            <v-col>
            <h2>さあ、いざ注文</h2>
            <nuxt-link to="/">
            <h3>ドリンク一覧へ</h3>
            </nuxt-link>
            </v-col>
          </v-row>
        </v-container>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lowfat: require("@/assets/lowfat.GIF"),
      nofat: require("@/assets/nofat.GIF"),
      soym: require("@/assets/soym.GIF"),
      alm: require("@/assets/alm.GIF"),
      formm: require("@/assets/formm.GIF"),
      hotcold: require("@/assets/hotcold.GIF"),
      caf1: require("@/assets/caf1.GIF"),
      caf2: require("@/assets/caf2.GIF"),
      chip: require("@/assets/chip.GIF"),
      whip: require("@/assets/whip.GIF"),
      vanillas: require("@/assets/vanillas.GIF"),
      caramels: require("@/assets/caramels.GIF"),
      almondts: require("@/assets/almondts.GIF"),
      chocos: require("@/assets/chocos.GIF"),
      caramelsa: require("@/assets/caramelsa.GIF"),
    }
  }
}
</script>

<style scoped>
.v-enter-active, .v-leave-active {
  transform: translate(0px, 0px);
  transition: transform 1s cubic-bezier(0, 0, 0.2, 1) 0ms;
}
.v-enter, .v-leave-to {
  opacity: 0;
  transform: translateY(100vh) translateY(0px);
}

.custindex {
  font-family: 'Bananaslip';
  color: #fff;
}

.option {
  font-size: smaller;
}

h2 {
  color: #000;
}

.sub {
  color: #000;
}

.qua {
  font-weight: lighter;
}

</style>
