export interface FilterState {
  color: string | null;
}

export const trivialFilterState = (): FilterState => ({
  color: null,
});
