<cn>
#### 带图标的步骤条
通过设置 `Steps.Step` 的 `icon` 属性，可以启用自定义图标。
</cn>

<us>
#### With icon
You can use your own custom icons by setting the property `icon` for `Steps.Step`.
</us>

```vue
<template>
  <m-steps>
    <m-step status="finish" title="Login">
      <m-icon slot="icon" type="user" />
    </m-step>
    <m-step status="finish" title="Verification">
      <m-icon slot="icon" type="solution" />
    </m-step>
    <m-step status="process" title="Pay">
      <m-icon slot="icon" type="loading" />
    </m-step>
    <m-step status="wait" title="Done">
      <m-icon slot="icon" type="smile-o" />
    </m-step>
  </m-steps>
</template>
```
