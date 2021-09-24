<script>
import Basic from './basic.md';
import WithIcon from './withIcon.md';
import Separator from './separator.md';
import Router from './router';
import Overlay from './overlay';
import SeparatorIndepent from './separator-indepent';

import CN from './../index.zh-CN.md';

const md = {
  cn: `# Breadcrumb面包屑
           显示当前页面在系统层级结构中的位置，并能向上返回。
         ## 何时使用
         - 当系统拥有超过两级以上的层级结构时；
         - 当需要告知用户『你在哪里』时；
         -  当需要向上导航的功能时。
         ## 代码演示
        `,
};

export default {
  category: 'Components',
  subtitle: '面包屑',
  type: 'Navigation',
  zhType: '导航',
  title: 'Breadcrumb',
  render() {
    return (
      <div>
        <md cn={md.cn} />
        <demo-sort>
          <Basic />
          <WithIcon />
          <Separator />
          <Router />
          <SeparatorIndepent />
          <Overlay />
        </demo-sort>
        <api>
          <CN slot="cn" />
        </api>
      </div>
    );
  },
};
</script>
