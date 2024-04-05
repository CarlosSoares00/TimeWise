import styled from "styled-components";


export const GoalContainer = styled.div`
    width: 100%;
    padding-inline: 50px;
    display: flex;
    flex-direction: column;
    gap: 20px;
`
export const Header = styled.div`
    width: fit-content;
    padding-block: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;

    h2{
        font-size: 40px;
    }
`

export const ButtonProject = styled.button`
    padding: 7px 15px;
    border-radius: 10px;
    font-size: 18px;
    background-color: rgba(0,0,0, 0.50);
    cursor: pointer; 
    color:#fff;    

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;    
`


export const Filter = styled.div`
    width: 100%;
    height: fit-content;
    background-color: #1a1a1a;
    display: flex;
    flex-direction: column;
    gap: 30px;
`
export const Form = styled.form`
    display: flex;
    gap: 10px;
    align-items: center;
`
export const Input = styled.input`
    width: 350px;
    padding: 10px 15px;
    font-size: 18px;
    border-radius: 10px 3px 3px 10px;
    background-color: rgba(255,255,255, .15);
    color:#fff;    
`
export const Select = styled.select`
    width: fit-content;
    padding: 7px;
    font-size: 18px;
    border-radius: 3px;
    background-color: rgba(255,255,255, .15);
    color: #fff;
    
    option{
        color: #fff;
        background-color: #1e1e1e;
        border: none;
    }
`
export const ButtonSubmit = styled.button`
    width: fit-content;
    padding: 7px;
    font-size: 18px;
    border-radius: 7px;
    color: #000;
    background-color: #fff;
`
export const ProjectContainer = styled.div`
    width: 100%;
    height: fit-content;
    padding-bottom: 10px;
    display: grid;
    gap: 10px;
    
`
export const Project = styled.div`
    width: fit-content;   
    padding: 10px;
    border-radius: 10px;
    background-color: rgba(255,255,255, .05);
    
    display: flex;
    align-items: center;

    span{
        font-size: 14px;
        font-weight: bold;
        color: rgba(255,255,255, .40);
    }
`
export const Name = styled.div`
    width: 250px;
`
export const Categorie = styled.div`
    width: 250px;
`
export const Status = styled.div`
    width: 250px;
`
export const TimeTotal = styled.div`
    width: 120px;
`
export const Icon = styled.i`
    cursor: pointer;
`