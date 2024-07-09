<template>
  <v-container fluid="true" class="achievements-area color-white" id="achievements">
    <v-typography class="text-h4 border-white font-weight-bold">Achievements</v-typography>
    <v-row style="width:80%;">
      <v-col cols="12" sm="4" md="4" lg="4" v-for="(data, i) in achievements" :key="i">
        <v-card
          class="mx-auto my-12"
          max-width="320"
        >
          <v-img
            height="200"
            src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
            cover
          ></v-img>
          <v-card-item>
            <v-card-title>{{ data.title }}</v-card-title>
          </v-card-item>
          <v-card-actions>
            <v-btn
              color="deep-purple-lighten-2"
              text="詳しく見る"
              block
              border
              @click="open"
            ></v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <v-dialog
      v-modal="dialog"
      width="500"
    >
      <v-card>
        <v-card-title class="text-h5 grey lighten-2">
          Privacy Policy
        </v-card-title>

        <v-card-text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="dialog = false"
          >
            I accept
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AchievementsComponent',

  data: () => ({
    dialog: false,
    selection: 1,
    achievements: [
      {
        title: 'test1'
      },
      {
        title: 'test2'
      },
      {
        title: 'test3'
      },
      {
        title: 'test4'
      },
      {
        title: 'test5'
      }
    ]
  }),
  methods: {
    open () {
      this.dialog = true
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
