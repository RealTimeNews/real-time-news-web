export type Styles = {
  app: string;
  'nav-icon': string;
  'nav-icon-right': string;
  'nav-header': string;
  'nav-title': string;
  'nav-title-content': string;
  'main-title': string;
  'main-component': string;
  'main-wrap': string;
  'main-content': string;
  'main-content-row': string;
  'main-content-input': string;
  'main-button-wrap': string;
  'main-button': string;
  'signUp-popup': string;
  'popup-header': string;
  'popup-title': string;
  'popup-body': string;
  'popup-content-list': string;
  'popup-content-item': string;
  'popup-content-item-title': string;
  'popup-content-item-input': string;
  'popup-footer': string;
  'popup-button': string;
  'side-view-component': string;
  'side-view-chatting-list': string;
  'side-view-chatting-item': string;
  'side-view-chatting-wrap': string;
  'side-view-chatting-input': string;
  'side-view-chatting-button': string;
  'side-view-chatting-item-header': string;
  'side-view-chatting-item-content': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
