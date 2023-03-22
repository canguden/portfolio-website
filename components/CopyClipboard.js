import { FiCopy } from "react-icons/fi";

export const CopyClipboard = ({ content }) => {
  return (
    <div>
      <FiCopy
        className="h-6 w-6  active:translate-y-1 hover:cursor-pointer"
        onClick={() => navigator.clipboard.writeText(content)}
      />
    </div>
  );
};
