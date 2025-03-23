import { Container } from 'inversify';
import { ResourceHandlerService } from '../service/server/resource-handler.service';
import { DI_TYPES } from './di.types';

const container = new Container({
  defaultScope: 'Singleton',
});

container
  .bind<ResourceHandlerService>(DI_TYPES.RestClientHandlerService)
  .to(ResourceHandlerService);

export default container;
