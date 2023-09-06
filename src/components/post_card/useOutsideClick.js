import { useEffect, useState } from "react";

export const useOutsideClick = (el, initialState) => {
  const [isActive, setIsActive] = useState(initialState)
  
  useEffect(() => {
    const onClick = e => {
      if(el.current !== null && !el.current.contains(e.target)) {
        setIsActive(!isActive);
      }
    }
    
    if(isActive) {
      window.addEventListener("click", onclick)
    }

    return () => {
      window.removeEventListener("click", onClick);
    }
  }, [])

  return [isActive, setIsActive]
}
