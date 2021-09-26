<cn>
#### 输入框组合
输入框的组合展现。
注意：使用 `compact` 模式时，不需要通过 `Col` 来控制宽度。
</cn>

<us>
#### Input Group
Input.Group example
Note: You don't need `Col` to control the width in the `compact` mode.
</us>

```vue
<template>
  <div>
    <m-input-group size="large">
      <m-row :gutter="8">
        <m-col :span="5">
          <m-input default-value="0571" />
        </m-col>
        <m-col :span="8">
          <m-input default-value="26888888" />
        </m-col>
      </m-row>
    </m-input-group>
    <br />
    <m-input-group compact>
      <m-input style="width: 20%" default-value="0571" />
      <m-input style="width: 30%" default-value="26888888" />
    </m-input-group>
    <br />
    <m-input-group compact>
      <m-select default-value="Zhejiang">
        <m-select-option value="Zhejiang">
          Zhejiang
        </m-select-option>
        <m-select-option value="Jiangsu">
          Jiangsu
        </m-select-option>
      </m-select>
      <m-input style="width: 50%" default-value="Xihu District, Hangzhou" />
    </m-input-group>
    <br />
    <m-input-group compact>
      <m-select default-value="Option1">
        <m-select-option value="Option1">
          Option1
        </m-select-option>
        <m-select-option value="Option2">
          Option2
        </m-select-option>
      </m-select>
      <m-input style="width: 50%" default-value="input content" />
    </m-input-group>
    <br />
    <m-input-group compact>
      <m-input style="width: 50%" default-value="input content" />
      <m-date-picker style="width: 50%" />
    </m-input-group>
    <br />
    <m-input-group compact>
      <m-select default-value="Option1-1">
        <m-select-option value="Option1-1">
          Option1-1
        </m-select-option>
        <m-select-option value="Option1-2">
          Option1-2
        </m-select-option>
      </m-select>
      <m-select default-value="Option2-2">
        <m-select-option value="Option2-1">
          Option2-1
        </m-select-option>
        <m-select-option value="Option2-2">
          Option2-2
        </m-select-option>
      </m-select>
    </m-input-group>
    <br />
    <m-input-group compact>
      <m-select default-value="1">
        <m-select-option value="1">
          Between
        </m-select-option>
        <m-select-option value="2">
          Except
        </m-select-option>
      </m-select>
      <m-input style=" width: 100px; text-align: center" placeholder="Minimum" />
      <m-input
        style=" width: 30px; border-left: 0; pointer-events: none; backgroundColor: #fff"
        placeholder="~"
        disabled
      />
      <m-input style="width: 100px; text-align: center; border-left: 0" placeholder="Maximum" />
    </m-input-group>
    <br />
    <m-input-group compact>
      <m-select default-value="Sign Up">
        <m-select-option value="Sign Up">
          Sign Up
        </m-select-option>
        <m-select-option value="Sign In">
          Sign In
        </m-select-option>
      </m-select>
      <m-auto-complete
        :data-source="dataSource"
        style="width: 200px"
        placeholder="Email"
        @change="handleChange"
      />
    </m-input-group>
    <br />
    <m-input-group compact>
      <m-select style="width: 30%" default-value="Home">
        <m-select-option value="Home">
          Home
        </m-select-option>
        <m-select-option value="Company">
          Company
        </m-select-option>
      </m-select>
      <m-cascader style="width: 70%" :options="options" placeholder="Select Address" />
    </m-input-group>
  </div>
</template>
<script>
const options = [
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
];
export default {
  data() {
    return {
      options,
      dataSource: [],
    };
  },
  methods: {
    handleChange(value) {
      this.dataSource =
        !value || value.indexOf('@') >= 0
          ? []
          : [`${value}@gmail.com`, `${value}@163.com`, `${value}@qq.com`];
    },
  },
};
</script>
```
