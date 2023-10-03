
import '../Styles/CleaningImg.css'

import { useEffect } from 'react';

const ImgHover = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.commoninja.com/sdk/latest/commonninja.js';
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="commonninja_component pid-68e0a919-c6be-4421-93e9-318c7afa12ef"></div>
  );
};

export default ImgHover;
