<cn>
#### 图标
有图标的标签。
</cn>

<us>
#### Icon
The Tab with Icon.
</us>

```vue
<template>
  <m-tabs default-active-key="2">
    <m-tab-pane key="1">
      <span slot="tab">
        <m-icon type="apple" />
        Tab 1
      </span>
      Tab 1
    </m-tab-pane>
    <m-tab-pane key="2">
      <span slot="tab">
        <m-icon type="android" />
        Tab 2
      </span>
      Tab 2
    </m-tab-pane>
  </m-tabs>
</template>
```
