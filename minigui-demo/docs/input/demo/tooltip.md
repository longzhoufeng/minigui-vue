<cn>
#### 输入时格式化展示
结合 [Tooltip](/components/tooltip-cn/) 组件，实现一个数值输入框，方便内容超长时的全量展现。
</cn>

<us>
#### Format Tooltip Input
You can use the Input in conjunction with [Tooltip](/components/tooltip/) component to create a Numeric Input, which can provide a good experience for extra-long content display.
</us>

```vue
<template>
  <m-tooltip :trigger="['focus']" placement="topLeft" overlay-class-name="numeric-input">
    <span v-if="value" slot="title" class="numeric-input-title">
      {{ value !== '-' ? formatNumber(value) : '-' }}
    </span>
    <template v-else slot="title">
      Input a number
    </template>
    <m-input
      :value="value"
      placeholder="Input a number"
      :max-length="25"
      style="width: 120px"
      @change="onChange"
      @blur="onBlur"
    />
  </m-tooltip>
</template>
<script>
function formatNumber(value) {
  value += '';
  const list = value.split('.');
  const prefix = list[0].charAt(0) === '-' ? '-' : '';
  let num = prefix ? list[0].slice(1) : list[0];
  let result = '';
  while (num.length > 3) {
    result = `,${num.slice(-3)}${result}`;
    num = num.slice(0, num.length - 3);
  }
  if (num) {
    result = num + result;
  }
  return `${prefix}${result}${list[1] ? `.${list[1]}` : ''}`;
}

export default {
  data() {
    return {
      value: '',
    };
  },
  methods: {
    formatNumber,
    onChange(e) {
      const { value } = e.target;
      const reg = /^-?[0-9]*(\.[0-9]*)?$/;
      if ((!isNaN(value) && reg.test(value)) || value === '' || value === '-') {
        this.value = value;
      }
    },
    // '.' at the end or only '-' in the input box.
    onBlur() {
      const { value, onChange } = this;
      let valueTemp = value;
      if (value.charAt(value.length - 1) === '.' || value === '-') {
        onChange({ value: value.slice(0, -1) });
      }
    },
  },
};
</script>
<style>
/* to prevent the arrow overflow the popup container,
or the height is not enough when content is empty */
.numeric-input .minigui-tooltip-inner {
  min-width: 32px;
  min-height: 37px;
}

.numeric-input .numeric-input-title {
  font-size: 14px;
}
</style>
```
