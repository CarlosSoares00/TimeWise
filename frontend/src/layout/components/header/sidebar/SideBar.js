import styled from 'styled-components'


export const SidebarContainer = styled.div`
    height: 100vh;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
`

export const Icons = styled.ul`
    width: 100%;
`

export const Icon = styled.li`
    color: #fff;
    padding: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: .4s ease-in-out;
    i{
        font-size: 30px;
    }
    a{
    color: #fff;
    }
    
    &:hover{
        background-color: #333;
    }
`

