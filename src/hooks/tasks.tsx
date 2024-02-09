import {createContext, ReactNode, useContext, useState} from 'react';

export type TaskProps = {
  title: string;
  description: string;
};

interface TasksContextData {
  tasks: TaskProps[];
  setTasks: any;
}

interface TasksProviderProps {
  children: ReactNode;
}

const TasksContext = createContext<TasksContextData>({} as TasksContextData);

const TasksProvider: React.FC<TasksProviderProps> = ({children}) => {
  const [tasks, setTasks] = useState<TaskProps[]>([]);

  return (
    <TasksContext.Provider
      value={{
        tasks,
        setTasks,
      }}>
      {children}
    </TasksContext.Provider>
  );
};

function useTasks(): TasksContextData {
  const context = useContext(TasksContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export {TasksProvider, useTasks};
