import styled from "styled-components";


export const TasksContainer = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    gap: 20px;
    flex-direction: column;
    align-items: center;
    justify-content: center;

`
export const Config = styled.ul`
  width: 100%;
  padding: 10px;
  background-color: rgba(0,0,0, 0.50);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 10px;

  position: relative;
`
export const Options = styled.li`
  list-style: none;
  color: #888;
  display: flex;
  gap: 5px;
  align-items: center;
  transition: all.4s ease-in-out;
  
  &:hover{
    cursor: pointer;
    color: #fff;
  }
`

export const Option = styled.p`
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer; 
`
export const PersonalizeModal = styled.div`
  position: absolute;
  top: 50px;
  right: 270px;
  z-index: 2;

  width: 350px;
  height: fit-content;
  border-radius: 10px;
  background-color: #111;
  padding: 15px;

  display: ${({open}) => (open ? 'flex' : 'none')};
  flex-direction: column;
  align-items: start;
  gap: 15px;
`
export const ModalHeader = styled.div`
  width: 100%;
  display: flex ;
  align-items: center;
  justify-content: space-between;
  i{
    display: flex;
    align-items: center;
    font-size: 22px;
    cursor: pointer;
  }

`

export const FocusLevel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  gap: 20px;
`
export const Level = styled.button`
  font-size: 16px;
  cursor: pointer;
`
export const OptionLevel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  


  p{
    font-weight: 700;
    display:flex ;
    align-items: center;
    gap: 10px;
    color: #fff;
    
    i{
      font-size: 22px;
    }
  }

  span{
    margin-top: 5px;
    padding-inline-start: 25px;
  }
`






























export const Project = styled.button`
  font-size: 16px;
  padding: 7px 10px;
  border-radius: 7px;
  
  color: #888;
  width: 100%;
  height: 100%;
  transition: .4s ease-in-out;
  cursor: pointer; 

  
  
  &:hover{
      color: #fff;
      background-color: rgb(0, 113, 255);
    }
`
export const Content = styled.div`
  width: 100%;
  padding: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  border-radius: 5px;
`
export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    h2{
    font-size: 25px;
    font-weight: bold;
    margin-bottom: 10px;
  }

  i{
    font-size: 25px;
    cursor: pointer;
  }
`
export const Tasks = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: column;
    gap:10px;
`
export const Task = styled.li`
    display: flex;
    gap: 5px;
    transition: all.4s;
    cursor: pointer;
    padding: 3px 0;

    &:hover{
        filter: brightness(1.2);
    }
`

export const AddTasks = styled.div`
  width: 100%;
  height: 50px;
  padding: 15px 10px;
  border-radius: 10px;
  font-size: 16px;
  border: 1px dashed #777;
  display: flex;
  gap: 10px;
  align-items: center;
  transition: all.4s ease-in-out;

  &:hover{
    background-color: rgba(255, 255, 255, 0.1);
    border: 1.5px dashed #fff;
    cursor: pointer;
  }


    i{
      display: flex;
      align-items: center;
      font-size: 24px;
    }
`
export const AddTaskForm = styled.form`
  padding: 15px;
  border-radius: 10px;
  border: 1px solid #999;

  display: flex;
  flex-direction: column;
  gap: 10px;
`
export const Input = styled.textarea`
  width: 100%;
  padding: 12px;
  font-size: 16px;
  color: #fff;

`
export const ButtonsContainer = styled.div`
  display: flex;
  gap: 10px; 
  align-items: center;

  button{
    padding: 7px 12px;
    border-radius: 10px;
    font-size: 15px;
    cursor: pointer;
  }
`
export const ButtonAdd = styled.button`
  background-color: rgb(0, 113, 255);
  color: #fff;
  transition: .4s ease-in;
  &:hover{
  filter: brightness(1.2);
 }
`
export const ButtonCancelar = styled.button`
 color: #777;
 transition: .4s ease-in;

 &:hover{
  color: #fff;
 }
`


export const ViewTask = styled.div`
  width: 100%;
`
export const List = styled.ul`
  list-style: none;
`
export const Item = styled.li`
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border: 1px solid #777;
  border-radius: 10px;
  transition: all.4 ease-in-out;
  &:hover{
    background-color: rgba(255,255,255, 0.1);
  }

  margin-bottom: 5px;
  word-wrap: break-word;
  gap: 10px;
`
export const NewTask= styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  button{
    color: #fff;
    font-size: 18px;
    display: flex;
    align-items: center;
  }
`
export const ButtonMore = styled.div`
  display: flex;
  gap: 7px;
  

  button{
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
    cursor: pointer;
    clip-path: circle();
    color: #777;

    &:hover{
      background-color: rgba(255, 255, 255, 0.30);
      color: #fff;
    }
  }
`

