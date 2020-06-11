import AxiosService from "./AxiosService";
import enviroment from "../enviroments";
import Geolocation, { GeoPosition } from 'react-native-geolocation-service';
import { isIos } from "../constants/device";
import { PermissionsAndroid } from "react-native";

export const getCities = async ({
  cityName,
}: {
  cityName: string;
}): Promise<string[]> => {
  const instance = AxiosService.createAxiosInstance();
  const response = await instance.get(`${enviroment.GOOGLE_API_URL}/place/autocomplete/json`, {
    params: {
      key: enviroment.GOOGLE_API_KEY,
      input: cityName,
      type: '(cities)',
      language: 'pt-BR',
      components: 'country:br'
    }
  });
  return response.data.predictions.map((item: { description: string; }) => item.description)
};

export const getCeps = async ({
  cep,
}: {
  cep: string;
}): Promise<string[]> => {
  const instance = AxiosService.createAxiosInstance();
  const response = await instance.get(`${enviroment.GOOGLE_API_URL}/geocode/json`, {
    params: {
      key: enviroment.GOOGLE_API_KEY,
      address: cep,
      // types: 'postal_code',
      language: 'pt-BR',
      // components: 'country:br'
    }
  });
  return response.data.predictions.map((item: { description: string; }) => item.description)
};

export const getLocationByLatLong = async ({
  latitude,
  longitude,
}: {
  latitude: number;
  longitude: number;
}): Promise<{
  uf: string;
  cep: string;
  neighbourhood: string;
  city: string;
}> => {
  const instance = AxiosService.createAxiosInstance();
  const response = await instance.get(`${enviroment.GOOGLE_API_URL}/geocode/json`, {
    params: {
      key: enviroment.GOOGLE_API_KEY,
      // latlng: `${latitude},${longitude}`,
      latlng: `-20.352627,-40.289101`,
      language: 'pt-BR',
    }
  });
  const address_components = response.data.results[0].address_components
  return {
    uf: address_components.filter((item: any) => item.types.includes('administrative_area_level_1'))[0].short_name,
    city: address_components.filter((item: any) => item.types.includes('administrative_area_level_2'))[0].short_name,
    cep: address_components.filter((item: any) => item.types.includes('postal_code'))[0].long_name,
    neighbourhood: address_components.filter((item: any) => item.types.includes('sublocality_level_1'))[0].long_name,
  }
};

export const getLatAndLong = (): Promise<{ latitude: number; longitude: number }> => {
  return new Promise((resolve, reject) => {
    Geolocation.requestAuthorization()
    PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    ).then(() => {
      Geolocation.getCurrentPosition((geoPosition: GeoPosition) => {
        resolve({
          latitude: geoPosition.coords.latitude,
          longitude: geoPosition.coords.longitude,
        })
      }, (error) => {
        console.log(error)
        reject(error.message)
      })

    }).catch(error => {
      console.log(error)
      reject(error.message)
    });
  })
}

export default {
  getCities,
  getCeps,
  getLocationByLatLong,
  getLatAndLong
};
