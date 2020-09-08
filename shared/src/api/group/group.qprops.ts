import { stringify } from 'query-string';
import QueryProps from '@shared/api/query-props';

export enum QParam {
  // ID = 'id',
  NAME = 'name',
}

export interface QProps extends QueryProps<QParam> {
  // [QParam.ID]?: string;
  [QParam.NAME]?: string;
}

export const createQueryString = (qProps: QProps) => stringify(qProps);
