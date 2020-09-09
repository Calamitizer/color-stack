import Person from '@shared/model/person';

interface PersonResult {
  people: Person[];
  elapsedMs: number;
}

export default PersonResult;
