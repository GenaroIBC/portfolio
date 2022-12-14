import styled from "styled-components";
import { useTranslation } from "react-i18next";

const COMMON_STYLES = `
  box-sizing: content-box;
  font-family: monospace;
  white-space: nowrap;
  overflow: hidden;
  margin: 0 auto;

  border-right: 7px solid transparent;
  border-left: 7px solid transparent;

  line-height: 1;
`;

const STSubHeading = styled.h2`
  ${COMMON_STYLES}
  width: 22ch;

  animation: typingWord 2.5s steps(22), lineBlink 0.25s 10 step-end;
  animation-fill-mode: backwards;
  animation-delay: 3.5s;

  font-size: 6vw;

  color: #fff9;

  &::after,
  &::before {
    color: var(--complement-color);
  }

  &::before {
    content: "<";
    padding-right: 0.2rem;
  }

  &::after {
    content: "/>";
    padding-left: 0.4rem;
  }

  @media screen and (min-width: 1400px) {
    font-size: 5rem;
  }
`;

const STHeading = styled.h1`
  ${COMMON_STYLES}
  max-width: 1400px;
  width: 15ch;

  border-right-width: 15px;
  border-left-width: 15px;

  margin-bottom: 0.8rem;

  font-size: 9vw;

  animation: typingWord 3.5s steps(15), lineBlink 0.23s 16 step-end;

  @media screen and (min-width: 1400px) {
    font-size: 8rem;
  }
`;

const STDownloadCVArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    padding: 1rem 3rem;
    margin: 5rem auto;

    background-color: var(--terciary-color);
    border-radius: 10px;

    transition: background-color 0.3s ease-out;

    font-size: 1.2rem;

    &:hover {
      background-color: var(--complement-color);
    }
  }
`;

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section id="hero">
      <STHeading>Genaro Bonavita</STHeading>
      <STSubHeading>{t("HERO_SECT.SUBTITLE")}</STSubHeading>

      <STDownloadCVArea>
        <a href="/CV.pdf" target="_blank" download="Genaro Bonavita CV">
          {t("HERO_SECT.DOWNLOAD_DV")}
        </a>
      </STDownloadCVArea>
    </section>
  );
}
