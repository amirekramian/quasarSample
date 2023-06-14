<template>
  <q-layout view="lHh Lpr lFf">
    <!-- //arg -->
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'


export default defineComponent({
  name: 'FormLayout',


  setup () {

    return {

    }
  }
})
</script>
<style scoped>

</style>
