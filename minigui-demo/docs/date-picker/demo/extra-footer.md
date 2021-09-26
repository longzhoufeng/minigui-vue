<cn>
#### 额外的页脚
在浮层中加入额外的页脚，以满足某些定制信息的需求。
</cn>

<us>
#### Extra Footer
Render extra footer in panel for customized requirements.
</us>

```vue
<template>
  <div>
    <m-date-picker>
      <template slot="renderExtraFooter">
        extra footer
      </template>
    </m-date-picker>
    <m-date-picker show-time>
      <template slot="renderExtraFooter">
        extra footer
      </template>
    </m-date-picker>
    <m-range-picker>
      <template slot="renderExtraFooter">
        extra footer
      </template>
    </m-range-picker>
    <m-range-picker show-time>
      <template slot="renderExtraFooter">
        extra footer
      </template>
    </m-range-picker>
    <m-month-picker placeholder="Select month">
      <template slot="renderExtraFooter">
        extra footer
      </template>
    </m-month-picker>
  </div>
</template>
```
