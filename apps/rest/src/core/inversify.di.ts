import { Container } from 'inversify';
import { RestClientHandlerService } from '../service/rest-client-handler.service';
import { DI_TYPES } from './di.types';

const container = new Container({
    defaultScope: 'Singleton',
});

container
    .bind<RestClientHandlerService>(DI_TYPES.RestClientHandlerService)
    .to(RestClientHandlerService);

export default container;