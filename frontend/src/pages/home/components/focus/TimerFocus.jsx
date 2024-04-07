import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import * as T from './TimerFocus';

const DEFAULT_TIMES = {
  1: 25,   // Tempo padrão para pomodoro (25 minutos)
  2: 5,    // Tempo para descanso curto (5 minutos)
  3: 15    // Tempo para descanso longo (15 minutos)
};

function TimerFocus({ size, strokeWidth, selectedPomodoro }) {
  const [selectPomodoroLocal, setSelectPomodoroLocal] = useState(DEFAULT_TIMES);
  const [itemSelect, setItemSelect] = useState(1);
  const [progress, setProgress] = useState(0);
  const [selectedTime, setSelectedTime] = useState(selectPomodoroLocal[1] * 60);
  const [timeRemaining, setTimeRemaining] = useState(selectedTime);
  const [timerRunning, setTimerRunning] = useState(false);
  const [showIntervalButton, setShowIntervalButton] = useState(false);
  const [pomodoroCount, setPomodoroCount] = useState(0);
  const [shortBreakCount, setShortBreakCount] = useState(0);
  const [longBreakCount, setLongBreakCount] = useState(0);

  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const progressOffset = circumference - (progress / 100) * circumference;

  useEffect(() => {
    if (selectedPomodoro) {
      setSelectPomodoroLocal(selectedPomodoro);
      // Remover as seguintes linhas
      // setSelectedTime(selectedPomodoro.focusTime * 60);
      // setTimeRemaining(selectedPomodoro.focusTime * 60);
      setProgress(0);
      console.log('Pomodoro selecionado:', selectedPomodoro);
    }
  }, [selectedPomodoro]);

  
  useEffect(() => {
    if (selectedPomodoro) {
      setSelectedTime(selectedPomodoro[itemSelect] * 60);
      setTimeRemaining(selectedPomodoro[itemSelect] * 60);
    }
  }, [itemSelect, selectedPomodoro]);


  useEffect(() => {
    let interval;
    if (timerRunning) {
      interval = setInterval(() => {
        if (timeRemaining > 0) {
          setProgress(100 - (timeRemaining / selectedTime) * 100);
          setTimeRemaining(prevTime => prevTime - 1);
        } else {
          clearInterval(interval);
          setTimerRunning(false);
          setShowIntervalButton(true);
          switch (itemSelect) {
            case 1:
              setPomodoroCount(prevCount => prevCount + 1);
              break;
            case 2:
              setShortBreakCount(prevCount => prevCount + 1);
              break;
            case 3:
              setLongBreakCount(prevCount => prevCount + 1);
              break;
            default:
              break;
          }
        }
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timerRunning, itemSelect, timeRemaining, selectedTime]);

  const handleClick = (id, time) => {
    setItemSelect(id);
    setSelectedTime(time * 60);
    setTimeRemaining(time * 60);
    setProgress(0);
  };

  const handleStart = () => {
    setTimerRunning(true);
  };

  const handlePause = () => {
    setTimerRunning(false);
  };

  const handleStop = () => {
    setTimerRunning(false);
    setProgress(0);
    setTimeRemaining(selectedTime);
    setShowIntervalButton(false);
  };

  return (
    <T.TimerContainer>
      <T.Focus>
        <T.Details>
          <T.Detail
            onClick={() => handleClick(1, selectPomodoroLocal[1])}
            style={{ borderBottom: itemSelect === 1 ? '1px solid #fff' : '0' }}
          >
            Pomodoro <span>({pomodoroCount})</span>
          </T.Detail>
          <T.Detail
            onClick={() => handleClick(2, selectPomodoroLocal[2])}
            style={{ borderBottom: itemSelect === 2 ? '1px solid #fff' : '0' }}
          >
            Descanso Curto <span>({shortBreakCount})</span>
          </T.Detail>
          <T.Detail
            onClick={() => handleClick(3, selectPomodoroLocal[3])}
            style={{ borderBottom: itemSelect === 3 ? '1px solid #fff' : '0' }}
          >
            Longo Descanso <span>({longBreakCount})</span>
          </T.Detail>
        </T.Details>

        <T.ProgressBarContainer size={size}>
          <svg viewBox={`0 0 ${size} ${size}`}>
            <T.CircleBackground
              cx={size / 2}
              cy={size / 2}
              r={radius}
              strokeWidth={strokeWidth}
            />
            <T.CircleProgress
              cx={size / 2}
              cy={size / 2}
              r={radius}
              strokeWidth={strokeWidth}
              circumference={circumference}
              progressOffset={progressOffset}
            />
            <T.Text x={size / 2} y={size / 2}>
              {`${Math.floor(timeRemaining / 60).toString().padStart(2, '0')}:${(timeRemaining % 60)
                .toString()
                .padStart(2, '0')}`}
            </T.Text>
          </svg>

          <T.Expand>
            <span>Nível</span>
            <p>Popular</p>
          </T.Expand>
        </T.ProgressBarContainer>

        <T.Info>
          {!timerRunning && !showIntervalButton && (
            <button onClick={handleStart}>Iniciar</button>
          )}
          {timerRunning && (
            <button onClick={handlePause}>Pausar</button>
          )}
          <button onClick={handleStop}>Parar</button>
        </T.Info>
      </T.Focus>
    </T.TimerContainer>
  );
}

TimerFocus.propTypes = {
  size: PropTypes.number.isRequired,
  strokeWidth: PropTypes.number.isRequired,
  selectedPomodoro: PropTypes.shape({
    name: PropTypes.string.isRequired,
    focusTime: PropTypes.number.isRequired,
    shortBreak: PropTypes.number.isRequired,
    longBreak: PropTypes.number.isRequired
  })
};

export default TimerFocus;
