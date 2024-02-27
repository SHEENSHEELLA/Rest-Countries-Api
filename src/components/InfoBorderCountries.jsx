import React from 'react'
import styled from 'styled-components'

const Meta = styled.div`
  margin-top: 3rem;
  display: flex;
  gap: 1.5rem;
  flex-direction: column;
  align-items: flex-start;

  & > b {
    font-weight: var(--fw-bold);
  }

  @media (min-width: 767px) {
    flex-direction: row;
    align-items: center;
  }
`

const TagGroup = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`

const Tag = styled.span`
  padding: 0 1rem;
  background-color: var(--colors-ui-base);
  box-shadow: var(--shadow);
  line-height: 1.5;
  cursor: pointer;
`

export const InfoBorderCountries = ({ borders, navigate, neighbors }) => {
  return (
    <Meta>
      <b>Border Countries</b>
      {!borders.length ? (
        <span>There is no border countries</span>
      ) : (
        <TagGroup>
          {neighbors.map((b) => (
            <Tag key={b} onClick={() => navigate(`/country/${b}`)}>
              {b}
            </Tag>
          ))}
        </TagGroup>
      )}
    </Meta>
  )
}
