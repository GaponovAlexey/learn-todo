import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Pagination from '../components/Pagination'
import { fetchUserById, removeElement } from '../components/Redux/reducer'

const Home = () => {
  React.useEffect(() => {
    dispatch(fetchUserById())
  }, [])
  const allFile = useSelector((state) => state.card)

  const dispatch = useDispatch()
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
      {currentPosts?.map((el) => (
        <ul key={el.id}>
          <li className='list-outside md:list-inside justify-between flex'>
            {el.id}-{el.title}
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
