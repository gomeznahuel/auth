import { NavLink } from "react-router-dom";
import { TextStyles } from "../../stylesheet/text";

export const Text = ({ text, link }) => {
  return (
    <TextStyles>
      {text} <NavLink to={link}>{link}</NavLink>
    </TextStyles>
  );
};
