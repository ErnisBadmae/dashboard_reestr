import Sidebar from './Sidebar/Sidebar'
import './main.scss'



function Main(props) {
  return (
    <main className='main'>
      <div className="container">
        <div className="main__inner">
          <div className="main__sidebar">
            <Sidebar/>
          </div>
          <div className="main__table">
          </div>
        </div>
      </div>
    </main>
  );
}

export default Main;
