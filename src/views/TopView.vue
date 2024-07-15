<template>
  <v-container fluid class="top-area" id="top">
    <v-img :src="require('@/assets/otakaLab.svg')" width="70%" height="100%"></v-img>
  </v-container>
  <AboutComponent />
  <AchievementsComponent />
  <ContactComponent />
  <BlogComponent />
  <FooterComponent />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AboutComponent from '../components/AboutComponent.vue'
import AchievementsComponent from '../components/AchievementsComponent.vue'
import ContactComponent from '../components/ContactComponent.vue'
import BlogComponent from '../components/BlogComponent.vue'
import FooterComponent from '../components/FooterComponent.vue'

export default defineComponent({
  name: 'TopView',

  components: {
    AboutComponent,
    AchievementsComponent,
    ContactComponent,
    BlogComponent,
    FooterComponent
  }
})
</script>

<style>
.top-area {
  background-size: 75%;
  background-position: 50%;
  background-position-y: 1.389vw;
  background-color: #55754D;
  width: 100%;
  height: calc(100vh - 100px);
  display: flex;
  align-items: center;
}
</style>
