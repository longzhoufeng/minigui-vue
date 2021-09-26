<cn>
#### 按钮尺寸
按钮有大、中、小三种尺寸。
通过设置 `size` 为 `large` `small` 分别把按钮设为大、小尺寸。若不设置 `size`，则尺寸为中。
</cn>

<us>
#### Size
Ant Design supports a default button size as well as a large and small size.
If a large or small button is desired, set the `size` property to either `large` or `small` respectively. Omit the `size` property for a button with the default size.
</us>

```vue
<template>
  <div>
    <m-radio-group :value="size" @change="handleSizeChange">
      <m-radio-button value="large">
        Large
      </m-radio-button>
      <m-radio-button value="default">
        Default
      </m-radio-button>
      <m-radio-button value="small">
        Small
      </m-radio-button>
    </m-radio-group>
    <br><br>
    <m-button type="primary" :size="size">
      Primary
    </m-button>
    <m-button :size="size">
      Normal
    </m-button>
    <m-button type="dashed" :size="size">
      Dashed
    </m-button>
    <m-button type="danger" :size="size">
      Danger
    </m-button>
    <m-button type="link" :size="size">
      Link
    </m-button>
    <br>
    <m-button type="primary" icon="download" :size="size" />
    <m-button type="primary" shape="circle" icon="download" :size="size" />
    <m-button type="primary" shape="round" icon="download" :size="size" />Download</m-button>
    <m-button type="primary" shape="round" icon="download" :size="size" />
    <m-button type="primary" icon="download" :size="size">
      Download
    </m-button>
    <br>
    <m-button-group :size="size">
      <m-button type="primary">
        <m-icon type="left" />Backward
      </m-button>
      <m-button type="primary">
        Forward<m-icon type="right" />
      </m-button>
    </m-button-group>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        size: 'large',
      };
    },
    methods: {
      handleSizeChange(e) {
        this.size = e.target.value;
      },
    },
  };
</script>
```
