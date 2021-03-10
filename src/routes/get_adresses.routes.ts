import { Router } from 'express';
import { container } from 'tsyringe';

import GetAdressesService from '../services/GetAdressesService';


const getAdressesRouter = Router();
let service = container.resolve(GetAdressesService);

getAdressesRouter.post('/', async (request, response) => {
  try {
    
    let teste = service.execute(request.body);
    
    
    return response.json(teste);
  } catch (error) {
    console.error(error);
  }
});

export default getAdressesRouter;
