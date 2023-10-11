import { INestApplication } from '@nestjs/common';

export const setupApp = (app: INestApplication) => {
  app.setGlobalPrefix('api/v1');
};
