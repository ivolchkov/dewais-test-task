import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';

import { parse } from '../../services';

const parser: ValidatedEventAPIGatewayProxyEvent = async (event) => {
  try {
    const body = JSON.parse(event.body);
    const wordTypes = parse(body.text);

    return {
      statusCode: 200,
      body: JSON.stringify(wordTypes),
    };
  } catch (err: Error | unknown) {
    return {
      statusCode: 500,
      body: (err as Error).message || '',
    };
  }
};

export const main = middyfy(parser);