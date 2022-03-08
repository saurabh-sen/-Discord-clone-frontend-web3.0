import React, { useState, useEffect } from 'react';
import styles from "../styles/ConversationList.module.css"
import Image from 'next/image';

import avatar1 from '../images/avatar-1.webp';
import avatar2 from '../images/avatar-2.png';
import avatar3 from '../images/avatar-3.webp';
import avatar4 from '../images/avatar-4.webp';
import friends from '../images/icons/friends.svg';
import nitro from '../images/icons/nitro.svg';
import Dms from './DmCard';

const ConversationList = () => {

    const dummyDms = [
        {
            id: 1,
            name: 'saurabh',
            avatar: avatar1,
        },
        {
            id: 2,
            name: 'ashu',
            avatar: avatar2,
        },
        {
            id: 3,
            name: 'tt',
            avatar: avatar3,
        },
        {
            id: 4,
            name: 'minions',
            avatar: avatar4,
        },
    ]

    const [dms, setDms] = useState([]);

    useEffect( async () => {
        try {
            const response =  await fetch(`${process.env.NEXT_PUBLIC_API_URL}/getdms`)
            setDms(await response.json())
        } catch (error) {
            console.error(error)
        }
    })

  return (
    <div className={styles.conversations}>
        <div className={styles.ConversationListTop}>
            <input type="search" placeholder='Find or start a conversation' />    
        </div>
        <div className={styles.conversationsContainer}>
            <div className={styles.elementsContainer}>
                <div className={styles.svgContainer}>
                    <Image 
                     height={25}
                     width={25}
                     src={friends}
                     alt='friends'
                     className={styles.svg}
                    />
                </div>
                <p>Friends</p>
            </div>
            <div className={styles.elementsContainer}>
                <div className={styles.svgContainer}>
                    <Image 
                     height={25}
                     width={25}
                     src={nitro}
                     alt='nitro'
                     className={styles.svg}
                     />
                </div>    
                <p>Nitro</p>
            </div>
            <div className={styles.dmTitle}>DIRECT MESSAGES</div>
            {
                dms.map((dm, index) => (
                    <Dms 
                    key={index}
                    name={dm.name}
                    id={dm.id}
                    avatar={dm.avatar || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS30CSMFI'}
                    status='online'
                    />
                ))
            }
        </div>
    </div>
  )
}

export default ConversationList