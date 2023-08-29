import { APIGatewayProxyHandler } from 'aws-lambda'

export async function GET (event: APIGatewayProxyHandler) {
  console.log(`EVENT: ${JSON.stringify(event)}`)

  return new Response('Hello, CRIB! via AWSLambda!', {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': '*'
    }
  })
}
