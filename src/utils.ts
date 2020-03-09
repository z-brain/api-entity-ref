import * as _ from 'lodash';

export interface Type<T> extends Function {
  new (...args: any[]): T;
}

// TODO: replace with _.isSymbol() after update typings in lodash
export const isSymbol: (value: any) => value is symbol = _.isSymbol as any;
