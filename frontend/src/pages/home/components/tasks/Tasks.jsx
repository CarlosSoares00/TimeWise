import * as T from './Tasks';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { Link } from 'react-router-dom'
import { IoAddOutline, IoTrash, IoOptionsOutline, IoReloadOutline, IoCloseCircleOutline, IoRadioButtonOffOutline, IoRadioButtonOnSharp  } from 'react-icons/io5';
import { FaRegCircle, FaRegCheckCircle } from 'react-icons/fa';
import { CiEdit } from 'react-icons/ci';

const options = [
  { name: 'Passos de Bebê', times: { 1: 10, 2: 5, 3: 10 } },
  { name: 'Popular', times: { 1: 20, 2: 5, 3: 15 } },
  { name: 'Médio', times: { 1: 40, 2: 8, 3: 20 } },
  { name: 'Extendido', times: { 1: 60, 2: 10, 3: 25 } }
];

function Tasks({ onSelectPomodoro }) {
  const [task, setTask] = useState([]);
  const [viewForm, setViewForm] = useState(false);
  const [nomeTarefa, setNomeTarefa] = useState('');
  const [editIndex, setEditIndex] = useState(null);
  const [personalizeModal, setPersonalizeModal] = useState(false)
  const [selectedOption, setSelectedOption] = useState(null);

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
  const handlePersonalizeOpen = () => {
    setPersonalizeModal(true) 
  }
  const handlePersonalizeClose = () => {
    setPersonalizeModal(false)
  }

  const handleSelectPomodoro = (option) => {
    onSelectPomodoro(option.times);
    setSelectedOption(option);
  };


  return (
    <T.TasksContainer>
      <T.Config>
          <T.Options>
            <i><IoOptionsOutline /></i>        
            <T.Option onClick={handlePersonalizeOpen}>Personalizar</T.Option>
          </T.Options>        
          <T.Options>
            <i><IoReloadOutline /></i>        
            <T.Option>Reiniciar</T.Option>
          </T.Options>        
          <T.Options>
            <Link to={"/projects"}>
              <T.Project>Escolher Projectos</T.Project>
            </Link>
          </T.Options>        
          <T.PersonalizeModal open={personalizeModal}>              
            <T.ModalHeader>
              <h3>Escolha o Nivel nivel de Foco</h3>
              <i><IoCloseCircleOutline onClick={handlePersonalizeClose} /></i>
            </T.ModalHeader>
            <T.FocusLevel>
            {options.map((option, index) => (
              <T.Level key={index} onClick={() =>  handleSelectPomodoro(option)}>
                  <T.OptionLevel>
                    <p>
                      {selectedOption === option ? <i><IoRadioButtonOnSharp  color="green" /></i>  : <i><IoRadioButtonOffOutline /></i>}
                      {option.name}
                    </p>
                    <span>
                    {option.times[1]}min . {option.times[2]}min . {option.times[3]}min
                    </span>

                  </T.OptionLevel>
              </T.Level>
            ))}
            </T.FocusLevel>
          </T.PersonalizeModal>
      </T.Config>

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


Tasks.propTypes = {
  onSelectPomodoro: PropTypes.shape({
    name: PropTypes.string.isRequired,
    focusTime: PropTypes.number.isRequired,
    shortBreak: PropTypes.number.isRequired,
    longBreak: PropTypes.number.isRequired
  })
};

export default Tasks;
