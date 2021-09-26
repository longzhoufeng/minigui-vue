<cn>
#### 按钮类型
按钮有五种类型：主按钮、次按钮、虚线按钮、危险按钮和链接按钮。主按钮在同一个操作区域最多出现一次。
</cn>

<us>
#### Type
There are `primary` button, `default` button, `dashed` button , `danger` button and `link` button in minigui.
</us>

```vue
<template>
  <div>
    <m-button type="primary">
      Primary
    </m-button>
    <m-button>Default</m-button>
    <m-button type="dashed">
      Dashed
    </m-button>
    <m-button type="danger">
      Danger
    </m-button>
    <m-config-provider :auto-insert-space-in-button="false">
      <m-button type="primary">
        按钮
      </m-button>
    </m-config-provider>
    <m-button type="primary">
      按钮
    </m-button>
    <m-button type="link">
      Link
    </m-button>
  </div>
</template>
```
