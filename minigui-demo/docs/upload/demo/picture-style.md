<cn>
#### 图片列表样式
上传文件为图片，可展示本地缩略图。`IE8/9` 不支持浏览器本地缩略图展示（[Ref](https://developer.mozilla.org/en-US/docs/Web/API/FileReader/readAsDataURL)），可以写 `thumbUrl` 属性来代替。
</cn>

<us>
#### Pictures with list style
If uploaded file is a picture, the thumbnail can be shown. `IE8/9` do not support local thumbnail show. Please use `thumbUrl` instead.
</us>

```vue
<template>
  <div>
    <m-upload
      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      list-type="picture"
      :default-file-list="fileList"
    >
      <m-button> <m-icon type="upload" /> upload </m-button>
    </m-upload>
    <br />
    <br />
    <m-upload
      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      list-type="picture"
      :default-file-list="fileList"
      class="upload-list-inline"
    >
      <m-button> <m-icon type="upload" /> upload </m-button>
    </m-upload>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fileList: [
        {
          uid: '-1',
          name: 'xxx.png',
          status: 'done',
          url: '/no.png',
        },
        {
          uid: '-2',
          name: 'yyy.png',
          status: 'done',
          url: '/no.png',
        },
      ],
    };
  },
};
</script>
<style scoped>
/* tile uploaded pictures */
.upload-list-inline >>> .minigui-upload-list-item {
  float: left;
  width: 200px;
  margin-right: 8px;
}
.upload-list-inline >>> .minigui-upload-animate-enter {
  animation-name: uploadAnimateInlineIn;
}
.upload-list-inline >>> .minigui-upload-animate-leave {
  animation-name: uploadAnimateInlineOut;
}
</style>
```
