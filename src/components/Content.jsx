import Field from "./Field";

export default function Content () {
    const personalInfoLabels = ['First Name', 'Last Name'];

    return (
        <>
            <Field title={'Personal Info'} inputNames={personalInfoLabels}/>
            <button>+</button>
        </>
    );
}