<script>
import CustomIndicator from './custom-indicator';
import Basic from './basic';
import DelayAndDebounce from './delayAndDebounce';
import Inside from './inside';
import Nested from './nested';
import Size from './size';
import Tip from './tip';
import CN from '../index.zh-CN.md';

const md = {
  cn: `# Spin 加载中

  用于页面和区块的加载中状态。

  ## 何时使用

  页面局部处于等待异步数据或正在渲染过程时，合适的加载动效会有效缓解用户的焦虑。
            ## 代码演示`,
};
export default {
  category: 'Components',
  type: 'Feedback',
  title: 'Spin',
  subtitle: '加载中',
  render() {
    return (
      <div>
        <md cn={md.cn} />
        <demo-sort>
          <Basic />
          <Size />
          <Inside />
          <Nested />
          <Tip />
          <DelayAndDebounce />
          <CustomIndicator />
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
