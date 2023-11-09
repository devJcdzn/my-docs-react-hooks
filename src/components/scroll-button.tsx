import { useState } from "react";
import { AiOutlineArrowUp } from 'react-icons/ai';
import '../App.css';

const ScrollButton = () => {
  const [isScroll, setIsScroll] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setIsScroll(true);
    } else if (scrolled <= 300) {
      setIsScroll(false);
    }
  }

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  window.addEventListener('scroll', toggleVisible);

  return (
    <>
      {isScroll ?
        <button onClick={scrollTop} className="scroll-btn">
          <AiOutlineArrowUp />
        </button> : ''
      }
    </>
  )
}

export default ScrollButton