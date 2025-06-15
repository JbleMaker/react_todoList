import { css } from "@emotion/react";

export const container = css`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 5rem;
`;

export const containerCalendar = css`
  display: flex;
  flex-direction: column;
  width: 60%;
  height: 90vh;
`;

export const weeks = css`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  box-sizing: border-box;
  justify-content: space-between;
  border-radius: 0.5rem;
  margin-top: 0.5rem;
  padding: 2rem 0;
  font-size: 2rem;

  background-color: #f8c275;
  text-align: center;
  align-items: center;
`;

export const dates = css`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat() (5, 1fr);
  grid-gap: 0.3rem 0.3rem;
  margin-top: 0.5rem;
  width: 100%;
  height: 100vh;
  border-radius: 0.5rem;
  font-size: 2rem;
`;
