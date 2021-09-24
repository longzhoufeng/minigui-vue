<script>
import Locale from './locale.md';
import CN from '../index.zh-CN.md';

const md = {
  cn: `# ConfigProvider 全局化配置
为组件提供统一的全局化配置。`,
};
export default {
  category: 'Components',
  subtitle: '全局化配置',
  cols: 1,
  type: '其他',
  title: 'ConfigProvider',
  render() {
    return (
      <div>
        <md cn={md.cn} />
        <demo-sort cols={1}>
          <Locale />
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
