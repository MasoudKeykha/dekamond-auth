import styles from './Input.module.scss';

interface InputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
};

const Input = ({ value, onChange, placeholder }: InputProps) => {
  return (
    <input
      className={styles.input}
      type="tel"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

export default Input;