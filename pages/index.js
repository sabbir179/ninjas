import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
    <Head>
        <title> Ninjas List | Home</title>
        <meta name="keywords" content="ninjas" />
    </Head>
    <div >
      
      <h1 className= {styles.title} >Homepage</h1>
      <p className= {styles.text} >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem sapiente ea culpa ullam, atque veniam! Qui voluptatum dignissimos ullam dicta, neque tempora tenetur suscipit porro omnis molestias, consequatur optio hic!</p>
      <p className= {styles.title} >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem sapiente ea culpa ullam, atque veniam! Qui voluptatum dignissimos ullam dicta, neque tempora tenetur suscipit porro omnis molestias, consequatur optio hic!</p>
      <Link href="/ninjas">
        <a className= {styles.btn} > See Ninjas more </a>
      </Link>
      
    </div>
    </>
  )
}
