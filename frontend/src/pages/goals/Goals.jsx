import { IoAddCircleOutline } from 'react-icons/io5'
import * as G from './Goals'


const DEFAULT_OPTION_CATEGORIES = [ "Estudo", "Foco", "Trabalho" ]
const DEFAULT_OPTION_STATUS = [ "Em Progresso", "Completado"]
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
            <G.Form>
                <G.Input type="text" placeholder='Procure o porjecto pelo nome'/>
                <G.Select name="" id="">
                    {DEFAULT_OPTION_CATEGORIES.map(option => (
                        <option key={option} value={option}>{option}</option> 
                    ))}
                </G.Select>
                <G.Select name="" id="">
                    {DEFAULT_OPTION_STATUS.map(option => (
                        <option key={option} value={"Ola"}>{option}</option> 
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
