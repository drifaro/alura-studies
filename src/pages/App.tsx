/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react';
import { Forms } from '../components/Forms';
import { List } from '../components/List';
import { Stopwatch } from '../components/Stopwatch';
import style from './App.module.scss';
import { ITask } from '../types/task';
import { truncate } from 'fs';

export const App = () => {
  const [task, setTask] = useState<ITask[] | []>([]);
  const [selectedTask, setSelectedTask] = useState<ITask>();

  const handleTaskSelected = (taskSelected: ITask) => {
    setSelectedTask(taskSelected);
    setTask((prevTask) =>
      prevTask.map((getTask) => ({ ...getTask, isSelected: getTask.id === taskSelected.id })),
    );
  };

  const handleTaskCompleted = () => {
    if (selectedTask) {
      setSelectedTask(undefined);
      setTask((prevTask) =>
        prevTask.map((getTask) => {
          if (getTask.id === selectedTask.id) {
            return { ...getTask, isSelected: false, isCompleted: true };
          }
          return getTask;
        }),
      );
    }
  };

  return (
    <div className={style.AppStyle}>
      <Forms addTask={setTask} />
      {task.length >= 1 && <List tasksList={task} taskSelected={handleTaskSelected} />}
      <Stopwatch isSelected={selectedTask} isCompleted={handleTaskCompleted} />
    </div>
  );
};
