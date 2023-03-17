import { Link } from 'gatsby'
import React from 'react'
import * as styles from '../heroSection/styles.module.sass'
const HeroSection = () => {
    return (
        <section className={styles.heroSection}>
            <div className={styles.content}>
                <h1 className='display white italic'>Escape to Tranquility: Experience the Beauty of Beragala at Our Mountain Cottage</h1>
                <p className='paragraph-regular'>Discover serenity at our charming cottage in Beragala, Sri Lanka. Nestled in the heart of the mountains, this idyllic retreat offers breathtaking views of the surrounding landscape. Relax and rejuvenate as you take in the stunning scenery from the comfort of your own private haven. With comfortable accommodations and a peaceful atmosphere, our cottage is the perfect escape from the hustle and bustle of everyday life. Come and experience the beauty of Beragala for yourself!</p>
                <Link className='btn btn-outline'>Explore</Link>
            </div>
        </section>
    )
}

export default HeroSection