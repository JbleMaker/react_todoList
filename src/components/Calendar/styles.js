import { css } from "styled-components";

export const container = css`
  display: flex;
  flex-direction: column;
  margin: auto;
  margin-top: 5rem;
  width: 60%;
  height: 90vh;
`;

export const header = css`
  display: flex;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
  border-radius: 0.5rem;
  padding: 2rem 5rem;
  height: 8rem;
  background-color: #f8c275;
  color: #fff;
  & > div > span:first-child {
    font-size: 3rem;
    font-weight: 800;
  }
  & > div > span:last-child {
    font-size: 2.5rem;
    margin-left: 1rem;
    font-weight: 600;
  }
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

export const date = (today) => {
  console.log(today);
  return css`
    border-radius: 0.5rem;
    padding: 1.5rem 0 0 1.5rem;
    ${today ? "background-color: #d66f5c;" : "background-color: #f8c275;"}
    border: 0.1rem solid #ffffff;
  `;
};
