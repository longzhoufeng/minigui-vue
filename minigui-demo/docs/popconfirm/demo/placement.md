<cn>
#### 位置
位置有十二个方向。如需箭头指向目标元素中心，可以设置 `arrowPointAtCenter`。
</cn>

<us>
#### Placement
There are 12 `placement` options available. Use `arrowPointAtCenter` if you want arrow point at the center of target.
</us>

```vue
<template>
  <div id="components-a-popconfirm-demo-placement">
    <div :style="{ marginLeft: `${buttonWidth}px`, whiteSpace: 'nowrap' }">
      <m-popconfirm placement="topLeft" ok-text="Yes" cancel-text="No" @confirm="confirm">
        <template slot="title">
          <p>{{ text }}</p>
          <p>{{ text }}</p>
        </template>
        <m-button>TL</m-button>
      </m-popconfirm>
      <m-popconfirm placement="top" ok-text="Yes" cancel-text="No" @confirm="confirm">
        <template slot="title">
          <p>{{ text }}</p>
          <p>{{ text }}</p>
        </template>
        <m-button>Top</m-button>
      </m-popconfirm>
      <m-popconfirm placement="topRight" ok-text="Yes" cancel-text="No" @confirm="confirm">
        <template slot="title">
          <p>{{ text }}</p>
          <p>{{ text }}</p>
        </template>
        <m-button>TR</m-button>
      </m-popconfirm>
    </div>
    <div :style="{ width: `${buttonWidth}px`, float: 'left' }">
      <m-popconfirm placement="leftTop" ok-text="Yes" cancel-text="No" @confirm="confirm">
        <template slot="title">
          <p>{{ text }}</p>
          <p>{{ text }}</p>
        </template>
        <m-button>LT</m-button>
      </m-popconfirm>
      <m-popconfirm placement="left" ok-text="Yes" cancel-text="No" @confirm="confirm">
        <template slot="title">
          <p>{{ text }}</p>
          <p>{{ text }}</p>
        </template>
        <m-button>Left</m-button>
      </m-popconfirm>
      <m-popconfirm placement="leftBottom" ok-text="Yes" cancel-text="No" @confirm="confirm">
        <template slot="title">
          <p>{{ text }}</p>
          <p>{{ text }}</p>
        </template>
        <m-button>LB</m-button>
      </m-popconfirm>
    </div>
    <div :style="{ width: `${buttonWidth}px`, marginLeft: `${buttonWidth * 4 + 24}px` }">
      <m-popconfirm placement="rightTop" ok-text="Yes" cancel-text="No" @confirm="confirm">
        <template slot="title">
          <p>{{ text }}</p>
          <p>{{ text }}</p>
        </template>
        <m-button>RT</m-button>
      </m-popconfirm>
      <m-popconfirm placement="right" ok-text="Yes" cancel-text="No" @confirm="confirm">
        <template slot="title">
          <p>{{ text }}</p>
          <p>{{ text }}</p>
        </template>
        <m-button>Right</m-button>
      </m-popconfirm>
      <m-popconfirm placement="rightBottom" ok-text="Yes" cancel-text="No" @confirm="confirm">
        <template slot="title">
          <p>{{ text }}</p>
          <p>{{ text }}</p>
        </template>
        <m-button>RB</m-button>
      </m-popconfirm>
    </div>
    <div :style="{ marginLeft: `${buttonWidth}px`, clear: 'both', whiteSpace: 'nowrap' }">
      <m-popconfirm placement="bottomLeft" ok-text="Yes" cancel-text="No" @confirm="confirm">
        <template slot="title">
          <p>{{ text }}</p>
          <p>{{ text }}</p>
        </template>
        <m-button>BL</m-button>
      </m-popconfirm>
      <m-popconfirm placement="bottom" ok-text="Yes" cancel-text="No" @confirm="confirm">
        <template slot="title">
          <p>{{ text }}</p>
          <p>{{ text }}</p>
        </template>
        <m-button>Bottom</m-button>
      </m-popconfirm>
      <m-popconfirm placement="bottomRight" ok-text="Yes" cancel-text="No" @confirm="confirm">
        <template slot="title">
          <p>{{ text }}</p>
          <p>{{ text }}</p>
        </template>
        <m-button>BR</m-button>
      </m-popconfirm>
    </div>
  </div>
</template>
<script>
import { message } from 'minigui-vue';

export default {
  data() {
    return {
      buttonWidth: 70,
      text: 'Are you sure to delete this task?',
    };
  },
  methods: {
    confirm() {
      message.info('Clicked on Yes.');
    },
  },
};
</script>
<style scoped>
#components-a-popconfirm-demo-placement .minigui-btn {
  width: 70px;
  text-align: center;
  padding: 0;
  margin-right: 8px;
  margin-bottom: 8px;
}
</style>
```
