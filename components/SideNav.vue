<template>
  <aside
    class="
      bg-gray-200
      w-3/12
      min-h-screen
      overflow-hidden
      flex
      border-solid border-r border-gray-400
      items-start
      flex-col
    "
  >
    <import-btn />

    <saved-file-nav />
  </aside>
</template>

<script>
import ImportBtn from './ImportBtn.vue'
import SavedFileNav from './SavedFileNav.vue'
export default {
  data() {
    return {
      savedFiles: [],
    }
  },
  components: { ImportBtn, SavedFileNav },
}
</script>

<style></style>
