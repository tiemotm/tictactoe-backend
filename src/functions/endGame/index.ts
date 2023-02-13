import { handlerPath } from '@libs/handler-resolver';

export default {
  handler: `${handlerPath(__dirname)}/handler.endGame`,
  events: [
    {
      websocket: {
        route: '$disconnect',
        routeResponseSelectionExpression: '$default' as const,
      },
    },
  ],
};
