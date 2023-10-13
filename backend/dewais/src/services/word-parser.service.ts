import { vocabularyMap } from '../util';
import { IWordTypeInterface } from '../interfaces';

export const parse = (input: string): IWordTypeInterface => {
  const words = input.split(' ');
  const wordTypes: IWordTypeInterface = {
    noun: 0,
    verb: 0,
    adjective: 0,
    adverb: 0,
    preposition: 0,
    conjunction: 0,
    pronoun: 0,
    interjection: 0,
    determiner: 0,
    numeral: 0
  };

  words.forEach((word) => {
    const type = vocabularyMap.get(word);

    if (type)
      wordTypes[type] += 1;
  });

  return wordTypes;
};