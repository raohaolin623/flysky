import React from 'react'
import styled from 'styled-components'
import Page from 'components/layout/Page'
import {
  Flex,
  Card,
  Title1,
  Title1Thin,
  NormalText,
  LinkText,
  NumTextH1,
  NumTextH2,
  Line,
  VerLine,
  Btn,
} from '../components'

export default function () {
  return (
    <Page>
      <Card style={{ marginBottom: '80px' }}>
        <Flex.Row style={{ justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap' }}>
          <div style={{ marginBottom: '16px' }}>
            <Title1>Equity pool</Title1>
            <NormalText style={{ margin: '24px 0 0 0' }}>
              you can stake your SLK to the Equity pool for get more rights and interests
            </NormalText>
            <Flex.Row style={{ margin: '36px 0 24px 0' }}>
              <LineBtn>Earn SLK</LineBtn>
              <LineBtn>SLK Airdrop</LineBtn>
              <LineBtn>Handling fee reduction</LineBtn>
              <LineBtn>Others......</LineBtn>
            </Flex.Row>
            <LinkText>rules &gt;</LinkText>
          </div>
          <InnerCard>
            <NormalText style={{ color: '#999999' }}>Current value locked</NormalText>
            <NumTextH1 style={{ margin: '24px 0 36px 0' }}>10,000,000 SLK</NumTextH1>
            <NormalText style={{ color: '#999999' }}>Current price</NormalText>
            <NumTextH1 style={{ margin: '24px 0 0 0' }}>1.5U</NumTextH1>
          </InnerCard>
        </Flex.Row>
      </Card>
      <Flex.Row style={{ justifyContent: 'space-between', alignItems: 'stretch' }}>
        <Flex.Col style={{ marginRight: '46px' }}>
          <Flex.Row style={{ visibility: 'hidden', marginBottom: '46px', justifyContent: 'space-between' }}>
            <Title1>M</Title1>
            <SquarBtn>Ha</SquarBtn>
          </Flex.Row>
          <Card>
            <Flex.Col style={{ alignItems: 'center' }}>
              <Round />
              <NumTextH1 style={{ margin: '55px 0 13px 0' }}>0.000000</NumTextH1>
              <NormalText style={{ color: '#999999' }}>SLK Staked</NormalText>
              <LongBtn style={{ margin: '85px 0 0 0' }}>Approve</LongBtn>
            </Flex.Col>
          </Card>
        </Flex.Col>
        <Flex.Col style={{ alignItems: 'strech', flex: '1' }}>
          <Flex.Row style={{ justifyContent: 'space-between', marginBottom: '46px' }}>
            <Title1>My rights</Title1>
            <SquarBtn>Harvest all</SquarBtn>
          </Flex.Row>
          <Card>
            <Flex.Row style={{ alignItems: 'stretch' }}>
              <Flex.Col style={{ alignItems: 'center' }}>
                <Round />
                <NumTextH1 style={{ margin: '55px 0 13px 0' }}>0.000000</NumTextH1>
                <NormalText style={{ color: '#999999' }}>SLK Staked</NormalText>
                <LongBtn style={{ margin: '85px 0 0 0' }}>Approve</LongBtn>
              </Flex.Col>
              <VerLine style={{ margin: '0 32px 0 46px' }} />
              <Flex.Col style={{ flex: 1 }}>
                <Flex.Row style={{ justifyContent: 'space-between' }}>
                  <NormalText>SLK Earned</NormalText>
                  <NormalText>20%</NormalText>
                </Flex.Row>
                <Line style={{ margin: '36px 0' }} />
                <NormalText style={{ marginBottom: '18px' }}>Airdrop</NormalText>
                <Flex.Row style={{ justifyContent: 'space-between' }}>
                  <span style={{ fontSize: '22px', color: '#008d3e' }}>
                    <span>10.000000</span>
                    <span style={{ fontSize: '16px', marginLeft: '4px' }}>SLK</span>
                  </span>
                  <SquarBtn>Harvest all</SquarBtn>
                </Flex.Row>
                <Line style={{ margin: '36px 0' }} />
                <NormalText>More rights are coming soon</NormalText>
              </Flex.Col>
            </Flex.Row>
          </Card>
        </Flex.Col>
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

const LineBtn = styled.div`
  border: 1px solid #666060;
  color: #ffffff;
  border-radius: 7px;
  padding: 12px 26px;
  margin-right: 30px;
  box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.1);
  cursor: pointer;
`
const Round = styled.div`
  width: 142px;
  height: 142px;
  background: #4d4d4d;
  border-radius: 50%;
`
const LongBtn = styled.div`
  min-width: 260px;
  background: #008d3e;
  border-radius: 6px;
  height: 56px;
  color: #ffdb64;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`
const SquarBtn = styled.div`
  background: #008d3e;
  border-radius: 6px;
  padding: 9px 20px;
  color: #ffdb64;
  cursor: pointer;
`
