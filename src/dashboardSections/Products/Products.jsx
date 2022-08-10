import React from 'react'

import styles from '../../pages/dashboard/dashboard.module.css'

const Products = () => {
  return (
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
  )
}

export default Products