export default function ForeCastItem({ first, imgSrc, temp }) {
  return (
    <div className="forecast-item">
      <p>{first}</p>
      <img src={imgSrc} alt="Cloudy" />
      <p>{temp}&#176;</p>
    </div>
  );
}
