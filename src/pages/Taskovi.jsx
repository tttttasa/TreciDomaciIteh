import FormField from "../components/FormField";
import { useState } from 'react';


function Taskovi() {

    const [taskovi, setTaskovi] = useState([
        { id: 1, naslov: 'Task 1', opis: 'Opis taska 1', tezina: 'medium' },
        { id: 2, naslov: 'Task 2', opis: 'Opis taska 2', tezina: 'medium' },
        { id: 3, naslov: 'Task 3', opis: 'Opis taska 3', tezina: 'hard' }
    ]);

    const [niz, setNiz] = useState(taskovi)


    function filterTask(e) {
        let test = taskovi.filter(function (task) {
            return task.tezina == e.target.value;
        });

        setNiz(test)
    }


    return (
        <div>

            <h1 className="mt-3 mb-4">Taskovi</h1>

            <select onChange={filterTask} className="form-select" id="filter_select">
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
            </select>

            {
                niz.map((task) => (
                    <div className="task" key={task.id}>
                        <h3>{task.naslov}</h3>
                        <h3>{task.opis}</h3>
                        <h3>{task.tezina}</h3>
                    </div>
                ))
            }

            <hr />

            <FormField type="text" labelText="Naslov" />

            <label id="lbl">Opis: </label>
            <textarea id="tekst" cols="35" rows="8"></textarea>
            <button type="button" className="btn btn-dark mt-3" id="btn">Dodaj task</button>


        </div>
    )
}

export default Taskovi;