import './TOC.css'
/**
 * Table of Contents for a text. Props should contain the parent text id
 * from equity_texts
 * 
 * 
 * 
 * @param {} props 
 * @returns 
 */
export const TOC = (props) => {
  const tocJSX = props.toc_data.map((item, index) => {
    return <li key={item.objid}>{item.section_title}</li>
  })

  return (
    <div className="contents">

    </div>
  )
}