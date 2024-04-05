import * as H from './Home.js'
// import Goals from './components/goals/Goals.jsx'
import TimerFocus from './components/focus/TimerFocus.jsx'
import Tasks from './components/tasks/Tasks.jsx'


const Home = () => {

  return (
    <H.HomeContainer>

      <H.Main>
        <TimerFocus size={300} strokeWidth={10}/>
        <Tasks/>
      </H.Main>      
    </H.HomeContainer>
    
  )
}

export default Home
