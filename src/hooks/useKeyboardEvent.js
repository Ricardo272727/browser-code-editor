import { useEffect } from 'react';

const useKeyboardEvent = ({ fn, key, ctrl }) => {
  
  useEffect(() => {
     const onKeyDown = (event) => {
        if(event.key === key){
          if(ctrl && !event.ctrlKey){
            return;
          }
          event.preventDefault();
          fn();
        }
     };

    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [fn, key, ctrl]);
};


export { useKeyboardEvent };
