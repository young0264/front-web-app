
import { SetStateAction } from "react"
import "./InputComponent.css"

interface IProps {
    text: string
    setText: React.Dispatch<SetStateAction<string>>
}

const InputComponent = (props: IProps) => {
    return (
        <input className="inputBox" type="text" value={props.text} onChange={(evt) => props.setText(evt.target.value)}></input>
    )
}

export default InputComponent