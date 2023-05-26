import styled from "styled-components";

export const AddFeedbackButton = styled.button`
  cursor: pointer;
  text-decoration: none;

  border-radius: 10px;
  border: none;
  outline: none;
  padding: 12px 25px;
  background: #ad1fea;
  transition: background 0.1s;

  font-family: "Jost";
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  color: #f2f4fe;

  &:hover {
    background: #c75af6;
  }
  &:active {
    background-color: #ad1fea;
  }
`;

export const CategoryButton = styled.button`
  text-transform: capitalize;
  font-family: "Jost";
  font-weight: 600;
  font-size: 13px;
  line-height: 19px;
  color: #4661e6;

  background-color: #f2f4ff;
  padding: 5px 16px;
  border: none;
  outline: none;
  border-radius: 6px;

  &:hover {
    background: #cfd7ff5e;
  }
  &:active {
    background-color: #f2f4ff;
  }
`;


