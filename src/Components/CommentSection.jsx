import { useEffect, useRef } from 'react';
import '../Styles/CommentSection.css' 
const CommentBox = () => {
  const scriptRef = useRef();

  useEffect(() => {
    if (!scriptRef.current) {
      // Create the script element
      const script = document.createElement('script');
      script.type = 'text/javascript';

      // Set the script's source to load the comment box
      script.src =
        'https://www.htmlcommentbox.com/jread?page=' +
        encodeURIComponent(window.location.href) +
        '&mod=%241%24wq1rdBcg%24qG0R3.f35esPqX72YNRm4%2F' +
        '&opts=16798&num=10&ts=' +
        Date.now();

      // Append the script to the document's head
      document.getElementsByTagName('head')[0].appendChild(script);

      // Store a reference to the script element to prevent duplicate loading
      scriptRef.current = script;
    }
  }, []);

  return (
    <div id="HCB_comment_box">
      <a href="http://www.htmlcommentbox.com">Comment Form</a> is loading comments...
    </div>
  );
};

export default CommentBox;

