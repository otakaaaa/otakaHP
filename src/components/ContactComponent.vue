<template>
  <v-container fluid class="contact-area" id="contact">
    <div class="text-h4 border-b-md border-opacity-100 font-weight-bold">Contact</div>
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
  height: 600px;
}
</style>
