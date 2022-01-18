export type Styles = {
  'main-component': string;
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
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
