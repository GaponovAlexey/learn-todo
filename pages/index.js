import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react/cjs/react.development'
import { useAllActions } from '../components/hooks/AllActions'
import Pagination from '../components/Pagination'
import { fetchUserById } from '../components/Redux/reducer'

const Home = () => {
  const { RemoveItem, getState } = useAllActions()
  const dispatch = useDispatch()

  useEffect(() => {
    // getState()
    dispatch(fetchUserById())
  }, [])

  const allFile = useSelector((state) => state.card)
  console.log(allFile)

  const [currentPosts, setcurrentPosts] = useState(allFile[0])

  const removeItems = (id) => {
    console.log(id)
    RemoveItem(id)
  }

  return (
    <div>
      todo
      {currentPosts?.map((el) => (
        <ul key={el.id}>
          <li className='list-outside md:list-inside justify-between flex'>
            {el.id}-{el.title}
            <div
              onClick={() => removeItems(el.id)}
              className='hover:text-red-600'
            >
              del
            </div>
          </li>
        </ul>
      ))}
      <Pagination data={allFile} setcurrentPosts={setcurrentPosts} />
    </div>
  )
}

export default Home
