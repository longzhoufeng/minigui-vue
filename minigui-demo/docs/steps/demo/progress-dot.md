<cn>
#### 点状步骤条
包含步骤点的进度条。
</cn>

<us>
#### Dot Style
Steps with progress dot style.
</us>

```vue
<template>
  <div>
    <m-steps progress-dot :current="1">
      <m-step title="Finished" description="This is a description." />
      <m-step title="In Progress" description="This is a description." />
      <m-step title="Waiting" description="This is a description." />
    </m-steps>
    <m-divider />
    <m-steps progress-dot :current="1" direction="vertical">
      <m-step title="Finished" description="This is a description. This is a description." />
      <m-step title="Finished" description="This is a description. This is a description." />
      <m-step title="In Progress" description="This is a description. This is a description." />
      <m-step title="Waiting" description="This is a description." />
      <m-step title="Waiting" description="This is a description." />
    </m-steps>
  </div>
</template>
```
