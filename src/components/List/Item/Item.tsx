import { ITask } from '../../../types/task';
import style from './Item.module.scss';

interface IItemProps extends ITask {
  taskSelected: (taskSelected: ITask) => void;
}

export const Item = ({ task, time, isSelected, isCompleted, id, taskSelected }: IItemProps) => {
  return (
    <li
      className={`
      ${style.item} 
      ${isSelected ? style.itemSelected : ''} 
      ${isCompleted ? style.itemCompleted : ''}
      `}
      onClick={() => !isCompleted && taskSelected({ task, time, isSelected, isCompleted, id })}
    >
      <h3>{task}</h3>
      <span>{time}</span>
      {isCompleted && <span className={style.completed} aria-label="Tarefa completada."></span>}
    </li>
  );
};
