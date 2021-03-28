import { Router } from 'express';
import { container } from 'tsyringe';

import GetAdressesService from '../services/GetAdressesService';

const getAdressesRouter = Router();
let service = container.resolve(GetAdressesService);

getAdressesRouter.post('/', async (request, response) => {
  try {
    
    if(!request.body.length) return response.status(400).json({Error: 'Invalid shape body'});

    let order: any = request.query.order ? request.query.order: null;    
    let response_service = await service.execute(request.body, order);

    return response.status(response_service.code).json(response_service.data);
  } catch (error) {
    console.error(error);
  }
});

export default getAdressesRouter;
