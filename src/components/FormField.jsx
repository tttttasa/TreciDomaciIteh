
function FormField(props) {

    return (
        <div>
            <label>{props.labelText}: &nbsp;</label>
            <input type={props.type} />
        </div>
    )
}

export default FormField;