import React from 'react'
import { useSelector } from 'react-redux'
import { useState } from 'react/cjs/react.development'
import { CountryService } from '../api/service/Country'
import { useAllActions } from '../components/hooks/AllActions'
import Pagination from '../components/Pagination'

export const getStaticProps = async () => {
  const data = await CountryService.getAll()
  return { props: { data } }
}

const Home = ({ data }) => {
  React.useEffect(() => {
    getState(data)
  }, [])

  const allFile = useSelector((state) => state.card)
  const [currentPosts, setcurrentPosts] = useState(allFile)

  const { getState, removeItem } = useAllActions()

  return (
    <div>
      todo
      {currentPosts?.map((el) => (
        <ul key={el.id}>
          <li className='list-outside md:list-inside justify-between  flex'>
            {el.id}-{el.title}
            <div
              onClick={() => removeItem({ id: el.id })}
              className='hover:text-red-600'
            >
              del
            </div>
          </li>
        </ul>
      ))}
      <Pagination data={data} setcurrentPosts={setcurrentPosts} />
    </div>
  )
}

export default Home
