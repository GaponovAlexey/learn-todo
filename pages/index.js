import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useAllActions } from '../components/hooks/AllActions'
import Pagination from '../components/Pagination'
import {
  fetchUserById,
  isCompleted,
  removeElement,
} from '../components/Redux/reducer'

const Home = () => {
  const dispatch = useDispatch()
  React.useEffect(() => {
    dispatch(fetchUserById())
  }, [])
  const allFile = useSelector((state) => state.card)
  console.log(allFile)
  const { addData } = useAllActions()

  const [TitleSend, setTitleSend] = React.useState('')

  // pagin
  const [currentPage, setCurrentPage] = React.useState(1)
  const [postsPerPage] = React.useState(15)
  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const paginate = (pageNumber) => setCurrentPage(pageNumber)
  const currentPosts = allFile?.slice(indexOfFirstPost, indexOfLastPost)
  //

  return (
    <div>
      todo
      <div>
        <input
          type='text'
          placeholder='value'
          value={TitleSend}
          onChange={(e) => setTitleSend(e.target.value)}
        />
        <button onClick={() => addData({ id: Date.now(), title: TitleSend })}>
          send
        </button>
      </div>
      {currentPosts?.map((el, i) => (
        <ul key={el.id}>
          <li
            onClick={() => dispatch(isCompleted(i))}
            className={
              el.completed
                ? 'red list-outside md:list-inside justify-between flex'
                : 'blue list-outside md:list-inside justify-between flex'
            }
          >
            {el.completed.toString()}-{el.title}
            <div
              onClick={() => dispatch(removeElement(el.id))}
              className='hover:text-red-600'
            >
              del
            </div>
          </li>
        </ul>
      ))}
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={allFile.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  )
}

export default Home
