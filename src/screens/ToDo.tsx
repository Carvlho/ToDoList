import {useCallback} from 'react';
import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {useTheme} from 'styled-components';

import {useTasks, TaskProps} from '@hooks/tasks';

import {AppRoutesNavigationProps} from '@routes/index.routes';

import Container from '@components/container';
import Header from '@components/header';
import TaskItem from '@components/TaskItem';
import List from '@components/list';
import ButtonAddTask from '@components/buttonAddTask';

import {Plus} from 'lucide-react-native';

export default function ToDo() {
  const theme = useTheme();
  const navigation = useNavigation<AppRoutesNavigationProps>();

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
      <View>
        <Header>ToDo</Header>

        <ButtonAddTask onPress={() => navigation.navigate('AddTask')}>
          <Plus color={theme.colors.white} />
        </ButtonAddTask>
      </View>

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
