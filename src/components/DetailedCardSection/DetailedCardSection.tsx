import styled from 'styled-components'

export const DetailedCardSection = ({ title, data }: any) => {
  return (
    <Section>
      <div>{title}</div>
      {data.length > 0 ? (
        data.map((item: string) => {
          return (
            <SectionItem key={item}>
              <a href={item} target="_blank" rel="noopener noreferrer">
                {item}
              </a>
            </SectionItem>
          )
        })
      ) : (
        <SectionItem>There is no data in the Jedi archives</SectionItem>
      )}
    </Section>
  )
}

const Section = styled.div`
  display: grid;
  align-content: start;

  & div:nth-child(1) {
    font-weight: bold;
    line-height: 2rem;
    border-bottom: 1px solid grey;
  }
`

const SectionItem = styled.div`
  display: grid;
  padding: 1rem 0;
`
