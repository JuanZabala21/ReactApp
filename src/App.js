import React, {Component} from 'react';
import './App.css';
import tasks from './example/task.json';

import Tasks from './components/Tasks';
import TaskForms from './components/TaskForms'; 



class App extends Component {
  
  state = {
    tasks: tasks
  }

  addTask = (title, description) => {
    const newTask = {

      title: title, 
      description: description, 
      id: this.state.tasks.length
    }
    this.setState({
      tasks: [...this.state.tasks, newTask]


    })
  }

  render() {
    return <div>
    <TaskForms addTask={this.addTask}/>
    <Tasks tasks={this.state.tasks}/>
    </div> 
  }
}
export default App;
