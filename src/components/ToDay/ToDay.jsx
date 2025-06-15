/**@jsxImportSource @emotion/react */
import { format } from "date-fns";
import * as s from "./styles";
import { motion } from "motion/react";

function ToDay({ day, setShowing }) {
  const handleShowing = (e) => {
    setShowing((prev) => !prev);
    console.log(e);
  };

  const today = format(new Date(), "yyyyMMdd") === format(day, "yyyyMMdd");

  return (
    <motion.span
      css={s.date(!!today)}
      whileHover={{ scale: 1.2, border: 2 }}
      onClick={handleShowing}>
      {format(day, "d")}
    </motion.span>
  );
}

export default ToDay;
