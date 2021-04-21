import Head from 'next/head'
import React from 'react'
import Section1 from '../sections/section1'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Júlio Faria's portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Section1 />
    </div>
  )
}
