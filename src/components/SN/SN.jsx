import styles from './SN.module.css'

export const SN = (props) => {
    return (
        <a className={styles.icon} href={props.href}>
            <img src={props.img} alt={props.img}/>
        </a>
    );
}

// Twitter 
//[img] - /images/social_twitter.png
//[href] - https://twitter.com/blvckparis

// Opensea 
//[img] - /images/social_opensea.png
//[href] - https://opensea.io/collection/blvckgenesis

//MarketPlace
//[img] - /images/social_mp.png
//[href] - https://makersplace.com/blvck/
