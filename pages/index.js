import axios from 'axios'
import { useQuery } from 'react-query'

import { API_URL, CountryService } from '../api/service/Country'

export const getStaticProps = async () => {
  const res = await CountryService.getAll()
  const data = res.data
  // if(!data) {return {notFound:true}
  return { props: { contacts: data } }
}

const Home = (props) => {
  // const { isLoading, data } = useQuery('countri list', () =>
  //   CountryService.getAll()
  // )
  console.log(props)
  return (
    <div>
      {/* {contacts && contacts.map((el) => <div key={el.id}>{el.title}</div>)} */}
      todo
    </div>
  )
}
export default Home
