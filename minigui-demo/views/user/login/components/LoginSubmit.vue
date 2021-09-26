<template>
  <m-form-item>
    <m-button size="large" class="submit" type="primary" html-type="submit" :loading="loading">
      <slot />
    </m-button>
  </m-form-item>
</template>
<script>
export default {
  props: {
    loading: Boolean,
  },
};
</script>

<style lang="less" scoped>
.submit {
  width: 100%;
  margin-top: 24px;
}
</style>
