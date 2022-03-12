import { useState } from 'react'

const Edit = ({ setIsEdit, title, updateValue, i }) => {
  
  const [titleCorrect, setTitleCorrect] = useState(title)
  console.log(titleCorrect);
  

  // console.log(i)
  const sendTitle = () => {
    console.log('tit:', titleCorrect)
    updateValue({ i, titleCorrect })
  }
  return (
    <div className='absolute top-1/3 left-1/4 p-5 bg-slate-500 '>
      <div
        onClick={() => setIsEdit((prev) => (prev = !prev))}
        className='absolute -top-6 -right-4 text-xl'
      >
        x
      </div>
      <div className=''>
        <input
          value={titleCorrect}
          onChange={(e) => setTitleCorrect(e.target.value)}
        ></input>
        <button onClick={() => sendTitle()} className='mx-2'>
          send
        </button>
      </div>
    </div>
  )
}

export default Edit
