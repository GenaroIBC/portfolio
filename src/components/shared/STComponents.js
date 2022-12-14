import styled, { css } from "styled-components";

export const STPicture = styled.picture`
  max-width: 500px;
  width: 100%;
  margin: 1rem auto;
  display: flex;
  justify-content: center;
`;

export const STSectionTitle = styled.h2`
  overflow: hidden;
  text-align: center;

  margin: 8rem 0 1rem;

  font-size: 3rem;
  line-height: normal;
  font-weight: 500;

  &:before,
  &:after {
    background-color: currentColor;
    content: "";
    display: inline-block;
    height: 1px;
    position: relative;
    vertical-align: middle;
    width: 50%;
  }

  &:before {
    right: 0.5em;
    margin-left: -50%;
  }

  &:after {
    left: 0.5em;
    margin-right: -50%;
  }
`;

export const STImg = styled.img`
  border-radius: 10px;
  object-fit: cover;
  box-shadow: 0px 5px 10px 5px #0005;

  width: 100%;

  max-width: 500px;
  min-width: 500px;

  display: block;

  ${({ rounded }) =>
    rounded &&
    css`
      border-radius: 50%;
      aspect-ratio: 1/1;
      width: 80%;
    `};
`;

export const STFlexCont = styled.div`
  width: 100%;

  margin: ${({ margin }) => margin ?? "1rem auto 0"};
  padding: ${({ padding }) => padding ?? "1rem"};

  display: flex;
  justify-content: space-evenly;
  flex-direction: ${({ smFlexDir }) => smFlexDir ?? "column"};
  gap: ${({ gap }) => gap ?? "unset"};

  border-radius: 5px;
  background-color: ${({ bgCol }) => bgCol ?? "var(--terciary-color)"};

  @media screen and (min-width: 1200px) {
    flex-direction: ${({ flexDir }) => flexDir ?? "initial"};
    justify-content: ${({ jusCont }) => jusCont ?? "initial"};
    align-items: ${({ alItems }) => alItems ?? "initial"};
    text-align: left;
    gap: 2rem;
  }
`;

export const STSubTitle = styled.h3`
  padding: ${({ padding }) => padding ?? "initial"};
  margin: ${({ margin }) => margin ?? "3rem auto"};

  font-size: ${({ fontSize }) => fontSize ?? "2rem"};
  text-align: ${({ textAlign }) => textAlign ?? "center"};

  font-weight: ${({ fontWeight }) => fontWeight ?? "500"};

  line-height: normal;
`;
