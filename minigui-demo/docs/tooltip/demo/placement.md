<cn>
#### 位置
位置有 12 个方向。
</cn>

<us>
#### Placement
There are 12 placement options available.
</us>

```vue
<template>
  <div id="components-a-tooltip-demo-placement">
    <div :style="{ marginLeft: `${buttonWidth}px`, whiteSpace: 'nowrap' }">
      <m-tooltip placement="topLeft">
        <template slot="title">
          <span>prompt text</span>
        </template>
        <m-button>TL</m-button>
      </m-tooltip>
      <m-tooltip placement="top">
        <template slot="title">
          <span>prompt text</span>
        </template>
        <m-button>Top</m-button>
      </m-tooltip>
      <m-tooltip placement="topRight">
        <template slot="title">
          <span>prompt text</span>
        </template>
        <m-button>TR</m-button>
      </m-tooltip>
    </div>
    <div :style="{ width: `${buttonWidth}px`, float: 'left' }">
      <m-tooltip placement="leftTop">
        <template slot="title">
          <span>prompt text</span>
        </template>
        <m-button>LT</m-button>
      </m-tooltip>
      <m-tooltip placement="left">
        <template slot="title">
          <span>prompt text</span>
        </template>
        <m-button>Left</m-button>
      </m-tooltip>
      <m-tooltip placement="leftBottom">
        <template slot="title">
          <span>prompt text</span>
        </template>
        <m-button>LB</m-button>
      </m-tooltip>
    </div>
    <div :style="{ width: `${buttonWidth}px`, marginLeft: `${buttonWidth * 4 + 24}px` }">
      <m-tooltip placement="rightTop">
        <template slot="title">
          <span>prompt text</span>
        </template>
        <m-button>RT</m-button>
      </m-tooltip>
      <m-tooltip placement="right">
        <template slot="title">
          <span>prompt text</span>
        </template>
        <m-button>Right</m-button>
      </m-tooltip>
      <m-tooltip placement="rightBottom">
        <template slot="title">
          <span>prompt text</span>
        </template>
        <m-button>RB</m-button>
      </m-tooltip>
    </div>
    <div :style="{ marginLeft: `${buttonWidth}px`, clear: 'both', whiteSpace: 'nowrap' }">
      <m-tooltip placement="bottomLeft">
        <template slot="title">
          <span>prompt text</span>
        </template>
        <m-button>BL</m-button>
      </m-tooltip>
      <m-tooltip placement="bottom">
        <template slot="title">
          <span>prompt text</span>
        </template>
        <m-button>Bottom</m-button>
      </m-tooltip>
      <m-tooltip placement="bottomRight">
        <template slot="title">
          <span>prompt text</span>
        </template>
        <m-button>BR</m-button>
      </m-tooltip>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      buttonWidth: 70,
    };
  },
};
</script>
<style scoped>
#components-a-tooltip-demo-placement .minigui-btn {
  width: 70px;
  text-align: center;
  padding: 0;
  margin-right: 8px;
  margin-bottom: 8px;
}
</style>
```
