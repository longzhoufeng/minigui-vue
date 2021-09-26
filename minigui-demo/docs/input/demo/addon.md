<cn>
#### 前置/后置标签
用于配置一些固定组合。
</cn>

<us>
#### Pre / Post tab
Using pre & post tabs example.
</us>

```vue
<template>
  <div>
    <div style="margin-bottom: 16px">
      <m-input addon-before="Http://" addon-after=".com" default-value="mysite" />
    </div>
    <div style="margin-bottom: 16px">
      <m-input default-value="mysite">
        <m-select slot="addonBefore" default-value="Http://" style="width: 90px">
          <m-select-option value="Http://">
            Http://
          </m-select-option>
          <m-select-option value="Https://">
            Https://
          </m-select-option>
        </m-select>
        <m-select slot="addonAfter" default-value=".com" style="width: 80px">
          <m-select-option value=".com">
            .com
          </m-select-option>
          <m-select-option value=".jp">
            .jp
          </m-select-option>
          <m-select-option value=".cn">
            .cn
          </m-select-option>
          <m-select-option value=".org">
            .org
          </m-select-option>
        </m-select>
      </m-input>
    </div>
    <div style="margin-bottom: 16px">
      <m-input default-value="mysite">
        <m-icon slot="addonAfter" type="setting" />
      </m-input>
    </div>
  </div>
</template>
```
