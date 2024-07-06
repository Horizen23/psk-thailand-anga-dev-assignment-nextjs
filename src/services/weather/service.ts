import APIManager from "@/manager/APIManager"
import WeatherAPIRequest from "./WeatherAPIRequest";
import { ModelWeather, toModelWeather } from "./WeatherAPIModel";




class WeatherService {

  private static instance: WeatherService;

  public static getInstance(): WeatherService {
    if (!WeatherService.instance) {
      WeatherService.instance = new WeatherService();
    }
    return WeatherService.instance;
  }

  getWeather(lat: number , lon: number): Promise<ModelWeather> {
    return new Promise(async (resolve, reject) => {
      try {
        const apiRequest = new WeatherAPIRequest(lat,lon)
        const response = await APIManager.fetch(apiRequest)
        resolve(toModelWeather(response.data))
      } catch (error) {
        reject(error)
      }
    })
  }


 
}

export default WeatherService.getInstance()