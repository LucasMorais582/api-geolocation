import GetAdressesService from './GetAdressesService';
import GetAdressesRepository from '../repositories/GetAdressesRepository';
import RouteMapsRepository from '../repositories/RouteMapsRepository';


describe('GetAdresses', () => {
  it('should be able to calculate distance in between addresses in descending order', async () => {
    const getAdressesRepository = new GetAdressesRepository();
    const routeMapsRepository = new RouteMapsRepository();
    
    const getAdressesService = new GetAdressesService(getAdressesRepository, routeMapsRepository);

    let response_service = await getAdressesService.execute([
      {
        "country": "Brasil",
        "state": "Rio de Janeiro",
        "district": "Taquara",
        "street": "Rua correio do povo",
        "number": "59"
      },
      {
        "country": "Brasil",
        "state": "Rio de Janeiro",
        "district": "Lins de Vasconcelos",
        "street": "Rua mar de espanha",
        "number": "193"
      },
      {
        "country": "Brasil",
        "state": "Rio de Janeiro",
        "district": "Taquara",
        "street": "Estrada mapua",
        "number": "150"
      }
    ], 'DESC');

    expect(response_service[0].status).toContain("OK");
    expect(response_service[0].rows[0].elements[0].distance.value).toEqual(18923);
    expect(response_service).toHaveLength(3);
  });

  it('should be able to calculate distance in between addresses in ascending order', async () => {
    const getAdressesRepository = new GetAdressesRepository();
    const routeMapsRepository = new RouteMapsRepository();
    
    const getAdressesService = new GetAdressesService(getAdressesRepository, routeMapsRepository);

    let response_service = await getAdressesService.execute([
      {
        "country": "Brasil",
        "state": "Rio de Janeiro",
        "district": "Taquara",
        "street": "Rua correio do povo",
        "number": "59"
      },
      {
        "country": "Brasil",
        "state": "Rio de Janeiro",
        "district": "Lins de Vasconcelos",
        "street": "Rua mar de espanha",
        "number": "193"
      },
      {
        "country": "Brasil",
        "state": "Rio de Janeiro",
        "district": "Taquara",
        "street": "Estrada mapua",
        "number": "150"
      }
    ], 'ASC');

    expect(response_service[0].status).toContain("OK");
    expect(response_service[0].rows[0].elements[0].distance.value).toEqual(166);
    expect(response_service).toHaveLength(3);
  });
});