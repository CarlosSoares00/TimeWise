import * as T from './Tasks';
import { useState } from 'react';
import { IoAddOutline, IoTrash } from 'react-icons/io5';
import { FaRegCircle, FaRegCheckCircle } from 'react-icons/fa';
import { CiEdit } from 'react-icons/ci';

function Tasks() {
  const [task, setTask] = useState([]);
  const [viewForm, setViewForm] = useState(false);
  const [nomeTarefa, setNomeTarefa] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  const handleAdicionarTarefa = () => {
    setViewForm(true);
    setEditIndex(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editIndex !== null) {
      const novasTarefas = [...task];
      novasTarefas[editIndex].nome = nomeTarefa;
      setTask(novasTarefas);
    } else {
      const novaTarefa = { nome: nomeTarefa, concluida: false };
      setTask([...task, novaTarefa]);
    }
    setNomeTarefa('');
    setViewForm(false);
  };

  const toggleConcluirTarefa = (index) => {
    const novasTarefas = [...task];
    novasTarefas[index] = { ...novasTarefas[index], concluida: !novasTarefas[index].concluida };
    setTask(novasTarefas);
  };

  const handleEditarTarefa = (index) => {
    setNomeTarefa(task[index].nome);
    setEditIndex(index);
    setViewForm(true);
  };

  const handleExcluirTarefa = (index) => {
    const novasTarefas = [...task];
    novasTarefas.splice(index, 1);
    setTask(novasTarefas);
  };

  return (
    <T.TasksContainer>
      <T.Hour>
        <span>7:06 PM</span>
        <p>{task.filter((tarefa) => tarefa.concluida).length} tarefa(s) concluída(s)</p>
      </T.Hour>

      <T.Content>
        <T.Header>
          <h2>Tarefas</h2>
          <i><IoAddOutline /></i>
        </T.Header>

        <T.Tasks>
          {!viewForm ? (
            <T.AddTasks onClick={handleAdicionarTarefa}>
              <i><IoAddOutline /></i>
              Adicionar Tarefa
            </T.AddTasks>
          ) : (
            <T.AddTaskForm onSubmit={handleSubmit}>
              <T.Input
                type="text"
                placeholder="Descrição desta Tarefa"
                value={nomeTarefa}
                rows={1}
                onChange={(e) => setNomeTarefa(e.target.value)}
              />

              <T.ButtonsContainer>
                <T.ButtonAdd type="submit">Adicionar</T.ButtonAdd>
                <T.ButtonCancelar type="button" onClick={() => setViewForm(false)}>Cancelar</T.ButtonCancelar>
              </T.ButtonsContainer>
            </T.AddTaskForm>
          )}

          <T.ViewTask>
            <T.List>
              {task.map((tarefa, index) => (
                <T.Item
                  key={index}
                  style={{ textDecoration: tarefa.concluida ? 'line-through' : 'none' }}
                >
                  <T.NewTask>
                    <button onClick={() => toggleConcluirTarefa(index)}>
                      {tarefa.concluida ? <FaRegCheckCircle /> : <FaRegCircle />}
                    </button>
                    {tarefa.nome}
                  </T.NewTask>

                  <T.ButtonMore>
                    <button onClick={() => handleExcluirTarefa(index)}><IoTrash /></button>
                    <button onClick={() => handleEditarTarefa(index)}><CiEdit /></button>
                  </T.ButtonMore>
                </T.Item>
              ))}
            </T.List>
          </T.ViewTask>
        </T.Tasks>

      </T.Content>
    </T.TasksContainer>
  );
}

export default Tasks;
