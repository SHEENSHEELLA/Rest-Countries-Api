import React from 'react'
import { InfoDetailsListGroup } from './InfoDetailsListGroup'
import { InfoDetailsList } from './InfoDetailsList'
import { InfoDetailsListItem } from './InfoDetailsListItem'

export const InfoList = ({ tld, currencies, languages }) => {
  return (
    <InfoDetailsListGroup>
      <InfoDetailsList>
        <InfoDetailsListItem>
          <b>Top Level Domain:</b>
          {tld.map((d) => (
            <span key={d}> {d}</span>
          ))}
        </InfoDetailsListItem>
        <InfoDetailsListItem>
          <b>Currency:</b>
          {/* {currencies.map((c) => (
          <span key={c.code}>{c.name}</span>
        ))} */}
          {Object.keys(currencies).map((symbol) => (
            <span key={symbol}> {currencies[symbol].name}</span>
          ))}
        </InfoDetailsListItem>
        <InfoDetailsListItem>
          <b>Languages:</b>
          {/* {languages.map((l) => (
          <span key={l.symbol}>{l.name}</span>
        ))} */}
          {Object.keys(languages).map((key) => (
            <span key={key}> {languages[key]}</span>
          ))}
        </InfoDetailsListItem>
      </InfoDetailsList>
    </InfoDetailsListGroup>
  )
}
