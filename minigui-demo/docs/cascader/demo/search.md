<cn>
#### 搜索
可以直接搜索选项并选择。
> `Cascader[showSearch]` 暂不支持服务端搜索
</cn>

<us>
#### Search
Search and select options directly.
> Now, `Cascader[showSearch]` doesn't support search on server
</us>

```vue
<template>
  <m-cascader
    :options="options"
    :show-search="{ filter }"
    placeholder="Please select"
    @change="onChange"
  />
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
                {
                  value: 'xiasha',
                  label: 'Xia Sha',
                  disabled: true,
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
                  label: 'Zhong Hua men',
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
      console.log(value, selectedOptions);
    },
    filter(inputValue, path) {
      return path.some(option => option.label.toLowerCase().indexOf(inputValue.toLowerCase()) > -1);
    },
  },
};
</script>
```
