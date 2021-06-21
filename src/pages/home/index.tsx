import React from 'react'
import styled from 'styled-components'
import Page from 'components/layout/Page'
import { Flex, Card, Title1, Title1Thin, NormalText, LinkText, NumTextH1, NumTextH2, VerLine, Btn } from '../components'

export default function () {
  return (
    <Page>
      <Title1 style={{ marginBottom: '24px' }}>SLK Repurchase</Title1>
      <Flex.Row style={{ flexWrap: 'wrap' }}>
        <D1a style={{ margin: '0 140px 90px 0' }}>SLK : 2.01 $</D1a>
        <D1b style={{ margin: '0 140px 90px 0' }}>Transactions(24H) : 199,990</D1b>
        <D2 style={{ margin: '0 140px 90px 0' }}>Pairs : 20,212</D2>
      </Flex.Row>
      <Title1>My data</Title1>
      <D3 style={{ justifyContent: 'space-between', flexWrap: 'nowrap', margin: '48px 0 50px 0' }}>
        <Card style={{ marginBottom: '16px', marginRight: '2px',}}>
          <Flex.Row style={{ justifyContent: 'space-between', alignItems: 'stretch' }}>
            <Flex.Col style={{ alignItems: 'flex-start' }}>
              <NormalText style={{ height: '52px' }}>SLK balance</NormalText>
              <NumTextH2 style={{ marginBottom: '16px' }}>100.000000 </NumTextH2>
              <NormalText style={{ color: '#999999' }}>Include Wallet and Equity pool</NormalText>
            </Flex.Col>
            <div style={{width: '6px'}} />
            <Flex.Col style={{ alignItems: 'flex-start' }}>
              <NormalText style={{ height: '52px' }}>Commission rate</NormalText>
              <NumTextH2 style={{ marginBottom: '16px' }}>0.3% </NumTextH2>
            </Flex.Col>
          </Flex.Row>
        </Card>
        <Card style={{ marginBottom: '16px', marginRight: '2px', padding: '24px' }}>
          <Flex.Row style={{ justifyContent: 'space-between', alignItems: 'center' }}>
            <Flex.Col style={{ alignItems: 'flex-start' }}>
              <NormalText style={{ height: '52px' }}>Farm & Staking & Airport</NormalText>
              <Flex.Row style={{ alignItems: 'flex-end', marginBottom: '16px' }}>
                <NumTextH2>9.010000 </NumTextH2>
                <NormalText style={{ color: '#008D3E', fontSize: '15px', position: 'relative', top: '-3px' }}>
                  SLK
                </NormalText>
              </Flex.Row>
              <NormalText style={{ color: '#999999', height: '32px' }}>Can be harvest</NormalText>
            </Flex.Col>
            <Flex.Col style={{ alignItems: 'flex-start' }}>
              {/* <NormalText style={{ marginBottom: '36px' }} /> */}
              <Btn style={{ marginBottom: '0' }}>Harvest</Btn>
              <NormalText style={{ color: '#999999' }} />
            </Flex.Col>
          </Flex.Row>
        </Card>
        <Card style={{ marginBottom: '16px', marginRight: '2px', padding: '24px' }}>
          <Flex.Row style={{ justifyContent: 'space-between', alignItems: 'flex-end' }}>
            <Flex.Col style={{ alignItems: 'flex-start' }}>
              <NormalText style={{ marginBottom: '36px' }}>Equity pool</NormalText>
              <NormalText style={{ marginBottom: '16px', color: '#999999' }}>current prices: SLK=1.5USDT </NormalText>
              <NumTextH2>0.000000</NumTextH2>
            </Flex.Col>

            <Flex.Col style={{ alignItems: 'flex-start' }}>
              <NormalText style={{ color: '#4D4D4D', marginBottom: '12px' }}>Equity factor</NormalText>
              <Btn>Approve</Btn>
            </Flex.Col>
          </Flex.Row>
        </Card>
      </D3>
      <div style={{height: '60px'}} />
    </Page>
  )
}

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

const D1 = styled(NormalText)`
  @media (max-width: 500px) {
    margin-bottom: 24px !important;
  }
`
const D1a = styled(NormalText)`
  @media (max-width: 500px) {
    margin-bottom: 24px !important;
    margin-top: 8px !important;
  }
`

const D1b = styled(NormalText)`
  @media (max-width: 500px) {
    margin-bottom: 24px !important;
    margin-right: 0 !important;
  }
`

const D2 = styled(NormalText)`
  @media (max-width: 500px) {
    margin-bottom: 46px !important;
  }
`
const D3 = styled(Flex.Row)`
  @media (max-width: 500px) {
    flex-wrap: wrap !important;
    flex-direction: column !important;
    align-items: stretch !important;
    margin-top: 32px !important;
  }
`
