import styled from 'styled-components'

export const DetailedCardSection = ({ title, data }: any) => {
  return (
    <Section>
      <div>{title}</div>
      <div>
        <a href={data} target="_blank" rel="noopener noreferrer">
          {data ? data : 'There is no such information in the Jedi archives'}
        </a>
      </div>
    </Section>
  )
}

const Section = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;

  & div:nth-child(1) {
    font-weight: bold;
  }

  & div:nth-child(2) {
    display: grid;
    padding: 1rem 0;
    align-content: center;
  }
`
