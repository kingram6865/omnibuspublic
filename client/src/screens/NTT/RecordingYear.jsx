import { useState, useEffect } from 'react';
import Recording from '../../components/NTT/Recording';
import { getRecordingsByYear } from '../../services/ntt';
import './RecordingYear.css';

const RecordingYear = (props) => {
  const [recordings, setRecordings] = useState([])

  useEffect(() => {
    const fetchRecordings = async () => {
      const recordingList = await getRecordingsByYear(props.details.year);
      setRecordings(recordingList);
    }

    fetchRecordings();
  }, [props.details.year])

  const recordingsJSX = recordings.map((recording, index) => 
    <Recording key={recording.objid} recording={JSON.stringify(recording)} />
  )

  return (
    <div className="main-content">
      <h3>NTT Recordings for {props.details.year}</h3>
      { recordingsJSX }
    </div>
  )
}

export default RecordingYear;