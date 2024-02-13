export interface ITask {
  task: string;
  time: string;
  isSelected: boolean;
  isCompleted: boolean;
  id: string;
}

export type AddTask = React.Dispatch<React.SetStateAction<ITask[]>>;
