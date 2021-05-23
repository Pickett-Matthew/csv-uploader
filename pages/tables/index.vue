<template>
  <div class="overflow-hidden">
    <my-header />
    <div class="flex flex-row w-full">
      <side-nav />
      <content-section />
    </div>
    <my-footer />
  </div>
</template>

<script>
import ContentSection from '../../components/ContentSection'
import MyFooter from '../../components/MyFooter.vue'
import MyHeader from '../../components/MyHeader.vue'
import SideNav from '../../components/SideNav.vue'
export default {
  components: { MyHeader, SideNav, MyFooter, ContentSection },
}
</script>
