import Toggle from "./Toggle";

export default function Header ({togglePreview}) {
    return <Toggle handleCheck={togglePreview} id="Preview Toggle"/>
}