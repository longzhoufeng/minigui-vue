<cn>
#### 基本
默认选中第一项。
</cn>

<us>
#### Nest
Default activate first tab.
</us>

```vue
<template>
  <div>
    <m-select v-model="parentPos" style="width: 200px">
      <m-select-option v-for="pos in positionList" :key="pos" :value="pos">
        Parent - {{ pos }}
      </m-select-option>
    </m-select>
    <m-select v-model="childPos" style="width: 200px">
      <m-select-option v-for="pos in positionList" :key="pos" :value="pos">
        Child - {{ pos }}
      </m-select-option>
    </m-select>

    <m-select v-model="parentType" style="width: 200px">
      <m-select-option value="line">
        Parent - line
      </m-select-option>
      <m-select-option value="card">
        Parent - card
      </m-select-option>
    </m-select>

    <m-select v-model="childType" style="width: 200px">
      <m-select-option value="line">
        Child - line
      </m-select-option>
      <m-select-option value="card">
        Child - card
      </m-select-option>
    </m-select>

    <m-tabs default-active-key="1" :tab-position="parentPos" :type="parentType">
      <m-tab-pane key="1" tab="Tab 1">
        <m-tabs
          :default-active-key="1"
          :tab-position="childPos"
          :type="childType"
          style="height: 300px"
        >
          <m-tab-pane v-for="key in list" :key="key" :tab="`Tab ${key}`">
            TTTT {{ key }}
          </m-tab-pane>
        </m-tabs>
      </m-tab-pane>
      <m-tab-pane key="2" tab="Tab 2">
        Content of Tab Pane 2
      </m-tab-pane>
    </m-tabs>
  </div>
</template>
<script>
const positionList = ['left', 'right', 'top', 'bottom'];
const list = new Array(20).fill().map((_, index) => index);
export default {
  data() {
    return {
      positionList,
      list,
      parentPos: undefined,
      childPos: undefined,
      parentType: undefined,
      childType: undefined,
    };
  },
};
</script>
```
