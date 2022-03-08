import React, { useContext } from 'react';
import Image from 'next/image';
import video from '../images/icons/video.svg';
import personPlus from '../images/icons/person-plus.svg';
import inbox from '../images/icons/inbox.svg';
import phone from '../images/icons/phone.svg';
import help from '../images/icons/help.svg';
import pin from '../images/icons/pin.svg';
import at from '../images/icons/at.svg';
import styles from '../styles/chatHeader.module.css';
import ethLogo from '../images/eth.png';

import { DiscordContext } from "../Context/Context.js";

// const currentAccount = '0x7D86FSDFS8DFSDF8SFSD3dffs68d7fdsdf';

const ChatHeader = () => {

    const { roomName, currentAccount, connectWallet } = useContext(DiscordContext)

    return (
        <div className={styles.chatHeader}>
            <div className={styles.roomNameContainer}>
                <Image
                    height={20}
                    width={20}
                    src={at}
                    className={styles.svg}
                    alt=''
                />
                <h3 className={styles.title}>{roomName}</h3>
                <div className={styles.chatHeaderStatus} id="online" />
            </div>
            {
                currentAccount ? (
                    <div className={styles.connectedWallet}>
                        <Image
                            src={ethLogo}
                            height={20}
                            width={20}
                            alt='ethLogo'

                        />
                        <span className={styles.seperator}>{'|'}</span>
                        {currentAccount.slice(0, 6)}...{currentAccount.slice(39)}
                    </div>
                ) : (
                    <div className={styles.connectWallet} onClick={() => connectWallet()}>
                        Connect Wallets
                    </div>
                )
            }
                <div className={styles.headerIconsContainer}>
                    <div className={styles.headerItem}>
                        <Image 
                            height={25}
                            width={25}
                            src={phone}
                            className={styles.svg}
                            alt='phone'
                        />    
                    </div>    
                    <div className={styles.headerItem}>
                        <Image 
                            height={25}
                            width={25}
                            src={video}
                            className={styles.svg}
                            alt='video'
                        />    
                    </div>    
                    <div className={styles.headerItem}>
                        <Image 
                            height={25}
                            width={25}
                            src={pin}
                            className={styles.svg}
                            alt='pin'
                        />    
                    </div>    
                    <div className={styles.headerItem}>
                        <Image 
                            height={25}
                            width={25}
                            src={personPlus}
                            className={styles.svg}
                            alt='personPlus'
                        />    
                    </div>
                    <div className={styles.headerItem}>
                        <input type="search" placeholder='Search' />
                    </div>
                    <div className={styles.headerItem}>
                        <Image 
                            height={25}
                            width={25}
                            src={inbox}
                            className={styles.svg}
                            alt='inbox'
                        />    
                    </div>
                    <div className={styles.headerItem}>
                        <Image 
                            height={25}
                            width={25}
                            src={help}
                            className={styles.svg}
                            alt='help'
                        />    
                    </div>

                </div>
        </div>
    )
}

export default ChatHeader