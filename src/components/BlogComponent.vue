<template>
  <v-container fluid="true" class="blog-area color-white" id="blog">
    <v-typography class="text-h4 border-white font-weight-bold">Blog</v-typography>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BlogComponent',

  data () {
    return {}
  }
})
</script>

<style>
.blog-area {
  background-color: #55754D;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 400px;
}
</style>
