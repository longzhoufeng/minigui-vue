<cn>
#### 自定义字段名
自定义字段名。
</cn>

<us>
#### Custom Field Names
Custom Field Names.
</us>

```vue
<template>
  <m-cascader
    :field-names="{ label: 'name', value: 'code', children: 'items' }"
    :options="options"
    placeholder="Please select"
    @change="onChange"
  />
</template>
<script>
const options = [
  {
    code: 'zhejiang',
    name: 'Zhejiang',
    items: [
      {
        code: 'hangzhou',
        name: 'Hangzhou',
        items: [
          {
            code: 'xihu',
            name: 'West Lake',
          },
        ],
      },
    ],
  },
  {
    code: 'jiangsu',
    name: 'Jiangsu',
    items: [
      {
        code: 'nanjing',
        name: 'Nanjing',
        items: [
          {
            code: 'zhonghuamen',
            name: 'Zhong Hua Men',
          },
        ],
      },
    ],
  },
];
export default {
  data() {
    return {
      options,
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
