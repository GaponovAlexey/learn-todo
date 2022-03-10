import React from 'react'

const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
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
