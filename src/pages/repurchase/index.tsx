import React from 'react'
import styled from 'styled-components'
import Page from 'components/layout/Page'
import { Flex, Card, Title1, Title1Thin, NormalText, LinkText, NumTextH1, NumTextH2, VerLine, Btn } from '../components'

export default function () {
  return (
    <Page>
      <Card>
        <Flex.Row style={{ justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap' }}>
          <div style={{ marginBottom: '16px' }}>
            <Title1Thin>SLK Repurchase</Title1Thin>
            <NormalText style={{ margin: '24px 0 19px 0' }}>
              All fee income will be used to buy back SLK tokens, 50% of the SLK bought back will be burned, and 50%
              will be used for rewards
            </NormalText>
          </div>
        </Flex.Row>
      </Card>
      <Flex.Row style={{ justifyContent: 'space-between', flexWrap: 'wrap', margin: '48px 0 50px 0' }}>
        <Card style={{ marginBottom: '16px' }}>
          <Title1Thin style={{ marginBottom: '44px' }}>Fees</Title1Thin>
          <Flex.Row style={{ justifyContent: 'space-between', alignItems: 'stretch', flexWrap: 'wrap' }}>
            <Flex.Col style={{ alignItems: 'flex-start' }}>
              <NumTextH2>$100</NumTextH2>
              <NormalText style={{ marginTop: '12px' }}>Transaction Fees</NormalText>
            </Flex.Col>

            <D2b style={{ alignItems: 'flex-end', margin: '0 18px' }}>
              <NumTextH2>$1.00</NumTextH2>
              <NormalText style={{ marginTop: '12px' }}>Redeem Fees</NormalText>
            </D2b>

            <D2a />

            <D2c style={{ alignItems: 'flex-start', margin: '0 18px' }}>
              <NumTextH2>$50</NumTextH2>
              <NormalText style={{ marginTop: '12px' }}>Current balance</NormalText>
            </D2c>

            <Flex.Col style={{ alignItems: 'flex-end' }}>
              <NumTextH2>$51</NumTextH2>
              <NormalText style={{ marginTop: '12px' }}> Consumption fee </NormalText>
            </Flex.Col>
          </Flex.Row>
        </Card>
        <D1>
          <Title1Thin style={{ marginBottom: '44px' }}>SLK Repurchase</Title1Thin>
          <Flex.Row style={{ justifyContent: 'space-between', alignItems: 'stretch' }}>
            <Flex.Col style={{ alignItems: 'flex-start' }}>
              <NumTextH2>100.000000</NumTextH2>
              <NormalText style={{ marginTop: '16px' }}>Cumulative repurchase</NormalText>
            </Flex.Col>

            <Flex.Col style={{ alignItems: 'flex-end', margin: '0 18px' }}>
              <NumTextH2>37.000000</NumTextH2>
              <NormalText style={{ marginTop: '16px' }}>Amount burned</NormalText>
            </Flex.Col>
          </Flex.Row>
        </D1>
      </Flex.Row>
      <Title1Thin style={{ marginBottom: '42px' }}>Repurchase history</Title1Thin>
      <Card>
        <D3z style={{ justifyContent: 'space-between' }}>
          <D3a style={{ alignItems: 'flex-start' }}>
            <NormalText>Time</NormalText>
            <LabelVal>2021-05-06</LabelVal>
          </D3a>
          <D3b style={{ alignItems: 'center' }}>
            <NormalText>Consumption fee</NormalText>
            <LabelVal>$51.00</LabelVal>
          </D3b>
          <D3c style={{ alignItems: 'center' }}>
            <NormalText>Repurchase amount</NormalText>
            <LabelVal>100.000000 SLK</LabelVal>
          </D3c>
          <D3d style={{ alignItems: 'center' }}>
            <NormalText>Amount burned</NormalText>
            <LabelVal>37.000000 SLK</LabelVal>
          </D3d>
          <D3e style={{ alignItems: 'flex-end' }}>
            <NormalText>Total reserves</NormalText>
            <LabelVal>63.000000 SLK</LabelVal>
          </D3e>
        </D3z>
      </Card>
    </Page>
  )
}

const LabelVal = ({ children }) => {
  return <LabelValSty style={{ color: '#999999', marginTop: '32px' }}>{children}</LabelValSty>
}

const LabelValSty = styled(NormalText)`
  color: #999999;
  margin-top: 20px;
  @media (max-width: 500px) {
    margin-top: 16px !important;
  }
`

const InnerCard = styled.div`
  width: 321px;
  padding: 27px 33px;
  background: #222222;
  border-radius: 6px;
  box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.1);
`

const Round = styled.div`
  border: 1px solid #999999;
  width: 22px;
  height: 22px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  font-size: 16px;
`

const D1 = styled(Card)`
  margin-bottom: 16px;
  @media (max-width: 500px) {
    width: 100% !important;
  }
`

const D2a = styled(VerLine)`
  @media (max-width: 500px) {
    display: none !important;
  }
`

const D2b = styled(Flex.Col)`
  @media (max-width: 500px) {
    margin: 0 0 26px 75px !important;
  }
`

const D2c = styled(Flex.Col)`
  @media (max-width: 500px) {
    margin: 0 65px 26px 0 !important;
  }
`

const D3z = styled(Flex.Row)`
  @media (max-width: 500px) {
    flex-wrap: wrap !important;
  }
`
const D3a = styled(Flex.Col)`
  @media (max-width: 500px) {
    margin: 0 100px 32px 0 !important;
  }
`

const D3b = styled(Flex.Col)`
  @media (max-width: 500px) {
    align-items: flex-end !important;
    margin-bottom: 32px !important;
  }
`
const D3c = styled(Flex.Col)`
  @media (max-width: 500px) {
    align-items: flex-start !important;
    margin: 0 60px 32px 0 !important;
  }
`

const D3d = styled(Flex.Col)`
  @media (max-width: 500px) {
    align-items: flex-end !important;
    margin-bottom: 32px !important;
  }
`

const D3e = styled(Flex.Col)`
  @media (max-width: 500px) {
    align-items: flex-start !important;
    margin: 0 60px 32px 0 !important;
  }
`
