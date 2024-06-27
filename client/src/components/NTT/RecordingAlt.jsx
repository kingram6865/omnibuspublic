import { useState, useEffect } from 'react';
import { getRecordingRegionsByParentId } from '../../services/ntt';
import RecordingDetail from './RecordingDetail';
import './Recording.css';

const RecordingAlt = (props) => {
  const [regions, setRegions] = useState([])
  // const [parentId, setParentId] = useEffect()

  useEffect(() => {
    const sqlResults = async () => {
      const regionsList = await getRecordingRegionsByParentId(props.recording.objid)
      setRegions(regionsList)
    }

    sqlResults()
  }, [props.recording.objid]);

  function clearLz () {

  }

  const handleClick = (e) => {
    let lz = document.getElementsByClassName('result-data')
    const data = regions.map((details, idx) => {
      return <RecordingDetail key={details.objid} details={details} />
    })

    console.log(data)
  }

  return (
    <div onClick={(props.recording.children > 0) ? handleClick : undefined} className={`recording ${props.recording.top_call ? 'top-call' : 'regular-call'}`} id={props.recording.objid} key={props.recording.objid}>
      <table key={props.recording.objid} className="outer-table">
        <tbody>
          <tr>
            <td>
              <table className="inner-table">
                <tbody>
                  <tr>
                    <td>record id</td><td>{props.recording.objid}</td>
                  </tr>
                  <tr>
                    <td>episode #</td><td>{props.recording.episode}</td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
          <tr>
            <td>
              <table className="inner-table">
                <tbody>
                  <tr>
                    <td>{props.recording.show_title}</td>
                  </tr>
                  <tr>
                    <td>{props.recording.show_date}</td>
                  </tr>
                  <tr>
                    <td>{props.recording.description}</td>
                  </tr>
                  <tr><td>{props.recording.notes}</td></tr>
                  <tr>
                    <td>{props.recording.current_file_location}</td>
                  </tr>
                  <tr>
                    <td>{props.recording.file_name}</td>
                  </tr>
                  <tr>
                    <td>{props.recording.children} Children</td>
                  </tr>
                </tbody>
              </table>
            </td>        
          </tr>
          </tbody>
      </table>
    </div>
  )
}

export default RecordingAlt;