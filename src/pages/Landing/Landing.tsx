import Header from 'src/layout/Header/Header'
import Banner from 'src/layout/Banner/Banner'
import Team from 'src/layout/Team/Team'

const Landing = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <Banner />
      </div>
      <div>
        <Team />
      </div>
      <div
        style={{ width: '100%', height: '1000px', backgroundColor: 'yellow' }}
      ></div>
    </div>
  )
}
export default Landing
