import styled from 'styled-components/native';

interface ITaskItemTitle {
  completed: boolean;
}

export const ContainerTaskItem = styled.View`
  position: relative;

  padding: 16px;

  margin-bottom: 12px;

  border-radius: 8px;
  border: 1px solid ${({theme}) => theme.colors.background_secondary};
`;

export const TaskItemTitle = styled.Text<ITaskItemTitle>`
  font-family: ${({theme}) => theme.fonts.bold};
  font-size: 16px;

  text-decoration: ${({completed}) => (completed ? 'line-through' : 'none')};

  color: ${({theme}) => theme.colors.black};
`;

export const TaskItemDescription = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  font-size: 12px;
  color: ${({theme}) => theme.colors.gray};

  margin-top: 8px;
`;

export const ContainerActions = styled.View`
  flex-direction: row;
`;

export const ActionButton = styled.TouchableOpacity`
  width: 32px;
  height: 32px;

  margin-top: 12px;
`;

export const Completed = styled.View`
  position: absolute;
  top: 10px;
  right: 10px;
`;
