import { Router } from 'express';
import mapsRouter from './external/maps.routes';
import getAdressesRouter from './get_adresses.routes';

const routes = Router();

routes.use('/maps', mapsRouter);
routes.use('/get-adresses', getAdressesRouter);

export default routes;
