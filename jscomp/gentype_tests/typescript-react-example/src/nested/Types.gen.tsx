/* TypeScript file generated from Types.res by genType. */

/* eslint-disable */
/* tslint:disable */

import * as TypesBS__Es6Import from './Types.bs';
const TypesBS: any = TypesBS__Es6Import;

import type {Json_t as Js_Json_t} from '../../src/shims/Js.shim';

import type {M_t__ as TypeNameSanitize_M_t__} from '../../src/TypeNameSanitize.gen';

import type {list} from '../../src/shims/RescriptPervasives.shim';

import type {t_ as TypeNameSanitize_t_} from '../../src/TypeNameSanitize.gen';

import type {t as Location_t} from '../../src/location/location.gen';

export type t = number;

export type typeWithVars<x,y,z> = 
    { TAG: "A"; _0: x; _1: y }
  | { TAG: "B"; _0: z };

export type tree = {
  readonly label: string; 
  readonly left?: tree; 
  readonly right?: tree
};

export type selfRecursive = { readonly self: selfRecursive };

export type mutuallyRecursiveA = { readonly b: mutuallyRecursiveB };

export type mutuallyRecursiveB = { readonly a: mutuallyRecursiveA };

export abstract class opaqueVariant { protected opaque!: any }; /* simulate opaque types */

export type twice<a> = [a, a];

export type genTypeMispelled = number;

export type dictString = {[id: string]: string};

export type nullOrString = (null | string);

export type nullOrString2 = (null | string);

export type record = { readonly i: number; readonly s: string };

export type decorator<a,b> = (_1:a) => b;

export type marshalFields = {
  readonly _rec: string; 
  readonly _switch: string; 
  readonly switch: string; 
  readonly __: string; 
  readonly ___: string; 
  readonly foo__: string; 
  readonly _foo__: string; 
  readonly _Uppercase: string; 
  readonly _Uppercase__: string
};

export type marshalMutableField = { _match: number };

export type ocaml_array<a> = a[];

export type someRecord = { readonly id: number };

export type instantiateTypeParameter = ocaml_array<someRecord>;

export type vector<a> = [a, a];
export type Vector<a> = vector<a>;

export type date = Date;

export type i64A = [number, number];

export type i64B = [number, number];

export type ObjectId_t = number;

export type tPrimed = [TypeNameSanitize_t_, TypeNameSanitize_M_t__];

export const someIntList: list<number> = TypesBS.someIntList;

export const map: <T1,T2>(_1:((_1:T1) => T2), _2:list<T1>) => list<T2> = TypesBS.map;

export const swap: (tree:tree) => tree = TypesBS.swap;

export const selfRecursiveConverter: (param:selfRecursive) => selfRecursive = TypesBS.selfRecursiveConverter;

export const mutuallyRecursiveConverter: (param:mutuallyRecursiveA) => mutuallyRecursiveB = TypesBS.mutuallyRecursiveConverter;

export const testFunctionOnOptionsAsArgument: <T1,a>(a:(undefined | a), foo:((_1:(undefined | a)) => T1)) => T1 = TypesBS.testFunctionOnOptionsAsArgument;

export const stringT: string = TypesBS.stringT;

export const jsStringT: string = TypesBS.jsStringT;

export const jsString2T: string = TypesBS.jsString2T;

export const jsonStringify: (_1:Js_Json_t) => string = TypesBS.jsonStringify;

export const testConvertNull: (x:(null | record)) => (null | record) = TypesBS.testConvertNull;

export const testConvertLocation: (x:Location_t) => Location_t = TypesBS.testConvertLocation;

export const testMarshalFields: marshalFields = TypesBS.testMarshalFields;

export const setMatch: (x:marshalMutableField) => void = TypesBS.setMatch;

export const testInstantiateTypeParameter: (x:instantiateTypeParameter) => instantiateTypeParameter = TypesBS.testInstantiateTypeParameter;

export const currentTime: Date = TypesBS.currentTime;

export const i64Const: i64B = TypesBS.i64Const;

export const optFunction: (undefined | (() => number)) = TypesBS.optFunction;
