import style from './Button.module.scss';

interface IButtonProps {
  children: React.ReactNode;
  type: 'button' | 'submit' | 'reset' | undefined;
  onClick?: () => void;
}

export const Button = ({ children, type, onClick }: IButtonProps) => {
  return (
    <button className={style.button} type={type} onClick={onClick}>
      {children}
    </button>
  );
};
