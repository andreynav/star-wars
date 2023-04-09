// import { useEffect, useState } from 'react'
//
// import { apiImgPeople, swAPI } from '../../../api/api'
// import { PersonT } from '../../../types/types'
// import { getIdFromUrl } from '../../../utils/getIdFromUrl'
// import { Card } from '../../Card/Card'
// import { CardListContainer } from '../../common/CardListContainer/CardListContainer'
// import { Container } from '../../common/Container/Container'
//
export const People = () => {
  //   const [peopleList, setPeopleList] = useState<PersonT[] | null>(null)
  //   const [page, setPage] = useState(1)
  //   const [next, SetNext] = useState(false)
  //
  //   useEffect(() => {
  //     const fetchPeopleList = async () => {
  //       try {
  //         const data = await swAPI.getAllPeople(page)
  //         setError(null)
  //         setPeopleList(data.results)
  //         SetNext(!!data.next)
  //       } catch (error: any) {
  //         setError({ message: error.message })
  //       }
  //     }
  //
  //     fetchPeopleList().then()
  //   }, [page])
  //
  //   if (!peopleList) return <div>loading...</div>
  //
  //   return (
  //     <Container>
  //       {error ? (
  //         <div className="error">{error.message}</div>
  //       ) : (
  //         <>
  //           <button
  //             onClick={() => {
  //               if (next) setPage((prevPage) => prevPage + 1)
  //             }}
  //           >
  //             page {page}
  //           </button>
  //           <CardListContainer>
  //             {peopleList.map((person) => {
  //               return (
  //                 <Card
  //                   key={person.name}
  //                   category={person}
  //                   toNavigate={`/people/${getIdFromUrl(person.url)}`}
  //                   src={`${apiImgPeople}${getIdFromUrl(person.url)}.jpg`}
  //                 />
  //               )
  //             })}
  //           </CardListContainer>
  //         </>
  //       )}
  //     </Container>
  //   )
}
