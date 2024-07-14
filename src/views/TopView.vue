<template>
  <v-container fluid class="top-area" id="top">
    <v-img :src="require('@/assets/otakaLab.svg')" width="70%" height="100%"></v-img>
  </v-container>
  <AboutComponent />
  <AchievementsComponent />
  <ContactComponent />
  <BlogComponent />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AboutComponent from '../components/AboutComponent.vue'
import AchievementsComponent from '../components/AchievementsComponent.vue'
import ContactComponent from '../components/ContactComponent.vue'
import BlogComponent from '../components/BlogComponent.vue'

export default defineComponent({
  name: 'TopView',

  components: {
    AboutComponent,
    AchievementsComponent,
    ContactComponent,
    BlogComponent
  }
})
</script>

<style>
.top-area {
  background-size: 75%;
  background-position: 50%;
  background-position-y: 20px;
  background-color: #55754D;
  width: 100%;
  height: calc(100vh - 100px);
  display: flex;
  align-items: center;
}
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 14.5px;
}
.container-col {
  display: flex;
  flex-direction: column;
  font-size: 14.5px;
}
</style>
