<cn>
#### 全选
在实现全选效果时，你可能会用到`indeterminate`属性
</cn>

<us>
#### Check all
The `indeterminate` property can help you to achieve a 'check all' effect.
</us>

```vue
<template>
  <div>
    <div :style="{ borderBottom: '1px solid #E9E9E9' }">
      <m-checkbox :indeterminate="indeterminate" :checked="checkAll" @change="onCheckAllChange">
        Check all
      </m-checkbox>
    </div>
    <br />
    <m-checkbox-group v-model="checkedList" :options="plainOptions" @change="onChange" />
  </div>
</template>
<script>
const plainOptions = ['Apple', 'Pear', 'Orange'];
const defaultCheckedList = ['Apple', 'Orange'];
export default {
  data() {
    return {
      checkedList: defaultCheckedList,
      indeterminate: true,
      checkAll: false,
      plainOptions,
    };
  },
  methods: {
    onChange(checkedList) {
      this.indeterminate = !!checkedList.length && checkedList.length < plainOptions.length;
      this.checkAll = checkedList.length === plainOptions.length;
    },
    onCheckAllChange(e) {
      Object.assign(this, {
        checkedList: e.target.checked ? plainOptions : [],
        indeterminate: false,
        checkAll: e.target.checked,
      });
    },
  },
};
</script>
```
