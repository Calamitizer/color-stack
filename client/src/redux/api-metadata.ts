export interface ApiMetadata {
  fetchTime: number | null; // ms
  loading: boolean;
  error: Error | null;
}

export const trivialApiMetadata = (): ApiMetadata => ({
  fetchTime: null,
  loading: false,
  error: null,
});

export const requestApiMetadata = (): ApiMetadata => ({
  fetchTime: null,
  loading: true,
  error: null,
});

export const successApiMetadata = (fetchTime: number): ApiMetadata => ({
  fetchTime,
  loading: false,
  error: null,
});

export const failureApiMetadata = (error: Error): ApiMetadata => ({
  fetchTime: null,
  loading: false,
  error,
});
