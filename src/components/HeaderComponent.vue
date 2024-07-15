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
          class="pc"
        />
        <v-app-bar-nav-icon class="sp menu" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      </template>
      <template v-slot:default>
        <v-btn
          v-for="(nav, i) in globalNav"
          :key="i"
          v-scroll-to="nav.value"
          class="pc"
        >{{ nav.title }}</v-btn>
        <v-img
          :src="require('@/assets/otakaLogo.svg')"
          width="100px"
          v-scroll-to="'#top'"
          class="sp"
        />
      </template>
      <template v-slot:append>
        <v-btn class="right-btn pc">Profile</v-btn>
      </template>
    </v-app-bar>
    <v-navigation-drawer
        v-model="drawer"
        temporary
        color="#55754D"
      >
        <v-list
          :items="globalNav"
        ></v-list>
      </v-navigation-drawer>
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
      drawer: false,
      globalNav: [
        {
          title: 'TOP',
          value: '#top',
          props: { href: '#top' }
        },
        {
          title: 'ABOUT',
          value: '#about',
          props: { href: '#about' }
        },
        {
          title: 'ACHIEVEMENTS',
          value: '#achievements',
          props: { href: '#achievements' }
        },
        {
          title: 'CONTACT',
          value: '#contact',
          props: { href: '#contact' }
        },
        {
          title: 'BLOG',
          value: '#blog',
          props: { href: '#blog' }
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
.sp {
  display: none;
}
@media screen and (max-width: 768px) {
  .pc {
    display: none;
  }
  .sp {
    display: block;
  }
  .menu {
    font-size: 26px;
    margin: 0 25px;
  }
}
</style>
