<template>
  <v-app>
    <v-app-bar
      color="#55754D"
      height="100"
      scroll-behavior="collapse"
    >
      <template v-slot:prepend>
        <v-img
          :src="require('@/assets/otakaLogo.svg')"
          width="100px"
          v-scroll-to="'#top'"
        />
      </template>
      <template v-slot:default>
        <v-btn
          v-for="(nav, i) in globalNav"
          :key="i"
          v-scroll-to="nav.id"
        >{{ nav.text }}</v-btn>
      </template>
      <template v-slot:append>
        <v-btn class="right-btn">Profile</v-btn>
      </template>
    </v-app-bar>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HeaderComponent',

  data () {
    return {
      globalNav: [
        {
          text: 'TOP',
          id: '#top'
        },
        {
          text: 'ABOUT',
          id: '#about'
        },
        {
          text: 'ACHIEVEMENTS',
          id: '#achievements'
        },
        {
          text: 'CONTACT',
          id: '#contact'
        },
        {
          text: 'BLOG',
          id: '#blog'
        }
      ]
    }
  }
})
</script>

<style>
.right-btn {
  margin-right: 70px;
}
</style>
