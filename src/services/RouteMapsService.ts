import RouteMapsRepository from '../repositories/RouteMapsRepository';
import { injectable } from 'tsyringe';

@injectable()
class RouteMapsService{
  
  constructor(
    private route_maps_repository: RouteMapsRepository
  ) {}
  
  public execute(){
    
    let adresses = this.route_maps_repository.combineAdressesForRequest(
      ['Rio+de+Janeiro+Taquara,+Correio+do+Povo+59',
       'Rio+de+Janeiro+Taquara,+Estr+mapua+15',
       'Rio+de+Janeiro+Lins+de+Vasconcelos,+Rua+mar+de+espanha+193'
      ]);

    console.log(adresses);
  }
}

export default RouteMapsService;