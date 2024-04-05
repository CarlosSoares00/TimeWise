import { useState } from 'react';
import { IoAddCircleOutline } from 'react-icons/io5'
import * as G from './Goals'


const DEFAULT_OPTION_CATEGORIES = [ "Estudo", "Foco", "Trabalho" ]
const DEFAULT_OPTION_STATUS = ["Em Progresso", "Concluído", "Atrasado"];
const DEFAULT_PROJECTS = [
    {
        id: 0,
        name:"Estudar Programação",
        categorie:"Estudo",
        status: "Em Processo",
        time: "120 min"
    },
    {
        id: 1,
        name:"Trabalhar no Computador",
        categorie:"Trabalho",
        status: "Completo",
        time: "240 min"
    },
]

function Goals() {
    const [nomeProjeto, setNomeProjeto] = useState('');
    const [categoriaSelecionada, setCategoriaSelecionada] = useState('');
    const [statusSelecionado, setStatusSelecionado] = useState('');

    // Função para lidar com a submissão do formulário
    const handleSubmit = (e) => {
        e.preventDefault();
    // Aqui você pode enviar os dados do formulário para onde for necessário
        console.log('Nome do Projeto:', nomeProjeto);
        console.log('Categoria Selecionada:', categoriaSelecionada);
        console.log('Status Selecionado:', statusSelecionado);
    };

  return (
    <G.GoalContainer>
        <G.Header>
            <h2>Projectos </h2>
            <G.ButtonProject>
                <span>Novo Projecto</span>
                <IoAddCircleOutline/>
            </G.ButtonProject>
            
        </G.Header>
            
        <G.Filter>
            <G.Form onSubmit={handleSubmit}>
                <G.Input 
                type="text"
                id="nomeProjeto"
                value={nomeProjeto}
                onChange={(e) => setNomeProjeto(e.target.value)}
                placeholder='Procure o projecto pelo nome...'/>

                <G.Select 
                id="categoria"
                value={categoriaSelecionada}
                onChange={(e) => setCategoriaSelecionada(e.target.value)}
                >
                    <option value="">Selecione uma categoria...</option>
                        {DEFAULT_OPTION_CATEGORIES.map((categoria, index) => (
                            <option key={index} value={categoria}>
                                {categoria}
                            </option>
            ))}
                </G.Select>
                
                <G.Select 
                 id="status"
                 value={statusSelecionado}
                 onChange={(e) => setStatusSelecionado(e.target.value)}
                 >
                    <option value="">Selecione um status...</option>
                    {DEFAULT_OPTION_STATUS.map((estado, index) => (
                    <option key={index} value={estado}>
                    {estado}
                    </option>
                    ))}
                </G.Select>
                <G.ButtonSubmit type="submit">Procurar</G.ButtonSubmit>
            </G.Form>

            <G.ProjectContainer>
                    {
                        DEFAULT_PROJECTS.map((project) => (
                            <G.Project key={project.id}>
                                <G.Name>
                                    <span>Projecto</span>
                                    <p>{project.name}</p>
                                </G.Name>
                                <G.Categorie>
                                    <span>Categoria</span>
                                    <p>{project.categorie}</p>
                                </G.Categorie>
                                <G.Status>
                                    <span>Status</span>
                                    <p>{project.status}</p>
                                </G.Status>
                                <G.TimeTotal>
                                    <span>Tempo Total</span>
                                    <p>{project.time}</p>
                                </G.TimeTotal>

                                <G.Icon>...</G.Icon>
                                
                            </G.Project>
                        ))
                    }
            </G.ProjectContainer>
        </G.Filter>
    </G.GoalContainer>
  )
}

export default Goals
