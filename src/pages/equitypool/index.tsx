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
            <D1 style={{ margin: '26px 0 0 0' }}>
              <LineBtn>Earn SLK</LineBtn>
              <LineBtn>SLK Airdrop</LineBtn>
              <LineBtn>Handling fee reduction</LineBtn>
              <LineBtn>Others......</LineBtn>
            </D1>
            <LinkText style={{ margin: '0 0 12px 0' }}>rules &gt;</LinkText>
          </div>
          <InnerCard>
            <NormalText style={{ color: '#999999' }}>Current value locked</NormalText>
            <NumTextH1 style={{ margin: '14px 0 26px 0' }}>10,000,000 SLK</NumTextH1>
            <NormalText style={{ color: '#999999' }}>Current price</NormalText>
            <NumTextH1 style={{ margin: '14px 0 0 0' }}>1.5U</NumTextH1>
          </InnerCard>
        </Flex.Row>
      </Card>
      <D2 style={{ justifyContent: 'space-between', alignItems: 'stretch' }}>
        <D2a style={{ marginRight: '46px' }}>
          <D2aa style={{ visibility: 'hidden', marginBottom: '46px', justifyContent: 'space-between' }}>
            <Title1>M</Title1>
            <SquarBtn>Ha</SquarBtn>
          </D2aa>
          <Card>
            <Flex.Col style={{ alignItems: 'center' }}>
              <Round />
              <NumTextH1 style={{ margin: '28px 0 7px 0' }}>0.000000</NumTextH1>
              <NormalText style={{ color: '#999999' }}>SLK Staked</NormalText>
              <LongBtn style={{ margin: '42px 0 0 0' }}>Approve</LongBtn>
              <div style={{ marginBottom: '52px' }} />
            </Flex.Col>
          </Card>
        </D2a>
        <Flex.Col style={{ alignItems: 'strech', flex: '1' }}>
          <D2b style={{ justifyContent: 'space-between', marginBottom: '46px' }}>
            <Title1>My rights</Title1>
            <SquarBtn>Harvest all</SquarBtn>
          </D2b>
          <Card>
            <D3 style={{ alignItems: 'stretch' }}>
              <D3a style={{ alignItems: 'center' }}>
                <Round />
                <NumTextH1 style={{ margin: '28px 0 7px 0' }}>0.000000</NumTextH1>
                <NormalText style={{ color: '#999999' }}>SLK Staked</NormalText>
                <LongBtn style={{ margin: '42px 0 0 0' }}>Approve</LongBtn>
              </D3a>
              <D3aa style={{ margin: '0 32px 0 46px' }} />
              <Flex.Col style={{ flex: 1 }}>
                <Flex.Row style={{ justifyContent: 'space-between' }}>
                  <NormalText>SLK Earned</NormalText>
                  <NormalText>20%</NormalText>
                </Flex.Row>
                <D3b style={{ margin: '32px 0' }} />
                <NormalText style={{ marginBottom: '12px' }}>Airdrop</NormalText>
                <Flex.Row style={{ justifyContent: 'space-between' }}>
                  <span style={{ fontSize: '22px', color: '#008d3e' }}>
                    <span>10.000000</span>
                    <span style={{ fontSize: '16px', marginLeft: '4px' }}>SLK</span>
                  </span>
                  <SquarBtn>Harvest all</SquarBtn>
                </Flex.Row>
                <Line style={{ margin: '32px 0' }} />
                <NormalText style={{ marginBottom: '52px' }}>More rights are coming soon</NormalText>
              </Flex.Col>
            </D3>
          </Card>
        </Flex.Col>
      </D2>
      <div style={{ height: '30px' }} />
    </Page>
  )
}

const D1 = styled(Flex.Row)`
  @media (max-width: 500px) {
    flex-wrap: wrap !important;
  }
`

const D2 = styled(Flex.Row)`
  @media (max-width: 500px) {
    flex-wrap: wrap !important;
    margin-top: -22px !important;
  }
`
const D2a = styled(Flex.Col)`
  @media (max-width: 500px) {
    margin-right: 0 !important;
    margin-bottom: 46px !important;
    flex: 1 !important;
  }
`
const D2b = styled(Flex.Row)`
  @media (max-width: 500px) {
    margin-bottom: 32px !important;
  }
`
const D2aa = styled(Flex.Row)`
  @media (max-width: 500px) {
    display: none !important;
  }
`

const D3 = styled(Flex.Row)`
  @media (max-width: 500px) {
    flex-wrap: wrap !important;
  }
`

const D3a = styled(Flex.Col)`
  align-items: center;
  @media (max-width: 500px) {
    margin-bottom: 42px !important;
    flex: 1;
  }
`

const D3aa = styled(VerLine)`
  @media (max-width: 500px) {
    display: none !important;
  }
`

const D3b = styled(Line)`
  @media (max-width: 500px) {
    margin: 16px 0px;
  }
`

const InnerCard = styled.div`
  width: 321px;
  padding: 22px 16px;
  background: #222222;
  border-radius: 6px;
  box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.1);
`

const LineBtn = styled.div`
  border: 1px solid #666060;
  color: #ffffff;
  border-radius: 7px;
  padding: 8px 12px;
  margin: 0 12px 20px 0;
  box-shadow: 0px 3px 6px 0px rgb(0 0 0 / 10%);
  cursor: pointer;
  font-size: 12px;
`
const Round = styled.div`
  width: 70px;
  height: 70px;
  background: #4d4d4d;
  border-radius: 50%;
`
const LongBtn = styled.div`
  min-width: 260px;
  background: #008d3e;
  border-radius: 6px;
  height: 46px;
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
