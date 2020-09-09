import Person from '@shared/model/person';

export const groupPeopleByColor = (people: Person[], colors: string[]) =>
  Object.assign(
    {},
    ...colors.map((thisColor, index) => ({
      [`Group${index + 1}`]: Object.assign(
        {},
        ...people
          .filter(({ color }) => color === thisColor)
          .map(({ name, color }) => ({
            [name]: color,
          }))
      ),
    }))
  );
