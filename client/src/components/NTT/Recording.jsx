import { useNavigate } from 'react-router-dom';
import './Recording.css';

const Recording = (props) => {
  const navigate = useNavigate()
  const data = JSON.parse(props.recording)
  const handleClick = () => {
    // console.log(props)
    // console.log(data)
    // alert(`Clicked ${props.recording.show_title}`)
    navigate("/ntt/recording/regions/", { state: { id: parseInt(data.objid), title: data.show_title, show_date: data.show_date } })
  }

  return (
    <div onClick={handleClick} className={`recording ${data.top_call ? 'top-call' : 'regular-call'}`} id={data.objid} key={data.objid}>

      <table key={data.objid} className="outer-table">
        <tbody>
          <tr>
            <td>
              <table className="inner-table">
                <tbody>
                  <tr>
                    <td>record id</td><td>{data.objid}</td>
                  </tr>
                  <tr>
                    <td>episode #</td><td>{data.episode}</td>
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
                    <td>{data.show_title}</td>
                  </tr>
                  <tr>
                    <td>{data.show_date}</td>
                  </tr>
                  <tr>
                    <td>{data.description}</td>
                  </tr>
                  <tr><td>{data.notes}</td></tr>
                  <tr>
                    <td>{data.current_file_location}</td>
                  </tr>
                  <tr>
                    <td>{data.file_name}</td>
                  </tr>
                  <tr>
                    <td>{data.children.length} Children</td>
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

export default Recording;