<template>
  <li
    v-clipboard:copy="text"
    v-clipboard:success="onCopied"
    :class="justCopied === type ? 'copied' : ''"
  >
    <m-icon :type="type" :theme="theme" />
    <span class="anticon-class">
      <m-badge :dot="isNew">
        {{ type }}
      </m-badge>
    </span>
  </li>
</template>
<script>
import { Badge } from 'minigui-vue';
import 'minigui-vue/es/badge/style';
export default {
  components: {
    'm-badge': Badge,
  },
  props: ['type', 'isNew', 'theme', 'justCopied'],
  data() {
    const { type, theme } = this;
    return {
      text:
        theme === 'outlined'
          ? `<m-icon type="${type}" />`
          : `<m-icon type="${type}" theme="${theme}" />`,
    };
  },
  methods: {
    onCopied() {
      this.$emit('copied', this.type, this.text);
    },
  },
};
</script>
