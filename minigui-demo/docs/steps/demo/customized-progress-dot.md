<cn>
#### 自定义点状步骤条
为点状步骤条增加自定义展示。
</cn>

<us>
#### Customized Dot Style
You can customize the display for Steps with progress dot style.
</us>

```vue
<template>
  <div>
    <m-steps :current="1">
      <m-popover slot="progressDot" slot-scope="{ index, status, prefixCls }">
        <template slot="content">
          <span>step {{ index }} status: {{ status }}</span>
        </template>
        <span :class="`${prefixCls}-icon-dot`" />
      </m-popover>
      <m-step title="Finished" description="You can hover on the dot." />
      <m-step title="In Progress" description="You can hover on the dot." />
      <m-step title="Waiting" description="You can hover on the dot." />
      <m-step title="Waiting" description="You can hover on the dot." />
    </m-steps>
  </div>
</template>
```
