import { Error } from '../components/common/Error'
import { NotFound } from '../components/common/NotFound'

export const getProperErrorComponent = (error: any) => {
  if (error.message === 'Request failed with status code 404') {
    return <NotFound />
  } else if (error.message) {
    return <Error>{error.message}</Error>
  } else {
    console.log(error)
    return <Error>{error}</Error>
  }
}
