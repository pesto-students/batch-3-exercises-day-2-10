function type(args) {
  if (Array.isArray(args)) return 'Array';
  if (args instanceof RegExp) return 'RegExp';
  if (typeof args === 'string') return 'String';
  if (args === null) return 'Null';
  if (typeof args === 'undefined') return 'Undefined';
  if (typeof args === 'object') return 'Object';
  if (typeof args === 'number') return 'Number';

  return undefined;
}

export { type };
