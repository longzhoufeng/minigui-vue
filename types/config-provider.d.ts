import { MiniguiComponent } from './component';
import Vue from 'vue';

import { Locale } from './locale-provider';

export interface CSPConfig {
  nonce?: string;
}

export declare class ConfigProvider extends MiniguiComponent {
  getPopupContainer?: (triggerNode: HTMLElement, dialogContext?: Vue | null) => HTMLElement;
  getPrefixCls: (suffixCls: string, customizePrefixCls?: string) => string;
  renderEmpty: Function;
  csp?: CSPConfig;
  autoInsertSpaceInButton?: boolean;
  transformCellText?: Function;
}
