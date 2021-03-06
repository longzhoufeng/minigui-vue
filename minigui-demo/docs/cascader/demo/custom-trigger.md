<cn>
#### 可以自定义显示
切换按钮和结果分开。
</cn>

<us>
#### Custom trigger
Separate trigger button and result.
</us>

```vue
<template>
  <span>
    {{ text }} &nbsp;
    <m-cascader :options="options" @change="onChange">
      <a href="#">Change city</a>
    </m-cascader>
  </span>
</template>
<script>
export default {
  data() {
    return {
      text: 'Unselect',
      options: [
        {
          value: 'zhejiang',
          label: 'Zhejiang',
          children: [
            {
              value: 'hangzhou',
              label: 'Hangzhou',
              children: [
                {
                  value: 'xihu',
                  label: 'West Lake',
                },
              ],
            },
          ],
        },
        {
          value: 'jiangsu',
          label: 'Jiangsu',
          children: [
            {
              value: 'nanjing',
              label: 'Nanjing',
              children: [
                {
                  value: 'zhonghuamen',
                  label: 'Zhong Hua Men',
                },
              ],
            },
          ],
        },
      ],
    };
  },
  methods: {
    onChange(value, selectedOptions) {
      this.text = selectedOptions.map(o => o.label).join(', ');
    },
  },
};
</script>
```
