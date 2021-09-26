<cn>
#### 响应式
通过响应式的配置可以实现在小屏幕设备上的完美呈现。
</cn>

<us>
#### responsive
通过响应式的配置可以实现在小屏幕设备上的完美呈现。
</us>

```vue
<template>
  <div>
    <m-descriptions
      title="Responsive Descriptions"
      bordered
      :column="{ xxl: 4, xl: 3, lg: 3, md: 3, sm: 2, xs: 1 }"
    >
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
        Region: East China 1
      </m-descriptions-item>
    </m-descriptions>
  </div>
</template>
```
