// import { useEffect, useState } from 'react'
//
// import { apiImgSpecies, swAPI } from '../../../api/api'
// import { SpeciesOneT } from '../../../types/types'
// import { getIdFromUrl } from '../../../utils/getIdFromUrl'
// import { Card } from '../../Card/Card'
// import { CardListContainer } from '../../common/CardListContainer/CardListContainer'
// import { Container } from '../../common/Container/Container'
//
export const Species = () => {
  //   const [speciesList, setSpeciesList] = useState<SpeciesOneT[] | null>(null)
  //   const [page, setPage] = useState(1)
  //   const [next, SetNext] = useState(false)
  //
  //   useEffect(() => {
  //     const fetchSpeciesList = async () => {
  //       try {
  //         const data = await swAPI.getAllSpecies(page)
  //         setError(null)
  //         setSpeciesList(data.results)
  //         SetNext(!!data.next)
  //       } catch (error: any) {
  //         setError({ message: error.message })
  //       }
  //     }
  //
  //     fetchSpeciesList().then()
  //   }, [page])
  //
  //   if (!speciesList) return <div>loading...</div>
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
  //             {speciesList.map((item) => {
  //               return (
  //                 <Card
  //                   key={item.name}
  //                   category={item}
  //                   toNavigate={`/species/${getIdFromUrl(item.url)}`}
  //                   src={`${apiImgSpecies}${getIdFromUrl(item.url)}.jpg`}
  //                 />
  //               )
  //             })}
  //           </CardListContainer>
  //         </>
  //       )}
  //     </Container>
  //   )
}
