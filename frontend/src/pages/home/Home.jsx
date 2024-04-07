import { useState } from 'react';
import * as H from './Home.js'
import TimerFocus from './components/focus/TimerFocus.jsx'
import Tasks from './components/tasks/Tasks.jsx'


const Home = () => {

  const [selectedPomodoro, setSelectedPomodoro] = useState(null);

  const handleSelectPomodoro = (pomodoro) => {
    setSelectedPomodoro(pomodoro);
  };

  return (
    <H.HomeContainer>

      <H.Main>
        <TimerFocus size={300} strokeWidth={10} selectedPomodoro={selectedPomodoro} />
        <Tasks onSelectPomodoro={handleSelectPomodoro}/>
      </H.Main>      
    </H.HomeContainer>
    
  )
}

export default Home
