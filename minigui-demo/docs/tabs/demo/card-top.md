<cn>
#### 卡片式页签容器
用于容器顶部，需要一点额外的样式覆盖。
</cn>

<us>
#### Container of card type Tab
Should be used at the top of container, needs to override styles.
</us>

```vue
<template>
  <div class="card-container">
    <m-tabs type="card">
      <m-tab-pane key="1" tab="Tab Title 1">
        <p>Content of Tab Pane 1</p>
        <p>Content of Tab Pane 1</p>
        <p>Content of Tab Pane 1</p>
      </m-tab-pane>
      <m-tab-pane key="2" tab="Tab Title 2">
        <p>Content of Tab Pane 2</p>
        <p>Content of Tab Pane 2</p>
        <p>Content of Tab Pane 2</p>
      </m-tab-pane>
      <m-tab-pane key="3" tab="Tab Title 3">
        <p>Content of Tab Pane 3</p>
        <p>Content of Tab Pane 3</p>
        <p>Content of Tab Pane 3</p>
      </m-tab-pane>
    </m-tabs>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    callback(key) {
      console.log(key);
    },
  },
};
</script>
<style>
.card-container {
  background: #f5f5f5;
  overflow: hidden;
  padding: 24px;
}
.card-container > .minigui-tabs-card > .minigui-tabs-content {
  height: 120px;
  margin-top: -16px;
}

.card-container > .minigui-tabs-card > .minigui-tabs-content > .minigui-tabs-tabpane {
  background: #fff;
  padding: 16px;
}

.card-container > .minigui-tabs-card > .minigui-tabs-bar {
  border-color: #fff;
}

.card-container > .minigui-tabs-card > .minigui-tabs-bar .minigui-tabs-tab {
  border-color: transparent;
  background: transparent;
}

.card-container > .minigui-tabs-card > .minigui-tabs-bar .minigui-tabs-tab-active {
  border-color: #fff;
  background: #fff;
}
</style>
```
