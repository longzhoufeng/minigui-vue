<script>
import Basic from './basic.md';
import NoWapper from './no-wrapper';
import Dot from './dot';
import Change from './change';
import Overflow from './overflow';
import Status from './status';
import Title from './title';
import Colors from './colors';

import CN from './../index.zh-CN.md';

const md = {
  cn: `# Badge徽标数
         图标右上角的圆形徽标数字。
         ## 何时使用
         一般出现在通知图标或头像的右上角，用于显示需要处理的消息条数，通过醒目视觉形式吸引用户处理。
         ## 代码演示
        `,
};

export default {
  category: 'Components',
  subtitle: '徽标数',
  type: 'Data Display',
  zhType: '数据展示',
  title: 'Badge',
  render() {
    return (
      <div id="components-badge-demo">
        <md cn={md.cn} />
        <demo-sort>
          <Basic />
          <NoWapper />
          <Overflow />
          <Dot />
          <Status />
          <Change />
          <Title />
          <Colors />
        </demo-sort>
        <api>
          <CN slot="cn" />
        </api>
      </div>
    );
  },
};
</script>

<style>
#components-badge-demo .minigui-badge:not(.minigui-badge-not-a-wrapper) {
  margin-right: 20px;
}
#components-badge-demo .head-example {
  width: 42px;
  height: 42px;
  border-radius: 4px;
  background: #eee;
  display: inline-block;
  vertical-align: middle;
}
#components-badge-demo .minigui-badge-not-a-wrapper:not(.minigui-badge-status) {
  margin-right: 8px;
}
</style>
