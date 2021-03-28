import 'reflect-metadata';

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
  
  public async execute(object_body: adress[], order: string | null): Promise<any>{
    try{
      let adresses: Object[] | any = this.get_adresses_repository.concatAdressForRequest(object_body);
      if(adresses.code === 500)  return { code: adresses.code, data: adresses.data };

      let adresses_combined: any = this.get_adresses_repository.combineAdressesForRequest(adresses);
      if(adresses_combined.code === 500)  return { code: adresses_combined.code, data: adresses_combined.data };

      let google_api_data: Object[] | any = [];
      google_api_data = await this.route_maps_repository.getInformationsFromGoogle(adresses_combined);
      if (google_api_data.code === 500) return { code: google_api_data.code, data: google_api_data.data };

      let response_data: Object | any = this.get_adresses_repository.orderAdresses(google_api_data, order ? order: 'ASC');
      if (response_data.code === 500) return { code: response_data.code, data: response_data.data };

      return { code: 200, data: response_data };
    } catch(error){
      return { code: 500, data: error};
    }
  }
}

export default GetAdressesService;