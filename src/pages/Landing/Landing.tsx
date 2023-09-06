import Header from 'src/layout/Header/Header'
import Banner from 'src/layout/Banner/Banner'

const Landing = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div style={{}}>
        <Banner />
      </div>
      <div
        style={{ width: '100%', height: '1000px', backgroundColor: 'yellow' }}
      ></div>
    </div>
  )
}
export default Landing
