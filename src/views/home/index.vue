<template>
  <div>
    <!-- 头部 -->
    <HeadCom/>
    <DialogCom/>
  </div>
</template>

<script>
import HeadCom from "@/components/HeadCom.vue";
import DialogCom from '@/components/DialogCom.vue'
export default {
  name: "Home",
  components: { HeadCom, DialogCom },
};
</script>

<style>
</style>