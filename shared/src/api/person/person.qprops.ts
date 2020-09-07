import { stringify } from 'query-string';
import QueryProps from '@shared/api/query-props';

export enum QParam {
  ID = 'id',
  NAME = 'name',
  COLOR = 'color',
}

export interface QProps extends QueryProps<QParam> {
  [QParam.ID]?: string;
  [QParam.NAME]?: string;
  [QParam.COLOR]?: string;
}

export const createQueryString = (qProps: QProps) => stringify(qProps);
