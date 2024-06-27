import { useState, useEffect } from 'react';
import { getEquityTextById, getEquityTexts, getLevel2Data, getFullText } from '../../services/chancery';
import './EquityTexts.css'

export const EquityTexts = (props) => {
  let textInfoJSX, child1JSX

  const [equityTexts, setEquityTexts] = useState([])
  const [selectedText, setSelectedText] = useState()
  const [selectedTextInfo, setSelectedTextInfo] = useState([])
  const [child1Selection, setChild1Selection]  = useState()
  const [child1Data, setChild1Data] = useState([])

  useEffect(() => {
    const allEquityTexts = async () => {
      const results = await getEquityTexts();
      setEquityTexts(results.rows)
    }

    allEquityTexts()
  }, [])

  useEffect(() => {
    const equityText = async () => {
      if (selectedText) {
        const results = await getEquityTextById(selectedText)
        setSelectedTextInfo(results.rows)
      }
    }

    equityText()
  }, [selectedText])

  useEffect(() => {
    const child1Retrieval = async () => {
      if (child1Selection) {
        const results = await getLevel2Data(child1Selection)
        setChild1Data(results.rows)
      }
    }

    child1Retrieval()
  }, [child1Selection])


  const handleChange = (e) => {
    setSelectedText(e.target.value)
  }

  const handleClickLv1 = (e) => {
    setChild1Selection(e.target.id)
  }

  const textsJSX = equityTexts.map((text, idx) => {
    return <option key={text.objid} value={text.objid} className={(text.status) ? 'highlight' : ''}>[{text.objid}] {text.book_title}</option>
  })

  if (selectedTextInfo) {
    textInfoJSX = selectedTextInfo.map((item, idx) => {
      return <li key={item.objid} className="toc-item" id={item.objid} onClick={handleClickLv1}>({item.section_name} {item.section_number}) {item.section_title}</li>
    });
  }

  child1JSX = child1Data.map((item, index) => {
    return <div key={item.objid}>{item.section_name} {item.section_number} {item.section_title}</div>
  })

  return (
    <div className="main-content">
      <div className="text-selector">
        <select name="text-selector" id="text-selector" onChange={handleChange}>
          <option default value="0">Select an Equity Text</option>
          {textsJSX}          
        </select>
      </div>
      <div className="text-display">
        <div className="toc">
          <ul className="nodefault">
            {textInfoJSX}
          </ul>
        </div>
        <div className="readable">{child1JSX}</div>
      </div>
    </div>
  )
}