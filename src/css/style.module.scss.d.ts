export type Styles = {
  'signUp-popup': string;
  'popup-header': string;
  'popup-tit': string;
  'popup-body': string;
  'popup-content-list': string;
  'popup-content-item': string;
  'popup-footer': string;
  'popup-button': string;
};

export type ClassNames = keyof Styles;

declare const styles: Styles;

export default styles;
