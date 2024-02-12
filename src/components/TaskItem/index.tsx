import {useState} from 'react';

import {
  ActionButton,
  Completed,
  ContainerActions,
  ContainerTaskItem,
  TaskItemDescription,
  TaskItemTitle,
} from './styles';

import {CheckCheck, CheckCircle2, Trash2} from 'lucide-react-native';

interface Task {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

interface TaskItemProps {
  task: Task;
  onToggleComplete: (taskId: number) => void;
  onDelete: (taskId: number) => void;
}

export default function TaskItem({
  task,
  onToggleComplete,
  onDelete,
}: TaskItemProps) {
  return (
    <ContainerTaskItem>
      <TaskItemTitle completed={task.completed}>{task.title}</TaskItemTitle>
      <TaskItemDescription>{task.description}</TaskItemDescription>

      <ContainerActions>
        <ActionButton onPress={() => onDelete(task.id)}>
          <Trash2 color={'red'} />
        </ActionButton>

        {!task.completed && (
          <ActionButton onPress={() => onToggleComplete(task.id)}>
            <CheckCircle2 color={'green'} />
          </ActionButton>
        )}
      </ContainerActions>

      {task.completed && (
        <Completed>
          <CheckCheck color={'green'} />
        </Completed>
      )}
    </ContainerTaskItem>
  );
}
