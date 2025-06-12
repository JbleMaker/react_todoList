/**@jsxImportSource @emotion/react */
import {
  addDays,
  differenceInCalendarDays,
  endOfMonth,
  endOfWeek,
  format,
  startOfMonth,
  startOfWeek,
} from "date-fns";
import * as s from "./styles";
import { useMemo, useState } from "react";
import { motion } from "motion/react";

function Calendar(props) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(currentDate);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);
  const weeks = ["일", "월", "화", "수", "목", "금", "토"];

  const createMonth = useMemo(() => {
    const monthArray = [];
    let day = startDate;
    while (differenceInCalendarDays(endDate, day) >= 0) {
      monthArray.push(day);
      day = addDays(day, 1);
    }
    return monthArray;
  }, [startDate, endDate]);

  return (
    <div css={s.container}>
      <header css={s.header}>
        <div>
          <span>{format(currentDate, "M월")}</span>
          <span>{format(currentDate, " d일")}</span>
        </div>
        <div>
          <span>{format(currentDate, "yyyy년")}</span>
        </div>
      </header>

      <nav css={s.weeks}>
        {weeks.map((week, index) => (
          <span key={index}>{week}</span>
        ))}
      </nav>
      <div css={s.dates}>
        {createMonth.map((n, i) => {
          const today =
            format(new Date(), "yyyyMMdd") === format(n, "yyyyMMdd");

          return (
            <motion.span
              key={i}
              css={s.date(!!today)}
              whileHover={{ scale: 1.2, border: 2 }}>
              {format(n, "d")}
            </motion.span>
          );
        })}
      </div>
    </div>
  );
}

export default Calendar;
