<template>
  <div
    class="
      flex
      w-9/12
      h-screen
      min-h-full
      justify-center
      align-center
      items-center
    "
  >
    <import-logo />
  </div>
</template>

<script>
import ImportLogo from './ImportLogo.vue'

export default {
  components: { ImportLogo },
  data() {
    return {
      uploadedFile: '',
    }
  },
}
</script>

<style></style>
