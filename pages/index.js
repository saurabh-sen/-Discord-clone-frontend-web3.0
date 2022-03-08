import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Sidebar from '../Components/Sidebar';
import ConversationList from '../Components/ConversationList';
import ChatView from '../Components/ChatView';

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <Head>
        <title>Discord Clone</title>
        <meta name="description" content="blockchain discord clone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Sidebar />
      <div className={styles.main}>
        <ConversationList />
        <ChatView />  
      </div>
      {/* conversation */}
      {/* chat view */}
    </div>
  )
}
