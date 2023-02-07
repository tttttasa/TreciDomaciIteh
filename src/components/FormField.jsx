
function FormField(props) {

    return (
        <div>
            <label>{props.labelText}: &nbsp;</label>
            <input type={props.type} onChange={(e) => props.funkcija(e.target.value)} />
        </div>
    )
}

export default FormField;