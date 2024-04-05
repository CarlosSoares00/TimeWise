import styled from "styled-components";

export const GoalContainer = styled.div`    
    display: grid;
    gap: 50px;
`
export const Goals = styled.div`
    width: 100%;
    height: fit-content;
		padding: 10px;
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);

`
export const CategoryGoal = styled.div`
    font-size: 20px;
    font-weight: 700;
    color: #999;
		margin-bottom: 5px;

    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const Icons = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 5px;
	
	i{
    
		font-size: 25px;
		cursor: pointer;
		transition: .4s ease-in;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 5px; 
    a{
      color: #999;
    }

		&:hover{
			color: #fff;
		}
    }
`

// Barra de Progresso
export const ProgressAll = styled.div`
    display: flex;
    flex-direction: column;

`
export const ProgressBarContainer = styled.div`
  width: 100%;
  height: 30px;
  background-color: rgba(255,255,255, .1);
  color: #fff;
  border-radius: 5px;
  margin-bottom: 10px;
  position: relative;
  cursor: pointer;

  .progress{
    height: 100%;
    background-color: #007bff;
    border-radius: 5px;
    position: absolute;
  }
`;
export const Progress = styled.div`
  
`;
export const ProgressInfo = styled.div`
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  font-weight: bold;
`;
export const ProgressName = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-weight: bold;
`;
export const ProgressDuration = styled.div`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  font-weight: bold;
`;
export const WeekDay = styled.div`
  width: 100%;
	height: 40px;
	background-color: rgba(0,0,0, 0.50);
	color: #fff;
	border-radius: 5px;
	overflow: hidden;
	margin-bottom: 10px;
	display: flex;
	align-items: center;
	justify-content: space-around;


	span{
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		transition: .4s ease-in;
		
		&:hover{
			background-color: rgba(255,255,255, .1);
		}
	}
`;