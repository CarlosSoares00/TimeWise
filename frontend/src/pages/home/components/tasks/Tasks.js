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

export const Hour = styled.div`
  width: 100%;
  padding: 15px;
  background-color: rgba(0,0,0, 0.50);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;


  span{
    font-size: 30px;
    font-weight: bold;
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
    font-size: 20px;
    font-weight: 400;
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