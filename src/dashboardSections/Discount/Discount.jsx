import React from 'react'

import styles from '../../pages/dashboard/dashboard.module.css'

const Discount = () => {
  return (
    <section className={styles.section1}>
      <div className={styles.section1_container}>
        <div className={styles.section1_content}>
          <div className={styles.section1_title}>
            <h2>Get Your Discount Code</h2>
          </div>
          <div className={styles.section1_subtitle}>
            <h3>Unlock Your Blvck membership</h3>
          </div>
          <p className={styles.section1_text}>
              As a benefit of holding a Blvck Genesis NFT, you will get access to exclusive discounts on blvck.com. Those that hold Blvck Genesis NFTs with certain traits will also be able to claim phygital products to be paired with their avatar. We recommend to check regularly by connecting your wallet on nft.blvck.com as new offers will pop up from time to time.
          </p>
          <div className={styles.section1_container_astro}>
            <div className={styles.astro_item}>
              <h3>20%</h3>
              <p>Holding 1 Blvck Genesis NFT will get you 20% off site-wide on blvck.com</p>
            </div>
            <div className={styles.astro_item}>
              <h3>25%</h3>
              <p>Holding 2 Blvck Genesis NFTs will get you 25% off site-wide on blvck.com</p>
            </div>
            <div className={styles.astro_item}>
              <h3>30%</h3>
              <p>Holding 3+ Blvck Genesis NFTs will get you 30% off site-wide on blvck.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Discount