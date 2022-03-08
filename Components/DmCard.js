import React from 'react';
import Image from 'next/image';
import styles from '../styles/DmCard.module.css';

const DmCard = ({ name, status, avatar, id }) => {

    const changeUrl = () => {
      router.push(`?conversation=${id}&name=${name}`)
    };

  return (
    <div className={styles.dmCard} onClick={changeUrl} >
        <div className={styles.dmAvatarContainer}>
            <Image
            src={avatar}
            className={styles.dmAvatar}
            height={48}
            width={48}
            alt={name}
            />
            <div className={styles.dmCardStatus} id={status} />
        </div>
        <p className={styles.dmCardName}>{name}</p>
    </div>
  )
}

export default DmCard