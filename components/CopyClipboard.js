import { FiCopy, FiCheck } from "react-icons/fi";
import { useState, useEffect } from "react";

export const CopyClipboard = ({ content }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(content);
      setIsCopied(true);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  useEffect(() => {
    let timer;
    if (isCopied) {
      timer = setTimeout(() => {
        setIsCopied(false);
      }, 3000); // change 3000 to the number of milliseconds you want the success icon to remain visible
    }
    return () => clearTimeout(timer);
  }, [isCopied]);

  return (
    <div>
      {isCopied ? (
        <FiCheck className="h-6 w-6 text-green-500 duration-300" />
      ) : (
        <FiCopy
          className="h-6 w-6 active:translate-y-1 hover:cursor-pointer duration-300"
          title="Copy"
          onClick={handleCopy}
        />
      )}
    </div>
  );
};
