import React from 'react';
import styles from '../styles/chatView.module.css';
import ChatHeader from './ChatHeader'
import MessageForm from './MessageForm'

const ChatView = () => {
  return (
    <div className={styles.chatView}>
        <ChatHeader />
        <div className={styles.messagesContainer}>
            
        </div>  
        <MessageForm />  
    </div>
  )
}

export default ChatView