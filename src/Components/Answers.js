import classes from "../Style/Answere.module.css";
import Checkbox from "./CheckBox";

export default function Answers() {
  return (
    <div className={classes.answers}>
      <Checkbox className={classes.answer} text="Test answer" />
    </div>
  );
}
