<template>
  <div>
  </div>
</template>
<script>
import moment from 'moment';
export default {
  data() {
    return {
      list: [],
    };
  },
  methods: {
    isEffective({ start, end }) {
      return moment().isBetween(start, end);
    },
  },
};
</script>
<style scoped></style>
