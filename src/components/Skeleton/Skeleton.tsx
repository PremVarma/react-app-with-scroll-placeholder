import React from 'react'
import Skeleton from 'react-loading-skeleton'
import classes from './Skeleton.module.css'

const SkeletonCard = () => {
  return (
    <section>
      <h2 className={classes.section_title}>
        <Skeleton duration={1} height={30} width={300} />
      </h2>

      <ul className={classes.list}>
        {Array(9)
          .fill('')
          .map((item, index) => (
            <li className={classes.card} key={index}>
              <Skeleton height={180} />
              <h4 className={classes.card_title}>
                <Skeleton height={26} width={100} />
              </h4>
              <p className={classes.card_channel}>
                <Skeleton width={100} />
              </p>
              <p className={classes.card_channel}>
                <Skeleton width={`60%`} />
              </p>
              <div className={classes.card_metrics}>
                <Skeleton height={40} width={`100%`} />
              </div>
            </li>
          ))}
      </ul>
    </section>
  )
}

export default SkeletonCard
