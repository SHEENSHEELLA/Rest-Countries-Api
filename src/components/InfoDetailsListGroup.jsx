import styled from 'styled-components'

export const InfoDetailsListGroup = styled.div`
  display: flex;
  flex-direction: column;

  gap: 2rem;

  @media (min-width: 1024px) {
    flex-direction: row;

    gap: 4rem;
  }
`
