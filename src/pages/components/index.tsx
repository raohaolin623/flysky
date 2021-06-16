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
  padding: 42px;
`

const Title1 = styled.div`
  font-size: 30px;
  font-weight: 700;
  text-align: left;
  color: #ffffff;
`

const Title1Thin = styled.div`
  font-size: 29px;
  font-weight: 400;
  text-align: left;
  color: #ffffff;
`

const NormalText = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: #ffffff;
`

const LinkText = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: #008d3e;
`

const NumTextH1 = styled.div`
  font-size: 32px;
  font-weight: 700;
  color: #008d3e;
`
const NumTextH2 = styled.div`
  font-size: 30px;
  font-weight: 700;
  color: #008d3e;
`

const VerLine = styled.div`
  width: 1px;
  background-color: #333333;
  transform: scale(0.6, 1);
`

const Btn = styled.div`
  display: inline-block;
  padding: 9px 30px;
  background: #008d3e;
  border-radius: 6px;
  font-size: 16px;
  font-weight: 400;
  color: #ffdb64;
  cursor: pointer;
`

export { Flex, Card, Title1, Title1Thin, NormalText, LinkText, NumTextH1, NumTextH2, VerLine, Btn }
