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
          <Flex.Row style={{ justifyContent: 'space-between', alignItems: 'stretch' }}>
            <Flex.Col style={{ alignItems: 'flex-start' }}>
              <NumTextH2>$100</NumTextH2>
              <NormalText style={{ marginTop: '16px' }}>Transaction Fees</NormalText>
            </Flex.Col>

            <Flex.Col style={{ alignItems: 'flex-end', margin: '0 18px' }}>
              <NumTextH2>$1.00</NumTextH2>
              <NormalText style={{ marginTop: '16px' }}>Redeem Fees</NormalText>
            </Flex.Col>

            <VerLine />

            <Flex.Col style={{ alignItems: 'flex-start', margin: '0 18px' }}>
              <NumTextH2>$50</NumTextH2>
              <NormalText style={{ marginTop: '16px' }}>Current balance</NormalText>
            </Flex.Col>

            <Flex.Col style={{ alignItems: 'flex-end' }}>
              <NumTextH2>$51</NumTextH2>
              <NormalText style={{ marginTop: '16px' }}> Consumption fee </NormalText>
            </Flex.Col>
          </Flex.Row>
        </Card>
        <Card style={{ marginBottom: '16px' }}>
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
        </Card>
      </Flex.Row>
      <Title1Thin style={{ marginBottom: '42px' }}>Repurchase history</Title1Thin>
      <Card>
        <Flex.Row style={{ justifyContent: 'space-between' }}>
          <Flex.Col style={{ alignItems: 'flex-start' }}>
            <NormalText>Time</NormalText>
            <NormalText style={{ color: '#999999', marginTop: '32px' }}>2021-05-06</NormalText>
          </Flex.Col>
          <Flex.Col style={{ alignItems: 'center' }}>
            <NormalText>Consumption fee</NormalText>
            <NormalText style={{ color: '#999999', marginTop: '32px' }}>$51.00</NormalText>
          </Flex.Col>
          <Flex.Col style={{ alignItems: 'center' }}>
            <NormalText>Repurchase amount</NormalText>
            <NormalText style={{ color: '#999999', marginTop: '32px' }}>100.000000 SLK</NormalText>
          </Flex.Col>
          <Flex.Col style={{ alignItems: 'flex-end' }}>
            <NormalText>Amount burned</NormalText>
            <NormalText style={{ color: '#999999', marginTop: '32px' }}>37.000000 SLK</NormalText>
          </Flex.Col>
        </Flex.Row>
      </Card>
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
