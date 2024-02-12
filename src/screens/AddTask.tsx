import {useNavigation} from '@react-navigation/native';
import {useForm, Controller} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {z} from 'zod';

import {useTheme} from 'styled-components';

import {TaskProps, useTasks} from '@hooks/tasks';

import {AppRoutesNavigationProps} from '@routes/index.routes';

import Container from '@components/container';
import Header from '@components/header';
import Input from '@components/Input/input.index';
import Button from '@components/Button/button.index';

import {
  ContainerInfo,
  ContainerInput,
  MyInputMultiLine,
  TextInfo,
} from '@components/Input/input.styles';

import {AlertCircle} from 'lucide-react-native';

const taskSchema = z.object({
  title: z
    .string({
      required_error: 'Insira o título da task.',
    })
    .min(1, {
      message: 'O título da task deve ser preenchido.',
    }),
  description: z
    .string({
      required_error: 'Insira a descrição.',
    })
    .min(10, {
      message: 'A descrição deve ter pelo menos 10 caracteres.',
    }),
});

type taskFormData = z.infer<typeof taskSchema>;

export default function AddTask() {
  const navigation = useNavigation<AppRoutesNavigationProps>();

  const theme = useTheme();
  const {tasks, setTasks} = useTasks();

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<taskFormData>({
    resolver: zodResolver(taskSchema),
  });

  const getNextId = (): number => {
    const lastTask = tasks.length > 0 ? tasks[tasks.length - 1] : null;
    const nextId = lastTask ? lastTask.id + 1 : 1;
    return nextId;
  };

  const handleAddTask = (data: taskFormData) => {
    const newTask: TaskProps = {
      id: getNextId(),
      title: data.title,
      description: data.description,
      completed: false,
    };

    setTasks([...tasks, newTask]);

    navigation.navigate('Home', {
      screen: 'ToDo',
    });
  };

  return (
    <Container>
      <Header>Add task</Header>
      <Controller
        control={control}
        name="title"
        rules={{
          required: true,
        }}
        render={({field: {onChange, onBlur}}) => (
          <Input
            placeholder="Digite o título da task"
            errorMessage={errors.title?.message}
            onChangeText={text => {
              onChange(text);
            }}
            onBlur={onBlur}
          />
        )}
      />

      <ContainerInput>
        <Controller
          control={control}
          name="description"
          rules={{
            required: true,
          }}
          render={({field: {onChange}}) => (
            <MyInputMultiLine
              placeholder="Digite a descrição"
              multiline
              numberOfLines={5}
              onChangeText={text => {
                onChange(text);
              }}
            />
          )}
        />
        {errors.description && (
          <ContainerInfo>
            <AlertCircle color={theme.colors.danger} size={16} />
            <TextInfo>{errors.description?.message}</TextInfo>
          </ContainerInfo>
        )}

        <Button
          title="Adicionar task"
          onPress={handleSubmit(handleAddTask)}
          style={{marginTop: 14}}
        />
      </ContainerInput>
    </Container>
  );
}
