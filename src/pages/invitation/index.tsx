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
            <Title1>Invitation</Title1>
            <NormalText style={{ margin: '24px 0 19px 0' }}>Invite other users can get the basal Hashrate</NormalText>
            <LinkText>the rules of Invitation &gt;</LinkText>
          </div>
          <InnerCard>
            <NormalText style={{ color: '#999999' }}>My Hashrate</NormalText>
            <NumTextH1 style={{ margin: '24px 0 29px 0' }}>360T</NumTextH1>
            <Flex.Row>
              <NormalText style={{ marginRight: '16px' }}>Management node</NormalText>
              <Round>T</Round>
            </Flex.Row>
          </InnerCard>
        </Flex.Row>
      </Card>
      <Card style={{ maxWidth: '566px', margin: '48px 0' }}>
        <Flex.Row style={{ justifyContent: 'space-between', alignItems: 'stretch' }}>
          <div>
            <NormalText style={{ marginBottom: '24px' }}>Number of invited users</NormalText>
            <NumTextH1>100</NumTextH1>
          </div>
          <D2 />
          <div>
            <NormalText style={{ marginBottom: '24px' }}>Increased Hashrate</NormalText>
            <NumTextH1>210T</NumTextH1>
          </div>
        </Flex.Row>
      </Card>
      <Card style={{marginBottom: '80px'}}>
        <Title1Thin style={{ marginBottom: '42px' }}>My Invite Link</Title1Thin>
        <Flex.Col style={{ alignItems: 'center' }}>
          <a href="#11">
            <NormalText>http://insurance_tmp.web.xmublockchain.com/#/dash---</NormalText>
          </a>
          <Btn style={{ margin: '30px 0' }}>Copy</Btn>
          <NormalText>You can invite others to earn Hashrate</NormalText>
        </Flex.Col>
      </Card>
      <div style={{height: '30px'}} />
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
    word-break: break-all !important;
  }
`

const D2 = styled(VerLine)`
  @media (max-width: 500px) {
    background-color: transparent !important;
    width: 12px !important;
  }
`