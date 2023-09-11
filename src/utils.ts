import { Color } from './types';
import { activeBg, bg, flexDirection, textColor } from './css-classes';

export const removeCls = (needle: string, haystack: string) =>
  haystack.replace(needle, '');

export const getInvertedColor = (color?: Color) => {
  if (!color) {
    return '';
  }

  if (color.indexOf('on-') === 0) {
    return color.replace('on-', '');
  }

  return `on-${color}`;
};

export const activeBgColor = (color?: Color) => (color ? activeBg[color] : '');

export const bgColor = (color?: Color) => (color ? bg[color] : '');

export const getTextColor = (color?: Color) => (color ? textColor[color] : '');

export const getDirection = (vertical?: boolean, reversed?: boolean) => {
  if (!reversed && !vertical) {
    return '';
  }

  if (!reversed) {
    return flexDirection.col;
  }

  if (vertical) {
    return flexDirection.colReversed;
  }

  return flexDirection.rowReversed;
};

export const createElevated = (color?: Color) => {
  const txt = getTextColor(color);

  return `bg-surface-container-low shadow-md hover:shadow-lg ${txt}`;
};

export const createFilled = (color?: Color) =>
  `${bgColor(color)} text-${getInvertedColor(color)}`;

export const createOutlined = (color?: Color) =>
  `border border-outline ${getTextColor(color)}`;

export const debounce = (fn: Function, ms: number) => {
  let timer: any;

  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      fn.apply(undefined);
    }, ms);
  };
};

export const randomChar = (max = 10) => {
  let text = '';
  const possible =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (var i = 0; i < max; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return text;
};

export const tick = (ms = 300) =>
  new Promise((resolve) => setTimeout(() => resolve(true), ms));
