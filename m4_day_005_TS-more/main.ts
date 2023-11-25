//----------Calculator------------------

enum OPERATION {
  SUM = 'sum',
  MULTI = 'multi',
  SUB = 'substract',
}

enum MESSAGE {
  INCORRECT_VALUE = 'Введите числовые значения для a и b',
  ENTER_CORRECT_VALUE = 'Введите корректное значение для operation',
  PROFILE_NOT_FOUND = 'Профиль не найден.',
  AN_ERROR_OCCURRED = 'Произошла ошибка!',
}

type Operation = OPERATION.SUM | OPERATION.MULTI | OPERATION.SUB;

function calc(operation: Operation, a: number, b: number): number | string {
  if (typeof a !== 'number' || typeof b !== 'number') {
    return MESSAGE.INCORRECT_VALUE;
  }

  switch (operation) {
    case OPERATION.SUM:
      return a + b;
    case OPERATION.MULTI:
      return a * b;
    case OPERATION.SUB:
      return a - b;
    default:
      return MESSAGE.ENTER_CORRECT_VALUE;
  }
}

const result = calc(OPERATION.SUM, 4, 5);
const result1 = calc(OPERATION.MULTI, 2, 5);
const result2 = calc(OPERATION.SUB, 10, 5);
console.log('result: ', result);
console.log('result1: ', result1);
console.log('result2: ', result2);

//----------Get Actor from Movie------------------

interface Movie {
  characters: string[];
}

interface Character {
  name: string;
  height: string;
  mass: string;
  birth_year: string;
  gender: string;
}

async function getMainActorProfileFromMovie(
  id: number
): Promise<Character | undefined> {
  try {
    const movieResponse = await fetch(`https://swapi.dev/api/films/${id}/`);
    const movie: Movie = await movieResponse.json();

    const characterUrl = movie.characters[0].split('//')[1];
    const characterResponse = await fetch(`https://${characterUrl}`);
    return characterResponse.json();
  } catch (err) {
    console.error(MESSAGE.AN_ERROR_OCCURRED, err);
    return undefined;
  }
}

getMainActorProfileFromMovie(1).then((profile) => {
  if (profile) {
    console.log(profile);
  } else {
    console.log(MESSAGE.PROFILE_NOT_FOUND);
  }
});
