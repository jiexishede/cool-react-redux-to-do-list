'use strict';

export function trimSpace(str='') {
  if ( !str ) return str;

  const trimMiddle = /\s\s+/g;
  const trimRight = /\s+$/g;
  const trimLeft = /^\s+/g;

  return str.replace(trimLeft, '').replace(trimRight, '').replace(trimMiddle, '');
}

export function trimSpaceKey(str='') {
  if ( !str ) return str;

  const trimMiddle = /\s\s+/g;
  const trimLeft = /^\s+/g;

  return str.replace(trimLeft, '').replace(trimMiddle, ' ');
}