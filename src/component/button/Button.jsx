import './button.css'

const Button = ({content,clsName}) => {
  return (
<button className={clsName} >{content}</button>
  )
}

export default Button