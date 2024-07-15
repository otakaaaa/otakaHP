<template>
  <v-container fluid class="blog-area color-white" id="blog">
    <div class="top-heading border-white font-weight-bold">Blog</div>
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
  height: 600px;
}
</style>
