<template>
  <div class="footer-area">
    &copy; Satoshi Otaka
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'FooterComponent',

  setup () {
    return {}
  }
})
</script>

<style>
.footer-area {
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #55754D;
  color: #CFC6B6;
  box-shadow: 0px 2px 4px -1px var(--v-shadow-key-umbra-opacity, rgba(0, 0, 0, 0.2)), 0px 4px 5px 0px var(--v-shadow-key-penumbra-opacity, rgba(0, 0, 0, 0.14)), 0px 1px 10px 0px var(--v-shadow-key-ambient-opacity, rgba(0, 0, 0, 0.12));
}
</style>
