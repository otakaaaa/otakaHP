<template>
  <v-container fluid class="about-area" id="about">
    <div class="top-heading border-b-md border-opacity-100 font-weight-bold">About</div>
    <v-container class="container">
      <div>WEBサイト制作、WEBアプリの開発を共創いたします</div>
      <v-container class="container-col">
        <div class="container-row">
          <v-img width="320" :src="require('@/assets/about01.png')">
            <v-tooltip
              activator="parent"
              location="start"
            >
              ワードプレス、Kurocoの構築経験ございます。<br>
              その他ご依頼も受け付けております。
            </v-tooltip>
          </v-img>
          <v-img width="320" :src="require('@/assets/about02.png')">
            <v-tooltip
              activator="parent"
              location="start"
            >
              フロントからバックエンド、AWSの構築など様々な業務を経験しております。<br>
              詳細につきましては、お問い合わせよりお願いいたします。
            </v-tooltip>
          </v-img>
        </div>
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
@media screen and (max-width: 768px) {
  .container-row {
    flex-wrap: wrap;
  }
}
</style>
