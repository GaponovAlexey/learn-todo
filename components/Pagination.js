import React from 'react'

const Pagination = ({ data, setcurrentPosts }) => {
  const [currentPage, setCurrentPage] = React.useState(1)
  const [postsPerPage] = React.useState(10)

  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost)

  React.useEffect(() => {
    setcurrentPosts(currentPosts)
  }, [currentPage])

  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  const pageNumbers = []

  for (let i = 1; i <= data.length / postsPerPage; i++) {
    pageNumbers.push(i)
  }
  return (
    <nav>
      <ul className='pagination'>
        {pageNumbers.map((number) => (
          <a
            className={currentPage === number ? 'red' : 'blue'}
            key={number}
            onClick={() => paginate(number)}
            href='#!'
          >
            {number}
          </a>
        ))}
      </ul>
    </nav>
  )
}

export default Pagination
