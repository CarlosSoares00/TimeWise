import * as T from './Tasks'
import { IoEllipseOutline,IoAddCircleOutline } from "react-icons/io5";

const tasks = [
    { id: 1, nome: 'Tarefa 1', concluida: false },
    { id: 2, nome: 'Tarefa 2', concluida: false },
    { id: 3, nome: 'Tarefa 3', concluida: false }
]

function Tasks() {
  return (
    <T.TasksContainer>
          <T.Hour>
            <span>7:06 PM</span>
            <p>last set ended 18 min ago</p>
          </T.Hour>

          <T.Content>
            <T.Header>
                <h2>Tarefas</h2>
                <i><IoAddCircleOutline/></i>
            </T.Header>
            <T.Tasks>
                {
                    tasks.map(task =>(
                        <T.Task 
                        key={task.id}   
                        >
                            <i><IoEllipseOutline /></i> 
                            {task.nome}
                        </T.Task>
                    ))
                }

            </T.Tasks>
          </T.Content>
    </T.TasksContainer>
  )
}

export default Tasks
