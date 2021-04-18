import {expectType} from 'tsd';
import logSymbols from './index.js';

expectType<string>(logSymbols.info);
expectType<string>(logSymbols.success);
expectType<string>(logSymbols.warning);
expectType<string>(logSymbols.error);
