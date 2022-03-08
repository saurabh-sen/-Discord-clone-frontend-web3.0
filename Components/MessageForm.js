import React, { useContext } from 'react';
import styles from '../styles/messageForm.module.css';

import plusFilled from '../images/icons/plus-filled.svg';
import sticker from '../images/icons/sticker.svg';
import smiley from '../images/icons/smiley.svg';
import gift from '../images/icons/gift.svg';
import gif from '../images/icons/gif.svg';
import Image from 'next/image';
import { DiscordContext } from '../Context/Context.js';

const MessageForm = () => {

    const { messageText, setMessageText, placeholder, gun, roomName, currentAccount, currentUser } = useContext(DiscordContext);

    const sendMessage = event => {
        event.preventDefault()
        if (messageText.trim() === '')  return

        const messageRef = gun.get(roomName);

        const newMessage = {
            sender: currentUser.name,
            avatar: currentUser.avatar ? currentUser.avatar : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS30CSMFIW5',
            context: messageText.trim(),
            createdAt: DataTransfer().substring(4, 11),
            messageId: Date.now(),
        }

        messageRef.set(newMessage)
        setMessageText('')

    };

  return (
    <form onSubmit={event => sendMessage(event)} className={styles.chatInputContainer}>
        <div className={styles.chatInputWrapper}>
            <div className={styles.svgContainer}>
                <Image
                    height={25}
                    width={25}
                    src={plusFilled}
                    className={styles.svg}
                    alt='plus filled'
                />    
            </div>
            <input type="text" className={styles.chatInput} 
                value={messageText}
                disabled={currentAccount.name}
                onChange={e=> setMessageText(e.target.value)}
                placeholder={placeholder}
            />

            <div className={styles.svgContainer}>
                <Image
                    height={25}
                    width={25}
                    src={gift}
                    className={styles.svg}
                    alt='gift'
                />    
            </div>
            <div className={styles.svgContainer}>
                <Image
                    height={25}
                    width={25}
                    src={gif}
                    className={styles.svg}
                    alt='gif'
                />    
            </div>
            <div className={styles.svgContainer}>
                <Image
                    height={25}
                    width={25}
                    src={sticker}
                    alt='sticker'
                    className={styles.svg}
                />    
            </div>
            <div className={styles.svgContainer}>
                <Image
                    height={25}
                    width={25}
                    src={smiley}
                    alt='smiley'
                    className={styles.svg}
                />    
            </div>
        </div>    
    </form>
  )
}

export default MessageForm