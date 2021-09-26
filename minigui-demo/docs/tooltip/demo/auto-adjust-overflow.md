<cn>
#### 自动调整位置
气泡框不可见时自动调整位置
</cn>

<us>
#### Adjust placement automatically
Adjust popup placement automatically when popup is invisible
</us>

```vue
<template>
  <div :style="wrapStyles">
    <m-tooltip placement="left" title="Prompt Text" :get-popup-container="getPopupContainer">
      <m-button>Adjust automatically / 自动调整</m-button>
    </m-tooltip>
    <br />
    <m-tooltip
      style="marginTop: 10px"
      placement="left"
      title="Prompt Text"
      :get-popup-container="getPopupContainer"
      :auto-adjust-overflow="false"
    >
      <m-button>Ingore / 不处理</m-button>
    </m-tooltip>
  </div>
</template>
<script>
const wrapStyles = {
  overflow: 'hidden',
  position: 'relative',
  padding: '24px',
  border: '1px solid #e9e9e9',
};
export default {
  data() {
    return {
      wrapStyles,
    };
  },
  methods: {
    getPopupContainer(trigger) {
      return trigger.parentElement;
    },
  },
};
</script>
```
