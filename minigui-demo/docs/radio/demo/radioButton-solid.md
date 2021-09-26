<cn>
#### 填底的按钮样式
实色填底的单选按钮样式。
</cn>

<us>
#### Solid radio button
Solid radio button style.
</us>

```vue
<template>
  <div>
    <div>
      <m-radio-group default-value="a" button-style="solid">
        <m-radio-button value="a">
          Hangzhou
        </m-radio-button>
        <m-radio-button value="b">
          Shanghai
        </m-radio-button>
        <m-radio-button value="c">
          Beijing
        </m-radio-button>
        <m-radio-button value="d">
          Chengdu
        </m-radio-button>
      </m-radio-group>
    </div>
    <div :style="{ marginTop: '16px' }">
      <m-radio-group default-value="c" button-style="solid">
        <m-radio-button value="a">
          Hangzhou
        </m-radio-button>
        <m-radio-button value="b" disabled>
          Shanghai
        </m-radio-button>
        <m-radio-button value="c">
          Beijing
        </m-radio-button>
        <m-radio-button value="d">
          Chengdu
        </m-radio-button>
      </m-radio-group>
    </div>
  </div>
</template>
```
