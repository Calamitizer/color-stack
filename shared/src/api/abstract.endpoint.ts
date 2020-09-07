import ApiConfig from '@shared/config/api.config';

abstract class ApiEndpoint {
  readonly singular: string;
  readonly plural: string;
  readonly baseUri: string;

  readonly getAllSegment: string;

  constructor(singular: string, plural?: string) {
    this.singular = singular;
    this.plural = plural || `${this.singular}s`;
    this.baseUri = `${ApiConfig.BASE_URI}/${this.plural}`;

    this.getAllSegment = '';
  }

  getAll = (returnFullUri = false) =>
    this.maybeWrap(this.getAllSegment, returnFullUri);

  protected maybeWrap = (segment: string, shouldWrap: boolean) =>
    shouldWrap ? `${this.baseUri}/${segment}` : segment;
}

export default ApiEndpoint;
