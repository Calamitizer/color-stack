class ApiConfig {
  private constructor() {}

  static readonly API_VERSION = 1;
  static readonly BASE_URI = `api/v${ApiConfig.API_VERSION}`;
}

export default ApiConfig;
