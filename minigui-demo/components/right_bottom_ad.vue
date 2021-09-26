<template>
  <div id="right-bottom">
    <img v-if="isCN" width="150" alt="官方公众号" src="/public/qrcode.jpg">
    <div v-if="isMobile" class="close" @click="visible = false">
      <m-icon type="close" />
    </div>
  </div>
</template>

<script>
import moment from 'moment';
const isEffective = (start, end) => {
  return moment().isBetween(start, end);
};
export default {
  components: {},
  props: ['isCN', 'isMobile'],
  data() {
    return {
      visible: true,
    };
  },
};
</script>

<style lang="less" scoped>
#right-bottom {
  position: fixed;
  bottom: 10px;
  right: 10px;
  width: 150px;
  .close {
    position: absolute;
    text-align: center;
    top: -8px;
    right: -8px;
    font-size: 16px;
    padding: 15px;
    color: #6e3041;
  }
}
</style>
