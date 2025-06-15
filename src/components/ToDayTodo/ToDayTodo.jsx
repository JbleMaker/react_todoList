/**@jsxImportSource @emotion/react */
import * as s from "./styles";
import { motion } from "motion/react";

const detailTodoVariants = {
  basic: {
    opacity: 0,
    x: 0,
  },
  start: {
    opacity: 1,
    x: 50,
  },
  end: {
    opacity: 0,
    x: -50,
  },
};

function ToDayTodo(props) {
  return (
    <>
      <motion.div
        div
        css={s.detailSchedule}
        variants={detailTodoVariants}
        initial="basic"
        animate="start"
        exit="end"></motion.div>
    </>
  );
}

export default ToDayTodo;
