<cn>
#### 布局
Checkbox.Group内嵌Checkbox并与Grid组件一起使用，可以实现灵活的布局
</cn>

<us>
#### Use with grid
We can use Checkbox and Grid Checkbox.group, to implement complex layout
</us>

```vue
<template>
  <m-checkbox-group @change="onChange">
    <m-row>
      <m-col :span="8">
        <m-checkbox value="A">
          A
        </m-checkbox>
      </m-col>
      <m-col :span="8">
        <m-checkbox value="B">
          B
        </m-checkbox>
      </m-col>
      <m-col :span="8">
        <m-checkbox value="C">
          C
        </m-checkbox>
      </m-col>
      <m-col :span="8">
        <m-checkbox value="D">
          D
        </m-checkbox>
      </m-col>
      <m-col :span="8">
        <m-checkbox value="E">
          E
        </m-checkbox>
      </m-col>
    </m-row>
  </m-checkbox-group>
</template>
<script>
export default {
  methods: {
    onChange(checkedValues) {
      console.log('checked = ', checkedValues);
    },
  },
};
</script>
```
