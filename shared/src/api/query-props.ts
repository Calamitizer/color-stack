type QueryProps<Q extends string> = {
  [param in Q]?: number | string;
};

export default QueryProps;
