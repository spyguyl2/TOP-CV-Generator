import Field from "./Field";

export default function Content () {
    const personalInfoLabels = [
        {name: 'First Name', type: 'text'},
        {name: 'Last Name', type: 'text'},
        {name: 'Email', type: 'email'}]

    return (
        <div className="content">
            <Field title={'General Info'} props={personalInfoLabels}/>
            <button className="newFieldButton">Create New Field</button>
        </div>
    );
}