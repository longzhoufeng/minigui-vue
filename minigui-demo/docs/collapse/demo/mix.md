<cn>
#### 面板嵌套
嵌套折叠面板。
</cn>

<us>
#### Nested panel
`Collapse` is nested inside the `Collapse`.
</us>

```vue
<template>
  <div>
    <m-collapse @change="changeActivekey">
      <m-collapse-panel key="1" header="This is panel header 1">
        <m-collapse default-active-key="4">
          <m-collapse-panel key="4" header="This is panel nest panel">
            <p>{{ text }}</p>
          </m-collapse-panel>
        </m-collapse>
      </m-collapse-panel>
      <m-collapse-panel key="2" header="This is panel header 2" :disabled="false">
        <p>{{ text }}</p>
      </m-collapse-panel>
      <m-collapse-panel key="3" header="This is panel header 3">
        <p>{{ text }}</p>
      </m-collapse-panel>
    </m-collapse>
  </div>
</template>
<script>
export default {
  data() {
    return {
      text: `A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.`,
    };
  },
  methods: {
    changeActivekey(key) {
      console.log(key);
    },
  },
};
</script>
```
