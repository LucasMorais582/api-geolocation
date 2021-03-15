import { Router } from 'express';
import getAdressesRouter from './get_adresses.routes';

const routes = Router();

routes.use('/get-adresses', getAdressesRouter);

export default routes;
