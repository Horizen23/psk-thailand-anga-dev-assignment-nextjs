import { API_CONFIG } from "@/config/api-config"
import APIRequest, { HTTPMethod } from "@/manager/APIRequest"

class WeatherAPIRequest implements APIRequest {
  method: HTTPMethod = HTTPMethod.GET
  url: string = `${API_CONFIG.WEATHER_API}/current.json`
  constructor(private lat:number | null = null, private log:number | null = null){
  }

  makeQuery() {
    return {
      "q":`${this.lat},${this.log}`,
    }
  }
  makeHeader() {
    return {
      "x-rapidapi-host":API_CONFIG.WEATHER_X_RAPIDAPI_HOST,
      "x-rapidapi-key":API_CONFIG.WEATHER_X_RAPIDAPI_KEY,
    }
  }
  next() {
    return {
      revalidate: (60 * 60) * 24,
      tags: ['all']
    }
  }
  makeBody() {
    return {}
  }
}

export default WeatherAPIRequest 