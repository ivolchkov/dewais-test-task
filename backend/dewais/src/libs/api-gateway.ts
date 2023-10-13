import type {
  APIGatewayProxyEvent,
  APIGatewayProxyResult,
  Handler,
} from 'aws-lambda';

type ValidatedAPIGatewayProxyEvent = Omit<APIGatewayProxyEvent, 'body'> & { body: string }
export type ValidatedEventAPIGatewayProxyEvent = Handler<ValidatedAPIGatewayProxyEvent, APIGatewayProxyResult>

export const formatJSONResponse = (response: Record<string, unknown>) => {
  return {
    statusCode: 200,
    body: JSON.stringify(response)
  }
}
