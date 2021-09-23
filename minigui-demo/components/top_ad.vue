<template>
  <div>
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
    };
  },
  computed: {
  },
};
</script>

<style lang="less" scoped></style>
