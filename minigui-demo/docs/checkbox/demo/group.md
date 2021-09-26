<cn>
#### Checkbox组
方便的从数组生成checkbox
</cn>

<us>
#### Checkbox group
Generate a group of checkboxes from an array
</us>

```vue
<template>
  <div>
    <m-checkbox-group
      v-model="value"
      name="checkboxgroup"
      :options="plainOptions"
      @change="onChange"
    />
    <br />
    <m-checkbox-group :options="plainOptions" :default-value="['Apple']" @change="onChange" />
    <br />
    <m-checkbox-group :options="options" :value="['Pear']" @change="onChange" />
    <br />
    <m-checkbox-group
      :options="optionsWithDisabled"
      disabled
      :default-value="['Apple']"
      @change="onChange"
    >
      <span slot="label" slot-scope="{ value }" style="color: red">{{ value }}</span>
    </m-checkbox-group>
  </div>
</template>
<script>
const plainOptions = ['Apple', 'Pear', 'Orange'];
const options = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange' },
];
const optionsWithDisabled = [
  { value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange', disabled: false },
];
export default {
  data() {
    return {
      plainOptions,
      options,
      optionsWithDisabled,
      value: [],
    };
  },
  methods: {
    onChange(checkedValues) {
      console.log('checked = ', checkedValues);
      console.log('value = ', this.value);
    },
  },
};
</script>
```
