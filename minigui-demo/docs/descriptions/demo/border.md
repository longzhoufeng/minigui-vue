<cn>
#### 带边框的
</cn>

<us>
#### border
Descriptions with border and background color.
</us>

```vue
<template>
  <m-descriptions title="User Info" bordered>
    <m-descriptions-item label="Product">
      Cloud Database
    </m-descriptions-item>
    <m-descriptions-item label="Billing Mode">
      Prepaid
    </m-descriptions-item>
    <m-descriptions-item label="Automatic Renewal">
      YES
    </m-descriptions-item>
    <m-descriptions-item label="Order time">
      2018-04-24 18:00:00
    </m-descriptions-item>
    <m-descriptions-item label="Usage Time" :span="2">
      2019-04-24 18:00:00
    </m-descriptions-item>
    <m-descriptions-item label="Status" :span="3">
      <m-badge status="processing" text="Running" />
    </m-descriptions-item>
    <m-descriptions-item label="Negotiated Amount">
      $80.00
    </m-descriptions-item>
    <m-descriptions-item label="Discount">
      $20.00
    </m-descriptions-item>
    <m-descriptions-item label="Official Receipts">
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
</template>
```
