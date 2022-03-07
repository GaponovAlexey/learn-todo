import { useQuery } from 'react-query'
import { CountryService } from '../api/service/Country'

export default function Home() {
  const { isLoading, data } = useQuery('countri list', () =>
    CountryService.getAll()
  )
  console.log(data)
  return (
    <div>
      todo
      {/* {data.map((el) => ( */}
      {/* <div key={el.id}>{el.title}</div> */}
      {/* ))} */}
      {isLoading ? <div>yes</div> : <div>no</div>}
    </div>
  )
}
