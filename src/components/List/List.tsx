import { ITask } from '../../types/task';
import { Item } from './Item';
import style from './List.module.scss';

interface IListProps {
  tasksList: ITask[];
  taskSelected: (taskSelected: ITask) => void;
}

export const List = ({ tasksList, taskSelected }: IListProps) => {
  return (
    <aside className={style.listaTarefas}>
      <h2>Estudos do dia</h2>
      <ul>
        {tasksList.map((item) => (
          <Item key={item.id} taskSelected={taskSelected} {...item} />
        ))}
      </ul>
    </aside>
  );
};
