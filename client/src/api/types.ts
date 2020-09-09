// export interface AsyncActions<T = any> {
//   request: () => { type: string };
//   success: (data: T) => { type: string; payload: T };
//   failure: (error: Error) => { type: string; payload: Error };
// }

export interface ApiHooks<T = any> {
  onRequest?: () => void;
  onSuccess?: (data: T) => void;
  onFailure?: (error: Error) => void;
}
