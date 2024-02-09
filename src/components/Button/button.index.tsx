import {ContainerButton, TextButton} from './button.styles';

export default function Button({title, ...props}: any) {
  return (
    <ContainerButton {...props}>
      <TextButton>{title}</TextButton>
    </ContainerButton>
  );
}
