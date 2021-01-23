import React from 'react';
import {useState} from 'react';

function Addtasks({onAdd}) {
    const [text,setText] = useState('');
    const [day,setDay] = useState('');
    const [reminder,setReminder] = useState(false);

    const onsubmit =(e) => {
        e.preventDefault();
        if(!text){
            alert('Please add a task');
            return;
        }
        onAdd({text,day,reminder});
        setText('');
        setDay('');
        setReminder(false);
    }
    return (
        <form className='add-form' onSubmit={onsubmit}>
            <div className = 'form-control'>
                <label>Task</label>
                <input type='text' placeholder= 'Add Task' value={text} onChange={(e) => setText(e.target.value)}></input>
            
            </div>
            <div className= 'form-control'>
                <label>Day</label>
                <input type='text' placeholder= 'Enter Date and Time' value={day} onChange={(e) =>setDay(e.target.value)} />
            </div>
            <div className= 'form-control form-control-check'>
                <label>Set reminder</label>
                <input type='checkbox' type='checkbox' checked={reminder} value={reminder} onChange={(e)=>setReminder(e.currentTarget.checked)}/>
            </div>
            <input type='submit' value ='Save Task' className='btn btn-block' />
        </form>
            
        
    )
}

export default Addtasks
