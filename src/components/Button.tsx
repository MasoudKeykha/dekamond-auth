import styles from './Button.module.scss';

interface ButtonProps {
  type?: 'button' | 'submit';
  text: string;
  onClick?: () => void;
};

const Button = ({ type, text, onClick }: ButtonProps) => {
  return (
    <button
      type={type}
      className={styles.button}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;