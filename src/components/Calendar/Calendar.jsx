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
import { AnimatePresence, motion } from "motion/react";
import ToDay from "../ToDay/ToDay";
import ToDayTodo from "../ToDayTodo/ToDayTodo";
import Header from "../Header/Header";

function Calendar(props) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(currentDate);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);
  const weeks = ["일", "월", "화", "수", "목", "금", "토"];

  const [showing, setShowing] = useState(false);
  const [clickDate, setClickDate] = useState("");

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
      <motion.div css={s.containerCalendar}>
        <Header currentDate={currentDate} />

        <nav css={s.weeks}>
          {weeks.map((week, index) => (
            <span key={index}>{week}</span>
          ))}
        </nav>

        <div css={s.dates}>
          {createMonth.map((day) => (
            <ToDay
              key={format(day, "yyyyMMdd")}
              day={day}
              setShowing={setShowing}
            />
          ))}
        </div>
      </motion.div>
      <AnimatePresence>{showing ? <ToDayTodo /> : null}</AnimatePresence>
    </div>
  );
}

export default Calendar;
