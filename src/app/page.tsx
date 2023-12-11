'use client'

import { Head } from "next/document";
import { createContext, useEffect, useState } from 'react'
import { Button } from "react-bootstrap";
import MainSection from "../sections/main_section";
import styles from '../styles/index_styles.module.scss'
import SelectedSectionContext from "./context/SelectedSectionContext";

export default function Page() {

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
      <>
        <SelectedSectionContext.Provider value={setselectedSection}>
          <Button
            className={styles.arrow + ' ' + (showArrow ? styles.show_arrow : styles.hide_arrow)}
            onClick={() => setshowArrow(false)}
            href="#main_sec"
            variant="dark">▲</Button>
          <MainSection />
          {selectedSection}
        </SelectedSectionContext.Provider>
      </>
    </div>
  )

}