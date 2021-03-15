import { Router } from 'express';
import { container } from 'tsyringe';

import GetAdressesService from '../services/GetAdressesService';


const getAdressesRouter = Router();
let service = container.resolve(GetAdressesService);

getAdressesRouter.post('/', async (request, response) => {
  try {
    
    let order = request.query.order;
    let response_service = await service.execute(request.body, order);
    
    return response.json(response_service);
  } catch (error) {
    console.error(error);
  }
});

export default getAdressesRouter;
