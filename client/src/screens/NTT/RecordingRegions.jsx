import { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom'
import RecordingDetail from "../../components/NTT/RecordingDetail";
import RecordingNotes from '../../components/NTT/RecordingNotes'
import { getRecordingRegionsByParentId } from "../../services/ntt";
import './RecordingRegions.css'

const RecordingRegions = (props) => {
  const [recordingDetails, setRecordingDetails] = useState([]);
  const [recordingNotes, setRecordingNotes] = useState([])
  const params = useLocation()
  // console.log(JSON.stringify(params, null, 2))
  useEffect(() => {
    const fetchDetails = async () => {
      const detailsList = await getRecordingRegionsByParentId(params.state.id);
      // console.log(detailsList)
      setRecordingDetails(detailsList)
    }

    fetchDetails();
  }, [params.state.id])

  const recordingInfo = params.state.title
  const dateTime = new Date(params.state.show_date)

  const recordingDetailsJSX = recordingDetails.map((details, i) => {
    // if (i === 2) {
    //   console.log(details)
    // }
    let notes = (details.description.match(/Reading|Caller|Lecture/)) ? true : null
    // console.log(`recordingDetailsJSX: Line 22: ${details.server_file_path}/${details.file_name}`)
    return (
      <table key={details.objid}>
        <tbody>
          <tr>
            <td><RecordingDetail details={details} /></td>
            {(notes) ? <td><RecordingNotes props={details.objid}/></td> : null}
          </tr>
        </tbody>
      </table>
    )
  })

  return (
    <div className="main-content">
      <div className="recording-info">(objid: {params.state.id}) {params.state.title} <span className="recording-date-time">[{dateTime.toLocaleString()}]</span></div>
      {recordingDetailsJSX}
    </div>
  )
}

export default RecordingRegions;