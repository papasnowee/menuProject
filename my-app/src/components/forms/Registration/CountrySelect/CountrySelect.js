import Select from '../../../Select'
import React from 'react'
import options from './CountrySelectOptions'

export default ({ onChange }) => {
  return (
    <Select
      options={options}
      label="Гражданство"
      placeholder="Выберете страну"
      onChange={onChange}
    />
  )
}
