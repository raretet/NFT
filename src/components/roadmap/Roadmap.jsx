import React from 'react'
import styles from './Roadmap.module.css'

const Roadmap = () => {
  return (
    <div className={styles.roadmap}>
        <div className={styles.container}>
            <div className={styles.item}>
                <h3 className={styles.title}>PRE-MINT PHASE - BLVCK GENESIS NFT</h3>
                <span className={styles.date}>Date: Q2 2022</span>
                <ul className={styles.ul}>
                    <li>Major NFT projects collaborations by Blvcking out avatars</li>
                    <li>Partnerships with WEB2 brands with a claim to limited edition physical products to be paired with their avatars for rare Blvck Genesis NFT holders.</li>
                    <li>Launch of the first Blvckverse event in one of the Blvck stores</li>
                </ul>
            </div>
            <div className={styles.item}>
                <h3 className={styles.title}>MINT phase - BLVCK membership</h3>
                <span className={styles.date}>Date: Q3 2022</span>
                <ul className={styles.ul}>
                    <li>Web3 implementation on Blvck.com. Holders will be able to connect their wallet to unlock Blvck Alpha Membership.</li>
                    <li>Holders of Blvck Alpha Membership will get discounts on blvck.com & in-store, limited edition physical products and fashion collaborations as well as regular airdrops.</li>
                    <li>First access to WL spots for identified high-potential collections, AMA’s with well-known entrepreneurs, founders & artists of the NFT Space and also from reputable Web2 brands.</li>
                </ul>
            </div>
            <div className={styles.item}>
                <h3 className={styles.title}>Blvck verse</h3>
                <span className={styles.date}>Date: 2023</span>
                <ul className={styles.ul}>
                    <li>Land acquisition in the Web3 Space, launch of Blvck’s first digital store</li>
                    <li>Hiring and teaming up with experts and utilizing the work of in-house developers, 3D artists, creating our own Metaverse, but in Blvck.</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Roadmap