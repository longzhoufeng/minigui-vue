<cn>
#### 幽灵按钮
幽灵按钮将其他按钮的内容反色，背景变为透明，常用在有色背景上。
</cn>

<us>
#### Ghost Button
`ghost` property will make button's background transparent, it is common used in colored background.
</us>

```vue
<template>
  <div :style="{ background: 'rgb(190, 200, 200)', padding: '26px 16px 16px' }">
    <m-button type="primary" ghost>
      Primary
    </m-button>
    <m-button ghost>
      Default
    </m-button>
    <m-button type="dashed" ghost>
      Dashed
    </m-button>
    <m-button type="danger" ghost>
      Danger
    </m-button>
    <m-button type="link" ghost>
      Link
    </m-button>
  </div>
</template>
```
