<template>
  <div
    id="search-block"
    class="flex flex-col border-solid border-b border-gray-400 w-full p-4"
  >
    <input
      type="text"
      class="
        border-2 border-gray-300
        w-3/12
        align-center
        flex
        ml-auto
        h-12
        rounded
        pl-2
      "
      placeholder="Search..."
    />
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
#search-block {
  min-height: 65px;
  max-height: 65px;
}
input:focus {
  outline: none;
}
</style>
