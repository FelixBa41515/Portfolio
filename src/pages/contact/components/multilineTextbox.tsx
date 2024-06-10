import {FunctionComponent} from 'react'
import {TextField} from '@mui/material'

interface MultilineTextboxProps {
    label: string
    placeholder: string
    name: string
    value: string
    changeHandler: (newValue: string) => void
}

const MultilineTextbox: FunctionComponent<MultilineTextboxProps> = ({placeholder, label, name, value, changeHandler}) => {
    return (
        <TextField
            fullWidth
            required
            sx={{marginTop:2}}
            id="outlined-multiline-static"
            label={label}
            multiline
            rows={4}
            placeholder={placeholder}
            name={name}
            value ={value}
            onChange={(evt)=>changeHandler(evt.currentTarget.value)}
        />
    )
}

export default MultilineTextbox
