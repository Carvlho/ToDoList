import {useTasks, TaskProps} from '@hooks/tasks';

import Container from '@components/container';
import Header from '@components/header';
import TaskItem from '@components/TaskItem';

export default function ToDo() {
  const {tasks, setTasks} = useTasks();

  const onDelete = (taskId: number) => {
    setTasks((prevTasks: TaskProps[]) =>
      prevTasks.filter(task => task.id !== taskId),
    );
  };

  const handleToggleComplete = (taskId: number) => {
    setTasks((prevTasks: TaskProps[]) =>
      prevTasks.map(task =>
        task.id === taskId ? {...task, completed: !task.completed} : task,
      ),
    );
  };

  return (
    <Container style={{justifyContent: 'flex-start'}}>
      <Header>ToDo</Header>

      {tasks.map((task, index) => (
        <TaskItem
          key={index}
          task={task}
          onDelete={onDelete}
          onToggleComplete={handleToggleComplete}
        />
      ))}
    </Container>
  );
}
