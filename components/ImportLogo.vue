<template>
  <div class="align-center w-full justify-center flex flex-col items-center">
    <label for="uploader" class="upload cursor-pointer p-5">
      <input
        id="uploader"
        type="file"
        class="opacity-0"
        accept=".csv"
        @change="uploadFile"
      />
    </label>

    <p>Please import a csv file.</p>
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
.upload {
  display: flex;
  width: 40px;
  height: 40px;
  background-size: 40px 40px;
  background-repeat: no-repeat;
  background-image: url(../assets/icons/download-csv.svg);
  cursor: pointer;
}
</style>
