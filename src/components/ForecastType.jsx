import ForeCastItem from "./ForecastItem";

export default function ForecastType({ className, forecastTypeData }) {
  return (
    <div className={className}>
      {forecastTypeData.map((item, index) => {
        const { day, temp, imgUrl } = item;
        return (
          <ForeCastItem key={index} first={day} temp={temp} imgSrc={imgUrl} />
        );
      })}
    </div>
  );
}
