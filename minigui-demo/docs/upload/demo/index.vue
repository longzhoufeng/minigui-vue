<script>
import Basic from './basic.md';
import Avatar from './avatar.md';
import DefaultFileList from './defaultFileList.md';
import PictureCard from './picture-card.md';
import FileList from './fileList.md';
import Drag from './drag.md';
import PictureStyle from './picture-style.md';
import UploadManually from './upload-manually.md';
import Directory from './directory.md';
import PreviewFile from './preview-file';
import TransformFile from './transform-file';

import CN from '../index.zh-CN.md';

const md = {
  cn: `# 上传
  上传是将信息（网页、文字、图片、视频等）通过网页或者上传工具发布到远程服务器上的过程。
  ## 何时使用
  - 当需要上传一个或一些文件时。
  - 当需要展现上传的进度时。
  - 当需要使用拖拽交互时。
        ## 代码演示`,
};
export default {
  category: 'Components',
  subtitle: '上传',
  type: 'Data Entry',
  title: 'Upload',
  render() {
    return (
      <div>
        <md cn={md.cn} />
        <demo-sort>
          <Basic />
          <Avatar />
          <DefaultFileList />
          <PictureCard />
          <FileList />
          <Drag />
          <PictureStyle />
          <UploadManually />
          <Directory />
          <PreviewFile />
          <TransformFile />
        </demo-sort>
        <api>
          <template slot="cn">
            <CN />
          </template>
        </api>
      </div>
    );
  },
};
</script>
