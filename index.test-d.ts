import {expectType} from 'tsd';
import * as logSymbols from '.';

expectType<string>(logSymbols.info);
expectType<string>(logSymbols.success);
expectType<string>(logSymbols.warning);
expectType<string>(logSymbols.error);
