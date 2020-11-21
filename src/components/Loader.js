import spinner from './spinner.gif'

export const Loader = () => {
  return (
    <div className="loader">
      <img src={spinner} alt="loading-spinner"/>
      <h1>Fetching data...</h1>
    </div>
  )
}
