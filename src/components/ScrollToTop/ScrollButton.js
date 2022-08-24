import React, { useEffect, useState } from 'react';
import { BiArrowToTop } from 'react-icons/bi'
import styles from './ScrollButton.module.css';

function ScrollButton() {

  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)
    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  return (
    <BiArrowToTop onClick={scrollToTop} className={`${styles.scrollTopButton} ${isVisible ? styles.show : ''}`} />

  )
}

export default ScrollButton