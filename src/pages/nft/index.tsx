import React from 'react'
import styled from 'styled-components'
import Page from 'components/layout/Page'
import commingsoonImg from '../../assets/img/comingsoon.png'

export default function () {
  return (
    <Page>
      <div style={{ position: 'fixed', width: '100%', height: '100%', overflow: 'hidden' }}>
        <div style={{ position: 'fixed', width: '100%', height: '100%' }}>
          <img src={commingsoonImg} style={{ width: '100%', height: '100%', objectFit: 'cover' }} alt="" />
        </div>
        <div
          style={{
            position: 'fixed',
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '40px',
            color: '#ffffff',
          }}
        >
          Coming Soon
        </div>
      </div>
    </Page>
  )
}
