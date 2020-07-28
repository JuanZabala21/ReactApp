import React, {Component} from 'react';
import './App.css';
import tasks from './example/task.json';

import Tasks from './components/Tasks';
import TaskForms from './components/TaskForms'; 



class App extends Component {
  
  state = {
    tasks: tasks
  }

  render() {
    return <div>
    <TaskForms/>
    <Tasks tasks={this.state.tasks}/>
    </div> 
  }
}
export default App;
