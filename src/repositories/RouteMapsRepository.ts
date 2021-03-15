import axios from 'axios';
import Dotenv from 'dotenv';

interface AdressUrl {
  destination: string;
  origin: string;
}

class RouteMapsRepository {

  public async getInformationsFromGoogle(adress: AdressUrl[]): Promise<any>{
    Dotenv.config();
    const key = process.env.API_GOOGLE_KEY;
    let response_google_api: Object[] = [];

    try {
      /* 
        Formatação da url buscadora de endereço: 
        Sempre em escala especializadora, ou seja, País --> Estado --> Munícipio --> Bairo --> Rua
        Sempre separados com +
      */
      
      // Url para geração da melhor rota entre origem e detino
      // const routes  = await axios.get(
      //   `https://maps.googleapis.com/maps/api/directions/json?origin=${adress.origin}&destination=
      //   ${adress.destination}&key=${key}`);
      

      for(let count = 0; count < adress.length; count++){
        // Cálculo da distância entre origem e destino
        const distance = await axios.get(`
          https://maps.googleapis.com/maps/api/distancematrix/json?origins=${adress[count].origin}&destinations=
          ${adress[count].destination}&mode=driving&language=en-EN&key=${key}`);
          response_google_api.push(distance.data);
      }

      return response_google_api;
    } catch (error) {
      return console.error(error);
    }
  }
}

export default RouteMapsRepository;