<cn>
#### 手动上传
`beforeUpload` 返回 `false` 后，手动上传文件。
</cn>

<us>
#### Upload manually
Upload files manually after `beforeUpload` returns `false`.
</us>

```vue
<template>
  <div class="clearfix">
    <m-upload :file-list="fileList" :remove="handleRemove" :before-upload="beforeUpload">
      <m-button> <m-icon type="upload" /> Select File </m-button>
    </m-upload>
    <m-button
      type="primary"
      :disabled="fileList.length === 0"
      :loading="uploading"
      style="margin-top: 16px"
      @click="handleUpload"
    >
      {{ uploading ? 'Uploading' : 'Start Upload' }}
    </m-button>
  </div>
</template>
<script>
import reqwest from 'reqwest';
export default {
  data() {
    return {
      fileList: [],
      uploading: false,
    };
  },
  methods: {
    handleRemove(file) {
      const index = this.fileList.indexOf(file);
      const newFileList = this.fileList.slice();
      newFileList.splice(index, 1);
      this.fileList = newFileList;
    },
    beforeUpload(file) {
      this.fileList = [...this.fileList, file];
      return false;
    },
    handleUpload() {
      const { fileList } = this;
      const formData = new FormData();
      fileList.forEach(file => {
        formData.append('files[]', file);
      });
      this.uploading = true;

      // You can use any AJAX library you like
      reqwest({
        url: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
        method: 'post',
        processData: false,
        data: formData,
        success: () => {
          this.fileList = [];
          this.uploading = false;
          this.$message.success('upload successfully.');
        },
        error: () => {
          this.uploading = false;
          this.$message.error('upload failed.');
        },
      });
    },
  },
};
</script>
```
