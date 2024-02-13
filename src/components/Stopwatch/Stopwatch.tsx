import { Button } from '../Button';
import { Watch } from './Watch';
import style from './Stopwatch.module.scss';
import { ITask } from '../../types/task';
import { useEffect, useState } from 'react';
import { timeToSeconds } from '../../common/utils/time';

interface IStopwatchProps {
  isSelected: ITask | undefined;
  isCompleted: () => void;
}
export const Stopwatch = ({ isSelected, isCompleted }: IStopwatchProps) => {
  const [time, setTime] = useState<number>();

  useEffect(() => {
    if (isSelected?.time) {
      setTime(timeToSeconds(isSelected.time));
    }
  }, [isSelected]);

  const counter = (getTime: number = 0) => {
    setTimeout(() => {
      if (getTime > 0) {
        setTime(getTime - 1);
        return counter(getTime - 1);
      }
      isCompleted();
    }, 1000);
  };

  return (
    <div className={style.stopwatch}>
      <p className={style.title}>Escolha um card e inicie o cronômetro</p>
      <div className={style.watchWrapper}>
        <Watch getTime={time} />
      </div>
      <Button type="button" onClick={() => counter(time)}>
        Iniciar
      </Button>
    </div>
  );
};
