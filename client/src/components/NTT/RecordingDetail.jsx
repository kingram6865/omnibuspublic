import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

const RecordingDetail = (props) => {
  let audiofile = ''
  
  if (props.details.file_name) {
    let audio = ``
    switch (props.details.category) {
      case 'qna':
        audio = "CALLERS"
        break;
      case 'lecture':
        audio = "LECTURE"
        break;
      case 'reading':
        audio = "READING"
        break;
      default:
        break;
    }

    let year = props.details.file_name.substr(0,4)
    audiofile = `${year}/${audio}/${props.details.file_name}`
  }

  return (
    <div className="recording-region" id={props.details.objid}>
      <table className='recording-region-details'>
        <tbody>
          <tr>
            <td className="detail-label">Description: </td><td>{props.details.description}</td>
          </tr>
          {props.details.description.match(/Caller/) && (<><tr><td className="detail-label">Name:</td><td> {props.details.detail1}</td></tr><tr><td className="detail-label">Calling From: </td><td>{props.details.detail2}</td></tr></>)}
          <tr><td className="detail-label">Playing Time:</td><td>{props.details.start_time} - {props.details.end_time}</td></tr>
          {props.details.description.match(/Reading/) && (<tr><td className="detail-label">Topic:</td><td>{props.details.subject}</td></tr>)}
          <tr className="audio-player"><td style={{textAlign: "center", color: "blue", fontWeight: "bold"}} colSpan="2"><AudioPlayer src={encodeURI(`http://apollo:3019/${audiofile}`)} /></td></tr>
        </tbody>
      </table>
    </div>
  )
}

export default RecordingDetail;