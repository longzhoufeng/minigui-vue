<cn>
#### 大小
不同大小的级联选择器。
</cn>

<us>
#### Size
Cascade selection box of different sizes.
</us>

```vue
<template>
  <div>
    <m-cascader size="large" :options="options" @change="onChange" /><br /><br />
    <m-cascader :options="options" @change="onChange" /><br /><br />
    <m-cascader size="small" :options="options" @change="onChange" /><br /><br />
  </div>
</template>
<script>
export default {
  data() {
    return {
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
    onChange(value) {
      console.log(value);
    },
  },
};
</script>
```
