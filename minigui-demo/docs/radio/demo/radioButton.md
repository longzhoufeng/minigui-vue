<cn>
#### 按钮样式
按钮样式的单选组合。
</cn>

<us>
#### radio style
The combination of radio button style.
</us>

```vue
<template>
  <div>
    <div>
      <m-radio-group v-model="value" @change="onChange">
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
      <m-radio-group default-value="a" @change="onChange">
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
    <div :style="{ marginTop: '16px' }">
      <m-radio-group disabled default-value="a" @change="onChange">
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
<script>
export default {
  data() {
    return {
      value: 'a',
    };
  },
  methods: {
    onChange(e) {
      console.log(`checked = ${e.target.value}`);
    },
  },
};
</script>
```
