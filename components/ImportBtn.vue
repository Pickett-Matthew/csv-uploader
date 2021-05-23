<template>
  <div
    id="blue-import"
    class="flex justify-center w-full border-b border-solid border-gray-400"
  >
    <label
      for="fileUpload"
      class="
        flex
        w-full
        justify-center
        bg-blue-500
        text-white
        align-center
        p-1
        m-4
        cursor-pointer
      "
      @change="uploadFile"
    >
      <input id="fileUpload" class="hidden" type="file" accept=".csv" />
      Import CSV
    </label>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  methods: {
    uploadFile(event) {
      this.uploadedFile = event.target.files[0]
      const fd = new FormData()
      fd.append('file', this.uploadedFile)
      axios.post('/uploadCSV', fd).then((res) => {})
    },
  },
}
</script>

<style scoped>
#blue-import {
  min-height: 65px;
  max-height: 65px;
}
</style>
