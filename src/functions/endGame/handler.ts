import { formatJSONResponse } from '../../libs/api-gateway';
export const endGame = async (event) => {
  return formatJSONResponse(
    200,
    {
      message: 'See you 👋',
      event
    }
  );
};