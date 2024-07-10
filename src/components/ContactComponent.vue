<template>
  <v-container fluid="true" class="contact-area" id="contact">
    <v-typography class="text-h4 border-b-md border-opacity-100 font-weight-bold">Contact</v-typography>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ContactComponent',

  data () {
    return {}
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
</style>
