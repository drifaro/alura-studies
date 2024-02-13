import style from './Watch.module.scss';

interface IWatchProps {
  getTime: number | undefined;
}
export const Watch = ({ getTime = 0 }: IWatchProps) => {
  const hours = Math.floor(getTime / 3600);
  const minutes = Math.floor(getTime / 60) % 60;
  const seconds = getTime % 60;

  const [tensOfHour, unitsOfHour] = String(hours).padStart(2, '0');
  const [tensOfMinutes, unitsOfMinutes] = String(minutes).padStart(2, '0');
  const [tensOfSeconds, unitsOfSeconds] = String(seconds).padStart(2, '0');

  return (
    <>
      <span className={style.watch_number}>{tensOfHour}</span>
      <span className={style.watch_number}>{unitsOfHour}</span>
      <span className={style.watch_divider}>:</span>
      <span className={style.watch_number}>{tensOfMinutes}</span>
      <span className={style.watch_number}>{unitsOfMinutes}</span>
      <span className={style.watch_divider}>:</span>
      <span className={style.watch_number}>{tensOfSeconds}</span>
      <span className={style.watch_number}>{unitsOfSeconds}</span>
    </>
  );
};
