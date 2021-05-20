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
    "
  >
    <hero />
  </div>
</template>

<script>
import Hero from '~/components/Hero'

export default {
  components: { Hero },
}
</script>
