import { handlerPath } from '@libs/handler-resolver';

export default {
  handler: `${handlerPath(__dirname)}/handler.startGame`,
  events: [
    {
      websocket: {
        route: '$connect',
        routeResponseSelectionExpression: '$default' as const,
      },
    },
  ],
};
