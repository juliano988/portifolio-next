import Head from 'next/head'
import React, { createContext, useEffect, useState } from 'react'
import styles from '../styles/index_styles.module.scss'
import MainSection from '../sections/main_section'
import { Button, Spinner } from 'react-bootstrap'

export const SelectedSectionContext = createContext<React.Dispatch<React.SetStateAction<JSX.Element>>>(undefined);

export default function Home() {

  const [showArrow, setshowArrow] = useState(false)
  const [selectedSection, setselectedSection] = useState<JSX.Element | null>(null);

  useEffect(function () {
    if (location.hash !== '') {
      window.location.href = '';
    }
  }, [])

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
        <SelectedSectionContext.Provider value={setselectedSection}>
          <Button
            className={styles.arrow + ' ' + (showArrow ? styles.show_arrow : styles.hide_arrow)}
            onClick={() => setshowArrow(false)}
            href="#main_sec"
            variant="dark">▲</Button>
          <MainSection />
          {selectedSection}
        </SelectedSectionContext.Provider>
    </div>
  )
}
