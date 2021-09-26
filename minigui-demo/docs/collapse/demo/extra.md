<cn>
#### 额外节点
可以同时展开多个面板，这个例子默认展开了第一个。
</cn>

<us>
#### Extra node
More than one panel can be expanded at a time, the first panel is initialized to be active in this case.
</us>

```vue
<template>
  <div>
    <m-collapse v-model="activeKey" :expand-icon-position="expandIconPosition">
      <m-collapse-panel key="1" header="This is panel header 1">
        <p>{{ text }}</p>
        <m-icon slot="extra" type="setting" @click="handleClick" />
      </m-collapse-panel>
      <m-collapse-panel key="2" header="This is panel header 2" :disabled="false">
        <p>{{ text }}</p>
        <m-icon slot="extra" type="setting" @click="handleClick" />
      </m-collapse-panel>
      <m-collapse-panel key="3" header="This is panel header 3" disabled>
        <p>{{ text }}</p>
        <m-icon slot="extra" type="setting" @click="handleClick" />
      </m-collapse-panel>
    </m-collapse>
    <br />
    <span>Expand Icon Position: </span>
    <m-select v-model="expandIconPosition">
      <m-select-option value="left">
        left
      </m-select-option>
      <m-select-option value="right">
        right
      </m-select-option>
    </m-select>
  </div>
</template>
<script>
export default {
  data() {
    return {
      text: `A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.`,
      activeKey: ['1'],
      expandIconPosition: 'left',
    };
  },
  watch: {
    activeKey(key) {
      console.log(key);
    },
  },
  methods: {
    handleClick(event) {
      // If you don't want click extra trigger collapse, you can prevent this:
      event.stopPropagation();
    },
  },
};
</script>
```
