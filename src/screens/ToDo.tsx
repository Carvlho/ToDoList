import {Text, View} from 'react-native';

import {useTasks} from '@hooks/tasks';
import Container from '@components/container';
import Header from '@components/header';

export default function ToDo() {
  const {tasks} = useTasks();

  return (
    <Container>
      <Header>ToDo</Header>

      {tasks.map((task, index) => (
        <>
          <Text key={index}>{task.title}</Text>
          <Text>{task.description}</Text>
        </>
      ))}
    </Container>
  );
}
