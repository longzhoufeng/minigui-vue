<cn>
#### 大小
大中小三种组合，可以和表单输入框进行对应配合。
</cn>

<us>
#### size
There are three sizes available: large, medium, and small. It can coordinate with input box.
</us>

```vue
<template>
  <div>
    <div>
      <m-radio-group default-value="a" size="large">
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
      <m-radio-group default-value="a">
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
      <m-radio-group default-value="a" size="small">
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
  </div>
</template>
```
