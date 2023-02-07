
function Taskovi() {

    let taskovi = [
        { id: 1, naslov: 'Task 1', opis: 'Opis taska 1', tezina: 'medium' },
        { id: 2, naslov: 'Task 2', opis: 'Opis taska 2', tezina: 'medium' },
        { id: 3, naslov: 'Task 3', opis: 'Opis taska 3', tezina: 'hard' }
    ]

    return (
        <div>

            <h1>Taskovi</h1>

            {
                taskovi.map((task) => (
                    <div className="task" key={task.id}>
                        <h3>{task.naslov}</h3>
                        <h3>{task.opis}</h3>
                        <h3>{task.tezina}</h3>
                    </div>
                ))
            }


        </div>
    )
}

export default Taskovi;