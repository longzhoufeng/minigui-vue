<cn>
#### 禁用
禁用某一项。
</cn>

<us>
#### Disabled
Disabled a tab.
</us>

```vue
<template>
  <m-tabs default-active-key="1">
    <m-tab-pane key="1" tab="Tab 1">
      Tab 1
    </m-tab-pane>
    <m-tab-pane key="2" tab="Tab 2" disabled>
      Tab 2
    </m-tab-pane>
    <m-tab-pane key="3" tab="Tab 3">
      Tab 3
    </m-tab-pane>
  </m-tabs>
</template>
```
