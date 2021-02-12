<template>
  <div>
    <transition appear>
      <div justify="center" align="center">
      <h1>About</h1>
      <v-divider width="40%"></v-divider>
      <h4 class="my-6">"Starbucks For You"</h4>
        <div class="aboutcontent mt-5 mb-15 mx-10" justify="center" align="center">
          <p>Starbucks、いいですよね。<br>おしゃれカフェの代名詞と言えるかと思います。</p>
          <p>拓けた街を歩けばだいたい見つかる”スタバ”</p>
          <p>1996年にアメリカより上陸し、今や人気を通り越して<br>”定番”とも言えます。</p>
          <p>そんな大人気のStarbucksですが<br>みなさんはいつも何を頼んでいますか？</p>
          <p>私は普段からあまり冒険はしないクチなので<br>決まったメニューを頼みがちです。</p>
          <p>しかし、幅広いカスタマイズ性で何通り・何十通りの味を<br>楽しめることを知っています。</p>
          <p>「カスタムできることは知っているけど、注文するのが億劫」</p>
          <p>「注文の時に間違えたら恥ずかしいかも」</p>
          <p>と思っているのは私だけではないはず。</p>
          <p>そんなことを某カフェでふと思いつき<br>こちらのサービスを作ってみました。</p>
          <p>ドリンクを選択するとオーダー方法が見れますので<br>それを使ってカスタマイズしてみてください！</p>
          <p>もちろん、口頭で伝えるのが不安であればスタッフの方に<br>画面を見せてもOKです。</p>
          <p>いつもよりワンランク上の”スタバ”をお楽しみください☕️</p>
          <nuxt-link to="/">
          ドリンク一覧へ
          </nuxt-link>
        </div>
      </div>
    </transition>
  </div>  
</template>

<script>
export default {
  data() {
    return{
      show: true
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
  transform: translateY(30vh) translateY(0px);
}

.aboutcontent {
  font-family: 'Bananaslip';
  font-size: small;
}



</style>
