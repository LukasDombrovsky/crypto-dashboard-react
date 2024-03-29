import Btn from 'react-bootstrap/Button';

import classes from './button.module.scss';

const Button = (props) => {
  return (
    <Btn className={classes.button} {...props}>
      {props.children}
    </Btn>
  );
};

export default Button;
