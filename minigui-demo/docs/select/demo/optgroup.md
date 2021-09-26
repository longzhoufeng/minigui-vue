<cn>
#### 分组
用 `OptGroup` 进行选项分组。
</cn>

<us>
#### Option Group
Using `OptGroup` to group the options.
</us>

```vue
<template>
  <m-select default-value="lucy" style="width: 200px" @change="handleChange">
    <m-select-opt-group>
      <span slot="label"><m-icon type="user" />Manager</span>
      <m-select-option value="jack">
        Jack
      </m-select-option>
      <m-select-option value="lucy">
        Lucy
      </m-select-option>
    </m-select-opt-group>
    <m-select-opt-group label="Engineer">
      <m-select-option value="Yiminghe">
        yiminghe
      </m-select-option>
    </m-select-opt-group>
  </m-select>
</template>
<script>
export default {
  methods: {
    handleChange(value) {
      console.log(`selected ${value}`);
    },
  },
};
</script>
```
