import './TextSelector.css'

const TextSelector = (props) => {

  const optionsJSX = props.textList.map((item, index) => {
    return <option key={item.objid} value={item.objid}>[{item.objid}] {item.book_title}</option>
  })

  return (
    <select name="text-selector" id="text-selector" onClick={props.handleSelection}>{optionsJSX}</select>
  )
}

export default TextSelector;