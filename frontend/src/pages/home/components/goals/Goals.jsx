import { Link } from 'react-router-dom';
import * as G from './Goals.js'
import { IoExpandOutline } from "react-icons/io5";

function Goals() {

  return (
    <G.GoalContainer>
      <G.Goals>
        <G.CategoryGoal>
          <G.CategoryGoal>Hoje (2)</G.CategoryGoal>
            <G.Icons>
              <i>
                <Link to="/projects"><IoExpandOutline /></Link>
              </i>
            </G.Icons>
          </G.CategoryGoal>

          <G.ProgressAll>
            <G.ProgressBarContainer>
              <div className="progress" style={{ width: '60%'}}/>
                <G.ProgressInfo>60%</G.ProgressInfo>
                <G.ProgressName>Portugues</G.ProgressName>
                <G.ProgressDuration>30 min</G.ProgressDuration>
            </G.ProgressBarContainer>
            <G.ProgressBarContainer>
              <div className="progress" style={{ width: '90%'}}/>
                <G.ProgressInfo>90%</G.ProgressInfo>
                <G.ProgressName>Estudar</G.ProgressName>
                <G.ProgressDuration>15 min</G.ProgressDuration>
              </G.ProgressBarContainer>
              <G.ProgressBarContainer>
                <div className="progress" style={{ width: '30%'}}/>
                <G.ProgressInfo>30%</G.ProgressInfo>
                <G.ProgressName>Foco</G.ProgressName>
                <G.ProgressDuration>90 min</G.ProgressDuration>
              </G.ProgressBarContainer>
          </G.ProgressAll>

          </G.Goals>
          <G.Goals>
            <G.CategoryGoal>
              <G.CategoryGoal>Semana (9)</G.CategoryGoal>
              <G.Icons>
              <i>
                <Link to="/projects"><IoExpandOutline /></Link>
              </i>
            </G.Icons>
            </G.CategoryGoal>

            <G.ProgressAll>

              <G.WeekDay>
                <span>S</span>
                <span>T</span>
                <span>Q</span>
                <span>Q</span>
                <span>S</span>
                <span>S</span>
                <span>D</span>
              </G.WeekDay>

              <G.ProgressBarContainer>
              <div className="progress" style={{ width: '60%'}}/>
                <G.ProgressInfo>60%</G.ProgressInfo>
                <G.ProgressName>Portugues</G.ProgressName>
                <G.ProgressDuration>3h</G.ProgressDuration>
              </G.ProgressBarContainer>
              <G.ProgressBarContainer>
              <div className="progress" style={{ width: '70%'}}/>
                <G.ProgressInfo>70%</G.ProgressInfo>
                <G.ProgressName>Estudar</G.ProgressName>
                <G.ProgressDuration>15 min</G.ProgressDuration>
              </G.ProgressBarContainer>
              <G.ProgressBarContainer>
                <div className="progress" style={{ width: '40%'}}/>
                <G.ProgressInfo>40%</G.ProgressInfo>
                <G.ProgressName>Foco</G.ProgressName>
                <G.ProgressDuration>4h</G.ProgressDuration>
              </G.ProgressBarContainer>
              <G.ProgressBarContainer>
                <div className="progress" style={{ width: '20%'}}/>
                <G.ProgressInfo>20%</G.ProgressInfo>
                <G.ProgressName>Motivacao</G.ProgressName>
                <G.ProgressDuration>90 min</G.ProgressDuration>
              </G.ProgressBarContainer>
            </G.ProgressAll>

          </G.Goals>
    </G.GoalContainer>
    
  )
}

export default Goals
