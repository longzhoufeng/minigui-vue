<script>
import Basic from './basic';
import CheckAll from './check-all';
import Controller from './controller';
import Disabled from './disabled';
import Group from './group';
import Layout from './layout';
import CN from './../index.zh-CN';
const md = {
  cn: `# Checkbox多选框
           多选框
         ## 何时使用
         - 在一组可选项中进行多项选择时；
         - 单独使用可以表示两种状态之间的切换，和 switch 类似。区别在于切换 switch 会直接触发状态改变，而 checkbox 一般用于状态标记，需要和提交操作配合。
         ## 代码演示
        `,
};

export default {
  category: 'Components',
  subtitle: '多选框',
  type: 'Data Entry',
  zhType: '数据录入',
  title: 'Checkbox',
  render() {
    return (
      <div>
        <md cn={md.cn}/>
        <demo-sort>
          <Basic />
          <CheckAll />
          <Disabled />
          <Controller />
          <Group />
          <Layout />
        </demo-sort>
        <api>
          <CN slot="cn" />
        </api>
      </div>
    );
  },
};
</script>
