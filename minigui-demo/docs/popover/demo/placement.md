<cn>
#### 位置
位置有十二个方向。
</cn>

<us>
#### Placement
There are 12 `placement` options available.
</us>

```vue
<template>
  <div id="components-popover-demo-placement">
    <div :style="{ marginLeft: `${buttonWidth}px`, whiteSpace: 'nowrap' }">
      <m-popover placement="topLeft">
        <template slot="content">
          <p>Content</p>
          <p>Content</p>
        </template>
        <template slot="title">
          <span>Title</span>
        </template>
        <m-button>TL</m-button>
      </m-popover>
      <m-popover placement="top">
        <template slot="content">
          <p>Content</p>
          <p>Content</p>
        </template>
        <template slot="title">
          <span>Title</span>
        </template>
        <m-button>Top</m-button>
      </m-popover>
      <m-popover placement="topRight">
        <template slot="content">
          <p>Content</p>
          <p>Content</p>
        </template>
        <template slot="title">
          <span>Title</span>
        </template>
        <m-button>TR</m-button>
      </m-popover>
    </div>
    <div :style="{ width: `${buttonWidth}px`, float: 'left' }">
      <m-popover placement="leftTop">
        <template slot="content">
          <p>Content</p>
          <p>Content</p>
        </template>
        <template slot="title">
          <span>Title</span>
        </template>
        <m-button>LT</m-button>
      </m-popover>
      <m-popover placement="left">
        <template slot="content">
          <p>Content</p>
          <p>Content</p>
        </template>
        <template slot="title">
          <span>Title</span>
        </template>
        <m-button>Left</m-button>
      </m-popover>
      <m-popover placement="leftBottom">
        <template slot="content">
          <p>Content</p>
          <p>Content</p>
        </template>
        <template slot="title">
          <span>Title</span>
        </template>
        <m-button>LB</m-button>
      </m-popover>
    </div>
    <div :style="{ width: `${buttonWidth}px`, marginLeft: `${buttonWidth * 4 + 24}px` }">
      <m-popover placement="rightTop">
        <template slot="content">
          <p>Content</p>
          <p>Content</p>
        </template>
        <template slot="title">
          <span>Title</span>
        </template>
        <m-button>RT</m-button>
      </m-popover>
      <m-popover placement="right">
        <template slot="content">
          <p>Content</p>
          <p>Content</p>
        </template>
        <template slot="title">
          <span>Title</span>
        </template>
        <m-button>Right</m-button>
      </m-popover>
      <m-popover placement="rightBottom">
        <template slot="content">
          <p>Content</p>
          <p>Content</p>
        </template>
        <template slot="title">
          <span>Title</span>
        </template>
        <m-button>RB</m-button>
      </m-popover>
    </div>
    <div :style="{ marginLeft: `${buttonWidth}px`, clear: 'both', whiteSpace: 'nowrap' }">
      <m-popover placement="bottomLeft">
        <template slot="content">
          <p>Content</p>
          <p>Content</p>
        </template>
        <template slot="title">
          <span>Title</span>
        </template>
        <m-button>BL</m-button>
      </m-popover>
      <m-popover placement="bottom">
        <template slot="content">
          <p>Content</p>
          <p>Content</p>
        </template>
        <template slot="title">
          <span>Title</span>
        </template>
        <m-button>Bottom</m-button>
      </m-popover>
      <m-popover placement="bottomRight">
        <template slot="content">
          <p>Content</p>
          <p>Content</p>
        </template>
        <template slot="title">
          <span>Title</span>
        </template>
        <m-button>BR</m-button>
      </m-popover>
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
<style>
#components-popover-demo-placement .minigui-btn {
  width: 70px;
  text-align: center;
  padding: 0;
  margin-right: 8px;
  margin-bottom: 8px;
}
</style>
```
