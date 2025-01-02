import React from "react";
import { intervalToDuration, format, addMinutes } from 'date-fns';

import styles from "./ticket-segment.module.scss";

function declensionOfNumerals(number, titles) {
  const cases = [2, 0, 1, 1, 1, 2];
  return titles[
    number % 100 > 4 && number % 100 < 20
      ? 2
      : cases[number % 10 < 5 ? number % 10 : 5]
  ];
}

export default function TicketSegment({
  id,
  origin,
  destination,
  date,
  duration,
  stops,
}) {
  // Формирование данных для отображения
  // Формирование маршрута
  const route = `${origin} - ${destination}`;

  // Формирование данных о количестве пересадок
  const stopsCount = stops?.length || 0;
  const stopsCountText = `${stopsCount || "Без"} ${declensionOfNumerals(
    stopsCount,
    ["пересадка", "пересадки", "пересадок"],
  )}`;

  // Формирование данных о городах пересадок
  const stopsCities = stops?.join(", ") || "";

  // Форматирование продолжительности перелета
  const durationObj = intervalToDuration({ start: 0, end: duration * 60000 });
  const formattedDuration = `${durationObj.hours}ч ${durationObj.minutes}м`;

  // Форматирование времени вылета
  const departureTime = new Date(date);
  const formattedDepartureTime = format(departureTime, "HH:mm");

  // Вычисление времени прибытия и его форматирование
  const arrivalTime = addMinutes(departureTime, duration);
  const formattedArrivalTime = format(arrivalTime, "HH:mm");

  return (
    <li key={id} className={styles.segment}>
      <span className={styles.segment__route}>{route}</span>
      <span className={styles["segment__duration-title"]}>В ПУТИ</span>
      <span className={styles["segment__stops-count"]}>{stopsCountText}</span>
      <span className={styles.segment__time}>
        {formattedDepartureTime} - {formattedArrivalTime}
      </span>
      <span className={styles.segment__duration}>{formattedDuration}</span>
      <span className={styles["segment__stops-cities"]}>{stopsCities}</span>
    </li>
  );
}
