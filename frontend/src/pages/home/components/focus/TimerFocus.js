import styled from "styled-components";

export const TimerContainer = styled.div`
  
  padding: 1px;
`;
export const Focus = styled.div`
  width: 100%;
  height: 68vh;
  display: flex;
  gap: 25px;
  flex-direction: column;
  align-items: center;
  justify-content: center;

`;
export const Details = styled.ul`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  

`;
export const Detail = styled.li`
  list-style: none;
  font-size: 18px;
  cursor: pointer;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #555;
  gap: 5px;

  &:hover{
    color: #fff;
  }
`;
export const ProgressBarContainer = styled.button`
  position: relative;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  border-radius: 50%;
  background-color: #1a1a1a;
  transition: all.4s ease-in-out;
`;
export const Expand = styled.button`
  position: absolute;
  top: 185px;
  left: 100px;

  color: #777;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #1a1a1a;
  width: 100px;
  font-size: 20px;
  
  span{
    
  }
  p{
    border-radius: 10px;
    background-color: #1a1a1a;
    padding: 5px 40px;
    font-size: 18px;
    

    &:hover{
      color: #fff;
      cursor: pointer;
    }
    }  
`
export const CircleBackground = styled.circle`
  fill: none;
  stroke: #f0f0f0;
  stroke-width: ${props => props.strokeWidth}px;
`;
export const CircleProgress = styled.circle`
  fill: none;
  stroke: rgba(0, 113, 255);
  stroke-width: ${props => props.strokeWidth}px;
  stroke-linecap: round;
  stroke-dasharray: ${props => props.circumference};
  stroke-dashoffset: ${props => props.progressOffset};
  transition: stroke-dashoffset 0.3s;
`;
export const Text = styled.text`
  fill: #fff;
  font-size: 60px;
  font-weight: bold;
  text-anchor: middle;
`;
export const Info = styled.div`
  width: 100%;
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;

  button {
    width: 150px;
    font-size: 16px;
    padding: 5px 15px;
    border-radius: 10px;
    cursor: pointer;
    border: none;
    background-color: #1a1a1a;
    color: #777;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
    transition: .4s ease-in-out;

    &:hover {
      filter: brightness(1.9);
    }
  }
`;
