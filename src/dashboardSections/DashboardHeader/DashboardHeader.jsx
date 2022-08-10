import React from 'react'
import { SN } from '../../components/SN/SN'

import styles from '../../pages/dashboard/dashboard.module.css'

const DashboardHeader = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header_container}>
          <div className={styles.header_SN}>
            <div className={styles.SN1}>
              <SN img='/images/icon_instagram.png' href='https://instagram.com/black'/>
            </div>
            <div className={styles.SN2}>
              <SN img='/images/icon_twitter.png' href='https://twitter.com/blvckparis'/>
            </div>
            <div className={styles.SN3}>
              <SN img='/images/icon_opensea.png' href='https://opensea.io/collection/blvckgenesis'/>
            </div>
            <div className={styles.SN4}>
              <SN img='/images/icon_discord.png' href='https://discord.com/invite/blvckparis'/>
            </div>
          </div>
      </div>
    </header>
  )
}

export default DashboardHeader