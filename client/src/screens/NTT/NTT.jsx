import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getEquityTextById, getEquityTexts } from '../../services/chancery';


const NTT = () => {
  let textInfoJSX
  const [equityTexts, setEquityTexts] = useState([])
  const [selectedText, setSelectedText] = useState()
  const [selectedTextInfo, setSelectedTextInfo] = useState()

  function handleChange(e) {
    setSelectedText(e.target.value)
  }

  useEffect(() => {
    const allEquityTexts = async () => {
      const results = await getEquityTexts();
      setEquityTexts(results.rows)
    }

    allEquityTexts()
  }, [])

  useEffect(() => {
    const equityText = async () => {
      const results = await getEquityTextById(selectedText)
      setSelectedTextInfo(results)
    }

    equityText()
  }, [selectedText])

  const textsJSX = equityTexts.map((text, idx) => {
    return <option key={text.objid} value={text.objid}>{text.book_title}</option>
  })

  if (selectedTextInfo) {
    textInfoJSX = selectedTextInfo.map((item, idx) => {
      return <div key={item.objid} className="equity-info">{item.book_title}</div>
    });
  }

  return (
    <div className="main-content">
      <h1>NTT Media</h1>
      <div className="audio">
        <Link to='/ntt/recordings'>All NTT Recordings</Link>
        <ul className="nodefault">
          {/* <li><Link to={`/ntt/recordings/2009`} state={{ year: 2009}}>2009 NTT Recordings</Link></li>
          <li><Link to={'/ntt/recordings/2010'} state={{ year: 2010}}>2010 NTT Recordings</Link></li>
          <li><Link to={'/ntt/recordings/2011'} state={{ year: 2011}}>2011 NTT Recordings</Link></li>
          <li><Link to={'/ntt/recordings/2012'} state={{ year: 2012}}>2012 NTT Recordings</Link></li>
          <li><Link to={'/ntt/recordings/2013'} state={{ year: 2013}}>2013 NTT Recordings</Link></li>
          <li><Link to={'/ntt/recordings/2014'} state={{ year: 2014}}>2014 NTT Recordings</Link></li> */}

          <li><Link to={`/ntt/recordings/2009`}>2009 NTT Recordings</Link></li>
          <li><Link to={'/ntt/recordings/2010'}>2010 NTT Recordings</Link></li>
          <li><Link to={'/ntt/recordings/2011'}>2011 NTT Recordings</Link></li>
          <li><Link to={'/ntt/recordings/2012'}>2012 NTT Recordings</Link></li>
          <li><Link to={'/ntt/recordings/2013'}>2013 NTT Recordings</Link></li>
          <li><Link to={'/ntt/recordings/2014'}>2014 NTT Recordings</Link></li>
          <li><Link to={'/ntt/recordings/topcalls'}>NTT Top Recordings</Link></li>

        </ul>
      </div>
      <div className="texts">
        <select name="equity" id="equity" className="equity-texts" onChange={handleChange}>
        <option default value="0">Select an Equity Text</option>
          {textsJSX}
        </select>
        <div className="selected-equity">{textInfoJSX}</div>
      </div>
    </div>
  )
}

export default NTT;