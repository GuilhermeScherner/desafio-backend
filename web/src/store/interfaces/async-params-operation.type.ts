import { AsyncOperationType } from './async-operation.type';

export type AsyncParamsOperationType<T> = AsyncOperationType<T> & {
  params: { [key: string]: string | number | boolean };
};
