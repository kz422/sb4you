<template>
  <v-container>
    <transition appear>
    <div class="midashi" justify="center" align="center">
      <h1>All Drinks</h1>
      <v-divider width="40%"></v-divider>
      <p class="fav mt-6">お気に入りのカスタマイズを見つけようZE!!</p>
      <nuxt-link to="about">
        <p class="toabout">なにこれ？</p>
      </nuxt-link>
      <Dialog ref="dialog"/>
    </div>
    </transition>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'

import Dialog from '~/components/Dialog.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'

export default {
  data() {
    return {
      dialog: false,
    }
  },
  components: {
    Dialog,
    VuetifyLogo
  },
  computed: {
    ...mapState({
      drinks: 'drinks'
    })
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

.fav {
  font-family: 'Bananaslip';
}

.toabout {
  font-family: 'Bananaslip';
}
</style>
