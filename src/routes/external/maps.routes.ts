import { Router } from 'express';
import axios from 'axios';
import Dotenv from 'dotenv';
import { container } from 'tsyringe';

import RouteMapsService from '../../services/RouteMapsService';

Dotenv.config();

const mapsRouter = Router();
const key = process.env.API_GOOGLE_KEY;
let service = container.resolve(RouteMapsService);

mapsRouter.get('/', async (request, response) => {
  try {
    
    service.execute();
    /* 
      Formatação da url buscadora de endereço: 
      Sempre em escala especializadora, ou seja, País --> Estado --> Munícipio --> Bairo --> Rua
      Sempre separados com +
    */

    const routes  = await axios.get(
      `https://maps.googleapis.com/maps/api/directions/json?origin=Rio+de+Janeiro+Taquara,+Correio+do+Povo+59
      &destination=Rio+de+Janeiro+Lins+de+Vasconcelos,+Rua+mar+de+espanha+193&key=${key}`);

    return response.json(routes.data);
  } catch (error) {
    console.error(error);
  }
});

export default mapsRouter;
