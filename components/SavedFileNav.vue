<template>
  <div class="flex flex-col w-full h-auto mt-6 items-center">
    <nuxt-link
      :to="file.slug"
      v-for="file in files"
      :key="file.slug"
      :id="file.slug"
      class="
        flex flex-row
        m-2
        w-full
        h-10
        min-h-10
        justify-start
        items-center
        editIcon
        cursor-pointer
        hover:bg-blue-100
        hover:text-blue-600
      "
      >{{ file.slug + file.extension }}
      <div class="trashIcon" @click="deleteFile"></div
    ></nuxt-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      files: [],
    }
  },
  async fetch() {
    this.files = await this.$content('data').fetch()
    console.log(this.files)
  },
  methods: {
    async deleteFile(event) {
      const file = event.target.closest('a').id
      const path = `/conent/data/${file}.csv`
      const res = await fetch('/deleteFile', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ path }),
      })
      const data = await res.json()
      console.log(data)
    },
  },
}
</script>

<style scoped>
.editIcon::before {
  content: '';
  background-image: url(assets/icons/file-gray.svg);
  background-size: 24px 24px;
  width: 24px;
  height: 24px;
  margin-right: 10px;
  margin-left: 10px;
  background-position: center;
}

.trashIcon {
  background-image: url(assets/icons/trash.svg);
  background-size: 24px 24px;
  width: 24px;
  height: 24px;
  background-position: center;
  margin-right: 5px;
  margin-left: auto;
}
</style>
