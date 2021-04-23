import Head from 'next/head'
import React, { useEffect, useState } from 'react'
import styles from '../styles/index_styles.module.scss'
import FccSection1 from '../sections/fcc_1_section'
import MainSection from '../sections/main_section'
import { Button } from 'react-bootstrap'

export default function Home() {

  const [showArrow, setshowArrow] = useState(false)

  useEffect(function () {
    function hashChangeFunc() {
      if (location.hash === '#main_sec' || location.hash === '') {
        setshowArrow(false)
      } else {
        setshowArrow(true)
      }
    }
    window.addEventListener('hashchange', hashChangeFunc);
  }, [])

  return (
    <div>
      <Head>
        <title>Júlio Faria's portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Button
        className={styles.arrow + ' ' + (showArrow ? styles.show_arrow : styles.hide_arrow)}
        onClick={() => setshowArrow(false)}
        href="#main_sec"
        variant="dark">▲</Button>
      <MainSection />
      <FccSection1 />
    </div>
  )
}
