import { useState, useEffect } from 'react';
import Recording from '../../components/NTT/Recording';
// import RecordingAlt from '../../components/NTT/RecordingAlt';
import { getRecordingsTopCalls } from '../../services/ntt';
import './TopCalls.css';

const TopCalls = (props) => {
  const [recordings, setRecordings] = useState([])

  useEffect(() => {
    const fetchRecordings = async () => {
      const recordingList = await getRecordingsTopCalls();
      setRecordings(recordingList);
    }

    fetchRecordings();
  }, [])

  const recordingsJSX = recordings.map((recording, index) => 
    <Recording key={recording.objid} recording={recording} />
  )

  return (
    <div className="main-content">
      <h3>NTT Top Calls as Selected by Christian</h3>
      <div className="recordings">
        <div className="source-data">
          {recordingsJSX}
        </div>
        <div className="result-data">Test</div>
      </div>
    </div>
  )
}

export default TopCalls;