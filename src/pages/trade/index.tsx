import React from 'react'
import styled from 'styled-components'
import Page from 'components/layout/Page'
import commingsoonImg from '../../assets/img/tradepage.png'

export default function () {
  return (
    <Page>
      <div
        style={{
          position: 'fixed',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '50px 0 80px 0',
        }}
      >
        <div>
          <img src={commingsoonImg} style={{ width: '340px',marginBottom: '120px' }} alt="" />
        </div>
      </div>
    </Page>
  )
}
