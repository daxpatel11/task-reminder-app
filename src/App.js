import Header from './components/Header';
import { useState , useEffect} from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Tasks from './components/Tasks';
import Addtasks from './components/Addtasks';
import Footer from './components/Footer';
import About from './components/About';

function App() {
  const [showaddtask,Setshowaddtask] = useState(false);
  const  [tasks,setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      const tasksfromserver = await fetchTasks();
      setTasks(tasksfromserver);
      
    }
    getTasks()
  },[]); 
  
    const fetchTasks = async () => {
      const res = await fetch('http://localhost:5000/tasks');
      const data = await res.json();
   //   console.log(data);
      return data;
    }
    
    const fetchTask = async (id) => {
      const res = await fetch(`http://localhost:5000/tasks/${id}`);
      const data = await res.json();
   //   console.log(data);
      return data;
    }
    

const addtask = async (task) => {
  const res = await fetch('http://localhost:5000/tasks', {
    method: 'POST',
    headers : { 
      'content-type' : 'application/json',
    },
    body :JSON.stringify(task)

  });
  const data = await  res.json();
  setTasks([...tasks, data]);

}
  
  const deletetask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`,{
      method:'DELETE',
    });
    setTasks(tasks.filter((task) => task.id !== id));
  }

  const toggletask = async (id) => {
    const tasktotoggle = await fetchTask(id);
    const updTask = {...tasktotoggle, reminder : !tasktotoggle.reminder};
    const res = await fetch(`http://localhost:5000/tasks/${id}`,{
      method : 'PUT',
      headers : {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updTask)
    });
    const data = await res.json();

    setTasks(tasks.map((task) => task.id===id? { ...task ,reminder :data.reminder } :task));
  }
 
  return (
    <Router>
     <div className="container">
        <Header title = "Task Reminder App " onadd={() => Setshowaddtask(!showaddtask)} showadd={showaddtask}/> 
        
    
      <Route path='/' exact render={(props) => (
        <> 
           {  showaddtask &&  <Addtasks onAdd={addtask} />}
     { tasks.length >0 ? <Tasks tasks={tasks} onDelete={deletetask} onToggle ={toggletask} /> : <h4> No task to show. Add a task to get along .</h4> 
      }
        </>
      )}/>  
      <Route path='/about' component={About} />
      <Footer />
 </div>
 </Router>
  )
}

export default App;
