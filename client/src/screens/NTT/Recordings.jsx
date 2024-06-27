import { useState, useEffect } from 'react';
import Recording from '../../components/NTT/Recording';
import { getRecordings } from '../../services/ntt';
import './Recordings.css';

const Recordings = () => {
  const [recordings, setRecordings] = useState([])

  useEffect(() => {
    const fetchRecordings = async () => {
      const recordingList = await getRecordings();
      setRecordings(recordingList);
    }

    fetchRecordings();
  }, [])

  const recordingsJSX = recordings.map((recording, index) => 
    <Recording key={recording.objid} recording={recording} />
  )

  return (
    <div className="main-content">
      <h3>ALL NTT Recordings 2009 - 2014</h3>
      { recordingsJSX }
    </div>
  )
}

export default Recordings;