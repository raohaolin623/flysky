import styled from 'styled-components'

const Flex = {
  Row: styled.div`
    display: flex;
    align-items: center;
  `,
  Col: styled.div`
    display: flex;
    flex-direction: column;
  `,
}

const Card = styled.div`
  background: #191919;
  border-radius: 20px;
  box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.1);
  // padding: 42px;
  padding: 24px;
  @media (max-width: 500px) {
    padding: 16px !important;
  }
`

const Title1 = styled.div`
  font-size: 19px;
  font-weight: 700;
  text-align: left;
  color: #ffffff;
  @media (max-width: 500px) {
    font-size: 21px !important;
  }
`

const Title1Thin = styled.div`
  font-size: 18px;
  font-weight: 400;
  text-align: left;
  color: #ffffff;
  @media (max-width: 500px) {
    font-size: 20px !important;
  }
`

const NormalText = styled.div`
  font-size: 14px;
  font-weight: 400;
  line-height: 1.3;
  // color: #ffffff;
  color: #dbdbdb;
`

const LinkText = styled.div`
  font-size: 14px;
  font-weight: 400;
  color: #008d3e;
  @media (max-width: 500px) {
    font-size: 12px !important;
  }
`

const NumTextH1 = styled.div`
  font-size: 24px;
  font-weight: 700;
  color: #008d3e;
  @media (max-width: 500px) {
    font-size: 21px !important;
  }
`
const NumTextH2 = styled.div`
  font-size: 23px;
  font-weight: 700;
  color: #008d3e;
  @media (max-width: 500px) {
    font-size: 20px !important;
  }
`

const VerLine = styled.div`
  width: 1px;
  background-color: #333333;
  transform: scale(0.6, 1);
`
const Line = styled.div`
  height: 1px;
  background-color: #333333;
  // transform: scale(0.95, 1);
`

const Btn = styled.div`
  display: inline-block;
  padding: 6px 12px;
  background: #008d3e;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 400;
  color: #ffdb64;
  cursor: pointer;
`

export { Flex, Card, Title1, Title1Thin, NormalText, LinkText, NumTextH1, NumTextH2, Line, VerLine, Btn }
