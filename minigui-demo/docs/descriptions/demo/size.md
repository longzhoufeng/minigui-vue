<cn>
#### 自定义尺寸
自定义尺寸，适应在各种容器中展示。
</cn>

<us>
#### Custom size
Custom sizes to fit in a variety of containers.
</us>

```vue
<template>
  <div>
    <m-radio-group v-model="size" @change="onChange">
      <m-radio value="default">
        default
      </m-radio>
      <m-radio value="middle">
        middle
      </m-radio>
      <m-radio value="small">
        small
      </m-radio>
    </m-radio-group>
    <br />
    <br />
    <m-descriptions bordered title="Custom Size" :size="size">
      <m-descriptions-item label="Product">
        Cloud Database
      </m-descriptions-item>
      <m-descriptions-item label="Billing">
        Prepaid
      </m-descriptions-item>
      <m-descriptions-item label="Time">
        18:00:00
      </m-descriptions-item>
      <m-descriptions-item label="Amount">
        $80.00
      </m-descriptions-item>
      <m-descriptions-item label="Discount">
        $20.00
      </m-descriptions-item>
      <m-descriptions-item label="Official">
        $60.00
      </m-descriptions-item>
      <m-descriptions-item label="Config Info">
        Data disk type: MongoDB
        <br />
        Database version: 3.4
        <br />
        Package: dds.mongo.mid
        <br />
        Storage space: 10 GB
        <br />
        Replication factor: 3
        <br />
        Region: East China 1<br />
      </m-descriptions-item>
    </m-descriptions>
    <br />
    <br />
    <m-descriptions title="Custom Size" :size="size">
      <m-descriptions-item label="Product">
        Cloud Database
      </m-descriptions-item>
      <m-descriptions-item label="Billing">
        Prepaid
      </m-descriptions-item>
      <m-descriptions-item label="Time">
        18:00:00
      </m-descriptions-item>
      <m-descriptions-item label="Amount">
        $80.00
      </m-descriptions-item>
      <m-descriptions-item label="Discount">
        $20.00
      </m-descriptions-item>
      <m-descriptions-item label="Official">
        $60.00
      </m-descriptions-item>
    </m-descriptions>
  </div>
</template>
<script>
export default {
  data() {
    return {
      size: 'default',
    };
  },
  methods: {
    onChange(e) {
      console.log('size checked', e.target.value);
      this.size = e.target.value;
    },
  },
};
</script>
```
