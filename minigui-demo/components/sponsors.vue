<template>
  <div></div>
</template>
<script>
import moment from 'moment';
export default {
  props: ['isCN'],
  data() {
    return {
      top: 50,
      effectiveTime: {
        bmatch: {
          start: '2019-03-11',
          end: '2019-06-11',
        },
        kkb: {
          start: '2020-11-16 22:00:00',
          end: '2021-05-17 22:00:00',
        },
      },
      visible: false,
    };
  },
  methods: {
    isEffective({ start, end }) {
      return moment().isBetween(start, end);
    },
    handleClick() {
    },
  },
};
</script>
