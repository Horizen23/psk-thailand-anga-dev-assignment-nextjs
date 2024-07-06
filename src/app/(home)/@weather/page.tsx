
import { services } from "@/services";
import Weather from "./conponent/Weather";
import LayoutContainer from "@/component/LayoutContainer";
import Description from "./conponent/Description";



export default async function WeatherPage() {
  // bangkok
  const weather = await services.WeatherService.getWeather(13.75, 100.52)

  return (
    <LayoutContainer >
      <Weather data={weather} />
      <Description/>
    </LayoutContainer>
  );
}

