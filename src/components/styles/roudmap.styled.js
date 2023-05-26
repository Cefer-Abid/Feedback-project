import styled from "styled-components";

export const StyleRoudmapContainer = styled.div`
  width: 1110px;
  margin: 80px auto;

  display: flex;
  flex-direction: column;
  gap: 48px;

  .roudmap--header__btn-div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    user-select: none;
    cursor: pointer;
    background-color: #373f68;
    border-radius: 10px;
    padding: 27px;
  }

  .go-back {
    font-family: "Jost";
    font-weight: 700;
    font-size: 14px;
    line-height: 20px;
    color: #647196;
  }

  .roadmap--logo {
    font-family: "Jost";
    font-weight: 700;
    font-size: 24px;
    line-height: 35px;
    letter-spacing: -0.333333px;
    color: #ffffff;
    padding-left: 16px;
  }

  .roadmap__btn--feedback {
    cursor: pointer;
    border-radius: 6px;
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
  }

  /*  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~  Roadmap Content  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */

  .roudmap--container__content {
    display: flex;
    gap: 30px;
    background-color: transparent;
  }

  .content--status-div {
    width: 350px;
    display: flex;
    flex-direction: column;
    gap: 32px;
  }

  .roadmap__content--title-div {
    display: flex;
    flex-direction: column;
    /* gap: ; */
  }

  .title--status-name {
    font-family: "Jost";
    font-weight: 700;
    font-size: 18px;
    line-height: 26px;
    letter-spacing: -0.25px;
    color: #3a4374;
  }

  .title--status-span {
    font-family: "Jost";
    font-weight: 400;
    font-size: 16px;
    line-height: 23px;
    color: #647196;
  }

  .roadmap__content--cards-div {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  .card {
    width: 100%;
    background: #ffffff;
    border-radius: 5px;
    padding: 32px;

    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .card-for-planned {
    border-top: 6px solid #f49f85;
  }
  .card-for-in-progress {
    border-top: 6px solid #ad1fea;
  }
  .card-for-live {
    border-top: 6px solid #62bcfa;
  }

  .card--text-field {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .card--text-div {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .status--name {
    font-family: "Jost";
    font-weight: 400;
    font-size: 16px;
    line-height: 23px;
    color: #647196;
  }

  .card--text-title {
    font-family: "Jost";
    font-weight: 700;
    font-size: 18px;
    line-height: 26px;
    letter-spacing: -0.25px;
    color: #3a4374;
  }

  .card--text {
    font-family: "Jost";
    font-weight: 400;
    font-size: 16px;
    line-height: 23px;
    color: #647196;
  }

  .card--footer {
    display: flex;
    justify-content: space-between;
  }

  .upvotes-info {
    display: flex;
    gap: 6px;
    align-items: center;
    background: #f2f4fe;
    border-radius: 10px;
    padding: 10px 15px;
  }

  .card--footer-arrow {
    display: flex;
    margin-top: -3px;
  }

  .upvotes-num {
    font-family: "Jost";
    font-weight: 700;
    font-size: 13px;
    line-height: 19px;
    text-align: center;
    letter-spacing: -0.180556px;
    color: #3a4374;
  }
`;
