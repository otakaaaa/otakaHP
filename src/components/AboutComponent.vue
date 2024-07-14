<template>
  <v-container fluid class="about-area" id="about">
    <div class="text-h4 border-b-md border-opacity-100 font-weight-bold">About</div>
    <v-container class="container">
      <div>WEBサイト制作、WEBアプリの開発を共創いたします</div>
      <v-container class="container-col">
        <div>・要件定義</div>
        <div>・外部設計</div>
        <div>・詳細設計</div>
        <div>・フロントエンド開発</div>
        <div style="font-size: 12px; padding-left: 17px;">JavaScript、TypeScript、React、JQuery、Next.js、Vue.js、Angular等</div>
        <div>・バックエンド開発</div>
        <div style="font-size: 12px; padding-left: 18px;">PHP、Node.js、Ruby、CakePHP、Laravel、Express、Nest.js、Ruby on Rails等</div>
        <div>・保守運用</div>
      </v-container>
    </v-container>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AboutComponent',

  data () {
    return {}
  }
})
</script>

<style>
.about-area {
  background-color: #CFC6B6;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
