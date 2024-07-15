<!-- todo:バリデーション -->
<!-- todo:スナックバーコンポーネントの追加 -->

<template>
  <v-container fluid class="contact-area" id="contact">
    <div class="top-heading border-b-md border-opacity-100 font-weight-bold">Contact</div>
    <v-card color="#CFC6B6" flat class="card-width margin-20">
      <v-card-text>
        <v-form>
          <v-text-field
            label="お名前"
            :rules="[]"
            hide-details="auto"
            v-model="submitData.name"
          ></v-text-field>
          <v-text-field
            label="メールアドレス"
            v-model="submitData.email"
          ></v-text-field>
          <v-textarea
            label="お問い合わせ内容"
            v-model="submitData.body"
          ></v-textarea>
        </v-form>
      </v-card-text>
      <v-card-actions class="justify-center">
        <v-btn
          text="送信"
          color="#333"
          width="30%"
          border
          @click.prevent="handleOnSubmit"
        />
      </v-card-actions>
    </v-card>
    <!-- snackbar -->
    <v-snackbar
      v-model="submitted"
      :timeout="timeout"
    >
      {{ thanksMsg }}
    </v-snackbar>
    <!-- snackbar -->
  </v-container>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import apiClient from '@/http-common'

export default defineComponent({
  name: 'ContactComponent',

  setup () {
    // const FORM_ID = 3
    const submitData = ref({
      name: '',
      email: '',
      body: ''
    })
    const submitted = ref()
    const thanksMsg = ref()
    const timeout = 3000

    const handleOnSubmit = () => {
      try {
        apiClient.post('/rcms-api/3/form', submitData.value).then((res) => {
          if (res.status === 200) {
            submitted.value = true
            thanksMsg.value = res.data.messages[0]
          }
        })
      } catch (e: unknown) {
        if (e instanceof Error) {
          console.error(e.message)
        }
      }
    }

    return {
      handleOnSubmit,
      submitData,
      submitted,
      thanksMsg,
      timeout
    }
  }
})
</script>

<style>
.contact-area {
  background-color: #CFC6B6;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.justify-center {
  justify-content: center;
}
.card-width {
  width: 60%;
}
.margin-20 {
  margin: 1.389vw;
}
@media screen and (max-width: 768px) {
  .card-width {
    width: 85%;
  }
}
</style>
