import classes from "./LoaderState.module.css";

const LoaderState = (props) => {
  return (
    <div className={classes.loader}>
      <div className={classes.loaderinner}>{props.children}</div>
    </div>
  );
};

export default LoaderState;
