import React from 'react'
import { useState, useEffect } from 'react'
import { CustomSelect } from './CustomSelect'
import { Search } from './Search'
import styled from 'styled-components'

const options = [
  { value: 'Africa', label: 'Africa' },
  { value: 'America', label: 'America' },
  { value: 'Asia', label: 'Asia' },
  { value: 'Europe', label: 'Europe' },
  { value: 'Oceania', label: 'Oceania' },
]

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`

export const Controls = ({ onSearch }) => {
  const [search, setSearch] = useState('')
  const [region, setRegion] = useState('')

  useEffect(() => {
    console.log(region)
    const regionValue = region?.value || ''
    onSearch(search, regionValue)
  }, [search, region])

  return (
    <Wrapper>
      <Search search={search} setSearch={setSearch} />
      <CustomSelect
        options={options}
        placeholder="Filter by Region"
        isClearable
        isSearchable={false}
        value={region}
        onChange={setRegion}
      />
    </Wrapper>
  )
}
