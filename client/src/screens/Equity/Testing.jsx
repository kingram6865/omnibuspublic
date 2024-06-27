import { useState, useEffect } from 'react'

export const Testing = (props) => {
  let dataJSX, outputJSX
  const [bookData, setBookData] = useState([])
  const [testData, setTestData] = useState([])
  const [apiLevel, setApiLevel] = useState();

  return (
    <div className="testing-info">
      Testing
      <div className="results">
        
      </div>
      <hr />
      <div></div>
    </div>
  )
}