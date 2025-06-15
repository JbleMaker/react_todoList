/**@jsxImportSource @emotion/react */
import { format } from "date-fns";
import * as s from "./styles";

function Header({ currentDate }) {
  return (
    <>
      <header css={s.header}>
        <div>
          <span>{format(currentDate, "M월")}</span>
          <span>{format(currentDate, " d일")}</span>
        </div>
        <div>
          <span>{format(currentDate, "yyyy년")}</span>
        </div>
      </header>
    </>
  );
}

export default Header;
