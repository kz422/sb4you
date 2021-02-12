<template>
  <v-app>
    <v-app-bar class="appbar" flat color="rgba(0,0,0,0)" height="80">
      <v-app-bar-nav-icon @click="drawer=true"></v-app-bar-nav-icon>
      
      <v-toolbar-title class="mt-2 pl-1">
        <nuxt-link to="/">
        <img :src="logo" height="60">
        </nuxt-link>
      </v-toolbar-title>
    </v-app-bar>
    <v-navigation-drawer
      class="drawer"
      v-model="drawer"
      temporary
      color="rgba(255,255,255,0.8)"
    >
      <v-list
        nav
        dense
        class="pt-15"
      >
        <v-list-item-group
          v-model="group"
        >
        <nuxt-link to="/">
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>
        </nuxt-link>

        <nuxt-link to="manual">
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-beer</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Customize Manual</v-list-item-title>
          </v-list-item>
        </nuxt-link>

        <nuxt-link to="about">
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-help</v-icon>
            </v-list-item-icon>
            <v-list-item-title>About</v-list-item-title>
          </v-list-item>
        </nuxt-link>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <nuxt class="mt-15"/>

  <v-footer
  absolute
  app
  >
    <span>&copy; {{ new Date().getFullYear() }}</span>
  </v-footer>
  </v-app>
</template>

<script>
import styles from 'assets/main.css'

export default {
  data () {
    return {
      logo: require("@/assets/sb4you.png"),
      drawer: false,
      group: null,
    }
  }
}
</script>

<style>
.main {
  background-color: yellow;
}

* {
  text-decoration: none;
}

.appbar {
  position: fixed;
}

.drawer {
  position: fixed;
}
</style>
