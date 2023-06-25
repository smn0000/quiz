import "./loading.scss"

const Loading = () => {
  return (
    <div className="loading__wrapper">
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}

export default Loading
