/* eslint-disable import/no-extraneous-dependencies */
import { FormEvent, useState } from 'react';
import { Button } from '../Button';
import style from './Forms.module.scss';
import { AddTask } from '../../types/task';
import { v4 as uuidv4 } from 'uuid';

interface IFormsProps {
  addTask: AddTask;
}

export const Forms = ({ addTask }: IFormsProps) => {
  const [task, setTask] = useState('');
  const [time, setTime] = useState('00:00:00');

  const onSubmitTask = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addTask((oldTasks) => [
      ...oldTasks,
      { task, time, isSelected: false, isCompleted: false, id: uuidv4() },
    ]);
    setTask('');
    setTime('00:00:00');
  };

  return (
    <form className={style.novaTarefa} onSubmit={onSubmitTask}>
      <div className={style.inputContainer}>
        <label htmlFor="tarefa">Adicione um novo estudo</label>
        <input
          type="text"
          name="tarefa"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          id="tarefa"
          placeholder="O que você quer estudar?"
        />
      </div>
      <div className={style.inputContainer}>
        <label htmlFor="tempo">Tempo</label>
        <input
          type="time"
          step="1"
          name="tempo"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          id="tempo"
          min="00:00:00"
          max="01:30:00"
          required
        />
      </div>
      <Button type="submit">Adicionar</Button>
    </form>
  );
};
