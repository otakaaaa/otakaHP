<!-- todo:ApiServiceの作成 -->
<!-- todo:ダイアログコンポーネントの作成 -->
<!-- todo:achievementsを他コンポーネントでも使えるよう状態管理 -->

<template>
  <v-container fluid class="achievements-area color-white" id="achievements">
    <div class="text-h4 border-white font-weight-bold">Achievements</div>
    <v-row style="width:80%;">
      <v-col cols="12" sm="6" md="4" lg="4" v-for="(data, i) in achievements" v-bind:key="i">
        <v-card
          class="mx-auto my-12"
          max-width="320"
        >
          <v-img
            height="200"
            :src="data.image.url_org"
            cover
          >
          </v-img>
          <v-card-item>
            <v-card-title>{{ data.subject }}</v-card-title>
          </v-card-item>
          <v-card-actions>
            <v-btn
              color="deep-purple-lighten-2"
              text="詳しく見る"
              block
              border
              @click="open(data)"
            >
            </v-btn>
          </v-card-actions>
        </v-card>
        <!-- modal -->
        <template>
          <v-dialog v-model="dialog" width="500" v-bind:key="i">
            <v-card>
              <v-img
                height="200"
                :src="achievementForDialog.image.url_org"
                cover
              >
              </v-img>
              <v-card-item>
                <v-card-title>{{ achievementForDialog.subject }}</v-card-title>
                <v-card-text>{{ achievementForDialog.contents }}</v-card-text>
              </v-card-item>
              <v-btn text="閉じる" color="deep-purple-lighten-2" @click="dialog = false" />
            </v-card>
          </v-dialog>
        </template>
        <!-- modal -->
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
// import AchievementsApiService from '@/services/AchievementsApiService'
import ApiClient from '@/http-common'

export default defineComponent({
  // props: {},
  setup () {
    const achievements = ref()
    const dialog = ref(false)
    const achievementForDialog = ref()

    // 業績一覧を取得
    ApiClient.get('/rcms-api/1/achievements').then((res) => {
      achievements.value = res.data.list
    })

    const open = (achievement: any) => {
      achievementForDialog.value = achievement
      dialog.value = true
    }

    return {
      dialog,
      achievements,
      achievementForDialog,
      open
    }
  }
})
</script>

<style>
.achievements-area {
  background-color: #55754D;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
