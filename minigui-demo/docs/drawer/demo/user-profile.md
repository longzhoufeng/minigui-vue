<cn>
#### 信息预览抽屉
需要快速预览对象概要时使用，点击遮罩区关闭。
</cn>

<us>
#### Preview drawer
Use Drawer to quickly preview details of an object, such as those in a list.
</us>

```vue
<template>
  <div>
    <m-list
      :data-source="[
        {
          name: 'Lily',
        },
        {
          name: 'Lily',
        },
      ]"
      bordered
    >
      <m-list-item slot="renderItem" :key="`a-${item.id}`" slot-scope="item, index">
        <a slot="actions" @click="showDrawer">View Profile</a>
        <m-list-item-meta description="Progresser XTech">
          <a slot="title" href="#">{{ item.name }}</a>
          <m-avatar
            slot="avatar"
            src="/img/avatar.png"
          />
        </m-list-item-meta>
      </m-list-item>
    </m-list>
    <m-drawer width="640" placement="right" :closable="false" :visible="visible" @close="onClose">
      <p :style="[pStyle, pStyle2]">
        User Profile
      </p>
      <p :style="pStyle">
        Personal
      </p>
      <m-row>
        <m-col :span="12">
          <description-item title="Full Name" content="Lily" />
        </m-col>
        <m-col :span="12">
          <description-item title="Account" content="minigui@example.com" />
        </m-col>
      </m-row>
      <m-row>
        <m-col :span="12">
          <description-item title="City" content="GuangZhou" />
        </m-col>
        <m-col :span="12">
          <description-item title="Country" content="China🇨🇳" />
        </m-col>
      </m-row>
      <m-row>
        <m-col :span="12">
          <description-item title="Birthday" content="February 2,1900" />
        </m-col>
        <m-col :span="12">
          <description-item title="Website" content="-" />
        </m-col>
      </m-row>
      <m-row>
        <m-col :span="12">
          <description-item
            title="Message"
            content="Make things as simple as possible but no simpler."
          />
        </m-col>
      </m-row>
      <m-divider />
      <p :style="pStyle">
        Company
      </p>
      <m-row>
        <m-col :span="12">
          <description-item title="Position" content="Programmer" />
        </m-col>
        <m-col :span="12">
          <description-item title="Responsibilities" content="Coding" />
        </m-col>
      </m-row>
      <m-row>
        <m-col :span="12">
          <description-item title="Department" content="XTech" />
        </m-col>
        <m-col :span="12">
          <description-item title="Supervisor">
            <a slot="content">Lin</a>
          </description-item>
        </m-col>
      </m-row>
      <m-row>
        <m-col :span="24">
          <description-item
            title="Skills"
            content="C / C + +, data structures, software engineering, operating systems, computer networks, databases, compiler theory, computer architecture, Microcomputer Principle and Interface Technology, Computer English, Java, ASP, etc."
          />
        </m-col>
      </m-row>
      <m-divider />
      <p :style="pStyle">
        Contacts
      </p>
      <m-row>
        <m-col :span="12">
          <description-item title="Email" content="minigui-vue@example.com" />
        </m-col>
        <m-col :span="12">
          <description-item title="Phone Number" content="+86 181 0000 0000" />
        </m-col>
      </m-row>
      <m-row>
        <m-col :span="24">
          <description-item title="Github">
            <a slot="content" href="https://github.com/longzhoufeng/minigui-vue">
              github.com/longzhoufeng/minigui-vue
            </a>
          </description-item>
        </m-col>
      </m-row>
    </m-drawer>
  </div>
</template>
<script>
import descriptionItem from './descriptionItem';

export default {
  components: {
    descriptionItem,
  },
  data() {
    return {
      visible: false,
      pStyle: {
        fontSize: '16px',
        color: 'rgba(0,0,0,0.85)',
        lineHeight: '24px',
        display: 'block',
        marginBottom: '16px',
      },
      pStyle2: {
        marginBottom: '24px',
      },
    };
  },
  methods: {
    showDrawer() {
      this.visible = true;
    },
    onClose() {
      this.visible = false;
    },
  },
};
</script>
```
