import React from 'react'
import Select from 'react-select'

const SelectInput = ({ defaultValue, options}) => {
  return (
    <Select defaultValue={defaultValue} options={options} />
  )
}

export default SelectInput