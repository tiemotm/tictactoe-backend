import { formatJSONResponse } from '../../libs/api-gateway';
export const startGame = async (event) => {
  if(event.queryStringParameters?.gameId) {
    console.log('join game');
  } else {
    console.log('new game');
  }
  return formatJSONResponse(
    200,
    {
      message: 'Howdy 🚀',
      event
    }
  );
};