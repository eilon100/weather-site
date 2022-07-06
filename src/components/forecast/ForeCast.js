import "./_forecast.scss";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import ForeCastComponent from "./ForeCastComponent";
import { Pagination } from "swiper";
import React from "react";
import { UTCtimeFunction } from "../../utils/utils";

function ForeCast(props) {
  const forecastData = props.forecastData;

  return (
    <div className="forecast_container">
      <Swiper
        slidesPerView={2}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 4,
          },
          1352: {
            slidesPerView: 4,
          },
          1500: {
            slidesPerView: 8,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {forecastData?.data.list.slice(0, 8).map((data, index) => {
          return (
            <SwiperSlide key={index}>
              <ForeCastComponent
                date={
                  UTCtimeFunction(
                    data.dt,
                    forecastData?.data.city.timezone,
                    "date"
                  ) +
                  "." +
                  UTCtimeFunction(
                    data.dt,
                    forecastData?.data.city.timezone,
                    "month"
                  )
                }
                time={
                  UTCtimeFunction(
                    data.dt,
                    forecastData?.data.city.timezone,
                    "hour"
                  ) + ":00"
                }
                degree={data.main.temp.toFixed()}
                icon={data.weather[0].icon}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}

export default ForeCast;
