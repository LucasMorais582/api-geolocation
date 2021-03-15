import GetAdressesRepository from '../repositories/GetAdressesRepository';
import RouteMapsRepository from '../repositories/RouteMapsRepository';

import { injectable } from 'tsyringe';

interface adress{
  country?: string | null;
  state?: string | null;
  district?: string | null;
  street: string;
  number: string;
}

@injectable()
class GetAdressesService{
  
  constructor(
    private get_adresses_repository: GetAdressesRepository,
    private route_maps_repository: RouteMapsRepository,
  ) {}
  
  public async execute(object_body: adress[], order: string | any): Promise<any>{
    try{
      let adresses = this.get_adresses_repository.concatAdressForRequest(object_body);
      let adresses_combined: any[] = this.get_adresses_repository.combineAdressesForRequest(adresses);
      let response_google_api: Object[] = [];
      let google_api_data: Object;

      // TO DO: Colocar o for no repository
      for(let count = 0; count < adresses_combined.length; count++){
        google_api_data = await this.route_maps_repository.getInformationsFromGoogle(adresses_combined[count]);
        response_google_api.push(google_api_data);
      }

      let teste = this.get_adresses_repository.orderAdresses(response_google_api, order);

      return teste;
    } catch(error){
      return console.error(error);

    }
  }
}

export default GetAdressesService;