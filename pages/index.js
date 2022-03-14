import React, { useLayoutEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Edit from '../components/Edit'
import { useAllActions } from '../components/hooks/AllActions'
import Pagination from '../components/Pagination'
import {
  fetchUserById,
  isCompleted,
  removeElement,
} from '../components/Redux/reducer'

const Home = () => {
  const { addData, updateValue } = useAllActions()
  const dispatch = useDispatch()
  React.useEffect(() => {
    dispatch(fetchUserById())
  }, [])
  const allFile = useSelector((state) => state.card)

  const [TitleSend, setTitleSend] = React.useState('')
  // pagin
  const [currentPage, setCurrentPage] = React.useState(1)
  const [postsPerPage] = React.useState(15)
  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const paginate = (pageNumber) => setCurrentPage(pageNumber)
  const currentPosts = allFile?.slice(indexOfFirstPost, indexOfLastPost)
  //toggle
  const [isEdit, setIsEdit] = React.useState(false)
  //findTitleID
  const [relativeID, setrelativeID] = React.useState(0)
  const [relativeTitle, setrelativeTitle] = React.useState('')
  //handlerUpdate
  const findTitleID = ({ id, title }) => {
    setrelativeID(id)
    setrelativeTitle(title)
    setIsEdit(!isEdit)
  }

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
        <button
          onClick={() =>
            addData({ id: Date.now(), title: TitleSend, completed: false })
          }
        >
          send
        </button>
      </div>
      {currentPosts?.map((el, i) => (
        <ul key={el.id}>
          <li
            className={
              el.completed
                ? 'red list-outside md:list-inside justify-between flex'
                : 'blue list-outside md:list-inside justify-between flex'
            }
          >
            {'<<'}
            {el.completed.toString()}
            {'>>'}-{el.title}
            <div className='flex'>
              <div
                className='pr-2 cursor-pointer'
                onClick={() => dispatch(isCompleted(i))}
              >
                toggle
              </div>
              <div className='pr-2 cursor-pointer'>
                <div
                  onClick={() => findTitleID({ id: el.id, title: el.title })}
                >
                  edit
                </div>
                {isEdit && (
                  <Edit
                    id={relativeID}
                    title={relativeTitle}
                    updateValue={updateValue}
                    setIsEdit={setIsEdit}
                  />
                )}
              </div>
              <div
                onClick={() => dispatch(removeElement(el.id))}
                className='cursor-pointer'
              >
                del
              </div>
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
