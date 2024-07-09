<template>
  <v-container fluid="true" class="about-area" id="about">
    <v-typography class="text-h4 border-b-md border-opacity-100 font-weight-bold">About</v-typography>
    <v-container class="container">
      <v-typography>WEBサイト制作、WEBアプリの開発を共創いたします</v-typography>
      <v-container class="container-col">
        <v-typography>・要件定義</v-typography>
        <v-typography>・外部設計</v-typography>
        <v-typography>・詳細設計</v-typography>
        <v-typography>・フロントエンド開発</v-typography>
        <v-typography style="font-size: 12px; padding-left: 17px;">JavaScript、TypeScript、React、JQuery、Next.js、Vue.js、Angular等</v-typography>
        <v-typography>・バックエンド開発</v-typography>
        <v-typography style="font-size: 12px; padding-left: 18px;">PHP、Node.js、Ruby、CakePHP、Laravel、Express、Nest.js、Ruby on Rails等</v-typography>
        <v-typography>・保守運用</v-typography>
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
