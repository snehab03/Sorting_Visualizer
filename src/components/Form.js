import React from 'react'
import { FormControl,FormControlLabel,FormLabel,Radio,RadioGroup } from '@material-ui/core' ;
export default function Form({formLabel,values,onChange,currentValue,labels}) {
  return (
    <div className="container-small card" style={{backgroundColor:'#a7a1bd',padding:'1em 1em'}}>
        <FormControl>
            <FormLabel>{formLabel}</FormLabel>
            <RadioGroup value={currentValue} onChange={onChange}>
                {values.map((value,index)=>(
                <FormControlLabel key={`${value}_${index}`} value={value} control={<Radio/>} label={labels[index]}/>
            ))}
            </RadioGroup>
        </FormControl>
    </div>
  )
}
