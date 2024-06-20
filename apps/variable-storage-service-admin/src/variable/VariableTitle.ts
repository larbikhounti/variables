import { Variable as TVariable } from "../api/variable/Variable";

export const VARIABLE_TITLE_FIELD = "key";

export const VariableTitle = (record: TVariable): string => {
  return record.key?.toString() || String(record.id);
};
