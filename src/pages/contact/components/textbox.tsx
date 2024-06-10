import {FunctionComponent} from 'react'
import {TextField} from '@mui/material'

interface TextboxProps {
    label: string
    placeholder: string
    name: string
    value: string
    changeHandler: (newValue: string) => void
    type: string
}

const Textbox: FunctionComponent<TextboxProps> = ({type, placeholder, label, name, value, changeHandler}) => {
    return (
        <TextField
            fullWidth
            sx={{marginTop: 2}}
            required
            id="outlined-required-color"
            label={label}
            placeholder={placeholder}
            name={name}
            value={value}
            type={type}
            onChange={(evt)=>changeHandler(evt.currentTarget.value)}
        />

    )
}

export default Textbox
