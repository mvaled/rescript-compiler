/* TypeScript file generated from TestModuleAliases.res by genType. */

/* eslint-disable */
/* tslint:disable */

import * as TestModuleAliasesBS__Es6Import from './TestModuleAliases.bs';
const TestModuleAliasesBS: any = TestModuleAliasesBS__Es6Import;

import type {InnerAlias_inner as ModuleAliases2_InnerAlias_inner} from './ModuleAliases2.gen';

import type {Outer_Inner_inner as ModuleAliases2_Outer_Inner_inner} from './ModuleAliases2.gen';

import type {Outer_outer as ModuleAliases2_Outer_outer} from './ModuleAliases2.gen';

import type {record as ModuleAliases2_record} from './ModuleAliases2.gen';

export type OtherFile_record = { readonly x: number; readonly y: string };

export type record = ModuleAliases2_record;

export type record2 = ModuleAliases2_record;

export type outer = ModuleAliases2_Outer_outer;

export type outer2 = ModuleAliases2_Outer_outer;

export type my2 = ModuleAliases2_Outer_Inner_inner;

export type inner1 = ModuleAliases2_InnerAlias_inner;

export type inner2 = ModuleAliases2_Outer_Inner_inner;

export const testInner1: (x:inner1) => inner1 = TestModuleAliasesBS.testInner1;

export const testInner1Expanded: (x:ModuleAliases2_InnerAlias_inner) => ModuleAliases2_InnerAlias_inner = TestModuleAliasesBS.testInner1Expanded;

export const testInner2: (x:inner2) => inner2 = TestModuleAliasesBS.testInner2;

export const testInner2Expanded: (x:ModuleAliases2_Outer_Inner_inner) => ModuleAliases2_Outer_Inner_inner = TestModuleAliasesBS.testInner2Expanded;
