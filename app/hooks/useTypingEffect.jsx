import { useState, useEffect } from "react";

function useTypingEffect(phrases, initialTypingSpeed = 100, initialDeletingSpeed = 150) {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(initialTypingSpeed);
  const [deletingSpeed, setDeletingSpeed] = useState(initialDeletingSpeed);

  useEffect(() => {
    const handleTyping = () => {
      const currentPhrase = phrases[currentIndex];
      if (isDeleting) {
        setText(currentPhrase.substring(0, text.length - 1));
        setTypingSpeed(deletingSpeed);
      } else {
        setText(currentPhrase.substring(0, text.length + 1));
        setTypingSpeed(typingSpeed);
      }

      if (!isDeleting && text === currentPhrase) {
        setIsDeleting(true);
        setTypingSpeed(deletingSpeed);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        setTypingSpeed(typingSpeed);
      }
    };

    const typingTimer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(typingTimer);
  }, [text, currentIndex, isDeleting, typingSpeed, deletingSpeed, phrases]);

  return text;
}

export default useTypingEffect;
