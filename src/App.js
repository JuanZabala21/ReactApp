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

  deleteTask = (id) => {
    const newTasks = this.state.tasks.filter(task => task.id !== id);
    this.setState({tasks: newTasks}) 
  }

  checkDone = (id) => {
    const newTasks = this.state.tasks.map(task =>{
      if (task.id === id) {
        task.done = !task.done
      }
      return task;
    })
    this.setState({tasks: newTasks})
  }

  render() {
    return <div>
    <TaskForms addTask={this.addTask}/>
    <Tasks 
    tasks={this.state.tasks} 
    deleteTask={this.deleteTask} 
    checkDone={this.checkDone} />
    </div> 
  }
}

export default App;
