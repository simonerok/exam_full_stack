import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt, faPaperPlane, IconDefinition } from "@fortawesome/free-solid-svg-icons";

interface Props {
  isLogged: boolean;
  text?: string;
  icon?: IconDefinition;
  fontSize?: "small" | "medium" | "large" | "larger"; // fontsize
}

const Button = ({ isLogged, text, fontSize = "medium" }: Props) => {
  // fontsizes
  const fontSizeClass = {
    small: "text-txt_small",
    medium: "text-txt_medium",
    large: "text-txt_large",
    larger: "text-txt_larger",
  }[fontSize];

  return (
    <button className={`bg-bg_dark hover:bg-bg_hover text-white py-2 px-4 rounded-[50px] transition duration-300 flex items-center ${fontSizeClass}`}>
      <span>{text || (isLogged ? "LOGOUT" : "LOGIN")}</span>
      <FontAwesomeIcon icon={isLogged ? faSignOutAlt : faPaperPlane} className="pl-3" />
    </button>
  );
};

export default Button;
