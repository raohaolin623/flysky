import React from 'react'
import styled from 'styled-components'
import Page from 'components/layout/Page'
import { Flex, Card, Title1, Title1Thin, NormalText, LinkText, NumTextH1, NumTextH2, VerLine, Btn } from '../components'

export default function () {
  return (
    <Page>
      <Title1 style={{ marginBottom: '24px' }}>SLK Repurchase</Title1>
      <Flex.Row style={{ flexWrap: 'wrap' }}>
        <NormalText style={{ margin: '0 140px 90px 0' }}>SLK : 2.01 $</NormalText>
        <NormalText style={{ margin: '0 140px 90px 0' }}>Transactions(24H) : 199,990</NormalText>
        <NormalText style={{ margin: '0 140px 90px 0' }}>Pairs : 20,212</NormalText>
      </Flex.Row>
      <Title1>My data</Title1>
      {/* <Flex.Row style={{ justifyContent: 'space-between', flexWrap: 'nowrap', margin: '48px 0 50px 0' }}>
        <Card style={{ marginBottom: '16px' }}>
          <Flex.Row style={{ justifyContent: 'space-between' }}>
            <NormalText style={{ marginBottom: '36px' }}>SLK balance</NormalText>
            <NormalText style={{ marginBottom: '36px' }}>Commission rate</NormalText>
          </Flex.Row>

          <Flex.Row style={{ justifyContent: 'space-between' }}>
            <NumTextH2 style={{ marginBottom: '16px', marginRight: '16px' }}>100.000000 </NumTextH2>
            <NumTextH2 style={{ marginBottom: '16px' }}>0.3% </NumTextH2>
          </Flex.Row>

          <NormalText style={{ color: '#999999' }}>Include Wallet and Equity pool</NormalText>
        </Card>
      </Flex.Row> */}

      <Flex.Row style={{ justifyContent: 'space-between', flexWrap: 'nowrap', margin: '48px 0 50px 0' }}>
        <Card style={{ marginBottom: '16px', marginRight: '4px' }}>
          <Flex.Row style={{ justifyContent: 'space-between', alignItems: 'stretch' }}>
            <Flex.Col style={{ alignItems: 'flex-start' }}>
              <NormalText style={{ marginBottom: '36px' }}>SLK balance</NormalText>
              <NumTextH2 style={{ marginBottom: '16px' }}>100.000000 </NumTextH2>
              <NormalText style={{ color: '#999999' }}>Include Wallet and Equity pool</NormalText>
            </Flex.Col>

            <Flex.Col style={{ alignItems: 'flex-start' }}>
              <NormalText style={{ marginBottom: '36px' }}>Commission rate</NormalText>
              <NumTextH2 style={{ marginBottom: '16px' }}>0.3% </NumTextH2>
            </Flex.Col>
          </Flex.Row>
        </Card>
        <Card style={{ marginBottom: '16px', marginRight: '4px' }}>
          <Flex.Row style={{ justifyContent: 'space-between', alignItems: 'center' }}>
            <Flex.Col style={{ alignItems: 'flex-start' }}>
              <NormalText style={{ marginBottom: '36px' }}>Farm & Staking & Airport</NormalText>
              <Flex.Row style={{ alignItems: 'flex-end', marginBottom: '16px' }}>
                <NumTextH2>9.010000 </NumTextH2>
                <NormalText style={{ color: '#008D3E', fontSize: '15px', position: 'relative', top: '-3px' }}>
                  SLK
                </NormalText>
              </Flex.Row>

              <NormalText style={{ color: '#999999' }}>Can be harvest</NormalText>
            </Flex.Col>
            <Btn>Harvest</Btn>
          </Flex.Row>
        </Card>
        <Card style={{ marginBottom: '16px', marginRight: '4px' }}>
          <Flex.Row style={{ justifyContent: 'space-between', alignItems: 'flex-end' }}>
            <Flex.Col style={{ alignItems: 'flex-start' }}>
              <NormalText style={{ marginBottom: '36px' }}>Equity pool</NormalText>
              <NormalText style={{ marginBottom: '16px', color: '#999999' }}>current prices: SLK=1.5USDT </NormalText>
              <NumTextH2>0.000000</NumTextH2>
            </Flex.Col>

            <Flex.Col style={{ alignItems: 'flex-start' }}>
              <NormalText style={{ color: '#4D4D4D', marginBottom: '36px' }}>Equity factor</NormalText>
              <Btn>Approve</Btn>
            </Flex.Col>
          </Flex.Row>
        </Card>
      </Flex.Row>
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
