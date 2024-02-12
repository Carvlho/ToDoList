import {useCallback} from 'react';

import {useTasks, TaskProps} from '@hooks/tasks';

import Container from '@components/container';
import Header from '@components/header';
import TaskItem from '@components/TaskItem';
import List from '@components/list';

export default function ToDo() {
  const {tasks, setTasks} = useTasks();

  const onDelete = useCallback(
    (taskId: number) => {
      setTasks((prevTasks: TaskProps[]) =>
        prevTasks.filter(task => task.id !== taskId),
      );
    },
    [setTasks],
  );

  const handleToggleComplete = useCallback(
    (taskId: number) => {
      setTasks((prevTasks: TaskProps[]) =>
        prevTasks.map(task =>
          task.id === taskId ? {...task, completed: !task.completed} : task,
        ),
      );
    },
    [setTasks],
  );

  return (
    <Container style={{justifyContent: 'flex-start'}}>
      <Header>ToDo</Header>

      <List
        data={tasks}
        renderItem={({item}: any) => (
          <TaskItem
            task={item}
            onDelete={onDelete}
            onToggleComplete={handleToggleComplete}
          />
        )}
      />
    </Container>
  );
}
