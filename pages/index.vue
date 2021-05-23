<template>
  <div
    class="
      flex
      h-screen
      w-screen
      items-center
      justify-center
      text-gray-700
      bg-gray-100
      flex-col
    "
  >
    <to-the-tables />
    <hero />
  </div>
</template>

<script>
import ToTheTables from '../components/ToTheTables.vue'
import Hero from '~/components/Hero'

export default {
  components: { Hero, ToTheTables },
}
</script>
