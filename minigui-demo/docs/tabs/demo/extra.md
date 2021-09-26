<cn>
#### 附加内容
可以在页签右边添加附加操作。
</cn>

<us>
#### Extra content
You can add extra actions to the right of Tabs.
</us>

```vue
<template>
  <m-tabs>
    <m-tab-pane key="1" tab="Tab 1">
      Content of tab 1
    </m-tab-pane>
    <m-tab-pane key="2" tab="Tab 2">
      Content of tab 2
    </m-tab-pane>
    <m-tab-pane key="3" tab="Tab 3">
      Content of tab 3
    </m-tab-pane>
    <m-button slot="tabBarExtraContent">
      Extra Action
    </m-button>
  </m-tabs>
</template>
```
