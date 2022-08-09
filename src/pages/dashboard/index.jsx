import React from 'react'
import Buttons from '../../components/buttons/Buttons'
import Link from '../../components/links/Link'
import Logo from '../../components/logo/Logo'
import { SN } from '../../components/SN/SN'
import styles from './dashboard.module.css'

const DashboardPage = () => {
  return (
    <>
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

    <section className={styles.section2}>
      <div className={styles.section2_container}>
        <div className={styles.section2_content}>
          <div className={styles.section2_title}>
            <h2>Get Your Blvck Products</h2>
          </div>
          <p className={styles.section2_text}>
            Each month, we will randomly select an handful of Blvck Genesis NFT holders to claim their free phygital product.
          </p>
          <div className={styles.section2_icons}>
            <div className={styles.section2_icon}>
              <div className={styles.icon_img}>
                <img style={{width: '56px'}} src='/images/traits_outfit.png' alt=''/>
              </div>
              <span className={styles.icon_text}>CLOTHING</span>
            </div>
            <div className={styles.section2_icon}>
              <div className={styles.icon_img}>
                <img style={{width: '56px'}} src='/images/cap.png' alt=''/>
              </div>
              <span className={styles.icon_text}>ACCESSORIES</span>              
            </div>
            <div className={styles.section2_icon}>
            <div className={styles.icon_img}>
                <img style={{width: '42px'}} src='/images/web.png' alt=''/>
              </div>
              <span className={styles.icon_text}>DIGITAL GOODS</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className={styles.section3}>
      <div className={styles.section3_container}>
        <div className={styles.section3_content}>
          <div className={styles.section3_title}>
            <h2>The Blvck Membership Access</h2>
          </div>
          <p className={styles.section3_text}>
            We will continuously be adding new perks to Blvck Membership. This will consist of free products, access to real-life events near you and priority access to collaborations with other brands and artists.
          </p>
        </div>
      </div>
    </section>

    <footer className='footer'>
        <div className='footer_image'>
          <Logo img='/images/logo_blvck.png'/>
        </div>
        <div className='footer_btn'>
          <Buttons button='button_black' text='join the discord' href='https://discord.com/invite/blvckparis'/>
        </div>
        <div className='footer_SN'>
          <div>
          <SN img='/images/social_instagram.png' href='https://instagram.com/'/>
          </div>
          <div>
          <SN img='/images/social_twitter.png' href='https://instagram.com/'/>
          </div>
          <div>
          <SN img='/images/social_opensea.png' href='https://instagram.com/'/>
          </div>
        </div>
        <div className='footer_links'>
          <div>
            <Link text='Contact Us' href='https://blvck.com/pages/contact'/>
          </div>
          <div>
            <Link text='Terms' href='https://emea.blvck.com/pages/terms-of-service'/>
          </div>
        </div>
      </footer>
    </>
  )
}

export default DashboardPage