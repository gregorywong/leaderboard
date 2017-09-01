import React from 'react';

const testUserList = [{"username":"sjames1958gm","img":"https://avatars1.githubusercontent.com/u/4639625?v=4","alltime":8068,"recent":217,"lastUpdate":"2017-08-28T16:05:18.945Z"},{"username":"Manish-Giri","img":"https://avatars1.githubusercontent.com/u/11348778?v=3","alltime":6134,"recent":145,"lastUpdate":"2017-08-28T12:00:44.321Z"},{"username":"anthonygallina1","img":"https://avatars.githubusercontent.com/u/11003055?v=3","alltime":5373,"recent":31,"lastUpdate":"2017-08-28T11:24:40.106Z"},{"username":"diomed","img":"https://avatars3.githubusercontent.com/u/72777?v=3","alltime":4961,"recent":15,"lastUpdate":"2017-08-28T10:57:07.789Z"},{"username":"Blauelf","img":"https://avatars.githubusercontent.com/u/5952026?v=3","alltime":4239,"recent":37,"lastUpdate":"2017-08-28T11:30:56.112Z"},{"username":"Chrono79","img":"https://avatars0.githubusercontent.com/u/9571508?v=3","alltime":4224,"recent":29,"lastUpdate":"2017-08-28T11:22:24.940Z"},{"username":"revisualize","img":"https://avatars.githubusercontent.com/u/1588399?v=3","alltime":4148,"recent":52,"lastUpdate":"2017-08-31T08:42:35.173Z"},{"username":"Masd925","img":"https://avatars.githubusercontent.com/u/9335367?v=3","alltime":4130,"recent":88,"lastUpdate":"2017-08-28T11:49:43.190Z"},{"username":"Takumar","img":"https://avatars3.githubusercontent.com/u/2951935?v=3","alltime":3453,"recent":4,"lastUpdate":"2017-08-28T10:09:48.772Z"},{"username":"camperbot","img":"https://avatars.githubusercontent.com/u/13561988?v=3","alltime":3378,"recent":7,"lastUpdate":"2017-08-28T10:27:20.265Z"},{"username":"moigithub","img":"https://avatars3.githubusercontent.com/u/7305974?v=3","alltime":3257,"recent":71,"lastUpdate":"2017-08-28T11:46:42.765Z"}];

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      // users: []
      users: testUserList
    }
  }

  componentDidMount() {
    // todo: fetch data from API
  }

  render() {
    return (
      <div>
        <header className="text-center">
          <h1 className="py-4">FreeCodeCamp Leaderboard</h1>
          <div className="mx-2 pb-2 mb-4">
            <p>Check out who's in the lead on FreeCodeCamp!</p>
          </div>
        </header>
        <div className="container">
          <table className='table table-striped px-5'>
            <thead className='thead-inverse'>
              <tr>
                <th style={{ width: '5%' }}>#</th>
                <th style={{ width: '45%' }}>Username</th>
                <th style={{ width: '25%' }}>Points (past 30 days)</th>
                <th style={{ width: '25%' }}>Points (all time)</th>
              </tr>
            </thead>
            <tbody>
              {
                this.state.users.map((user, i) => {
                  const { username, img, alltime, recent } = user;
                  i = i + 1; // change 0-based index to 1-based
                  return (
                    <tr key={i}>
                      <td>{i}</td>
                      <td>
                        <a href={`www.freecodecamp.com/${username}`}>
                          <img className="small-image" src={img} />
                          <span className="px-1">{username}</span>
                        </a>
                      </td>
                      <td>{recent}</td>
                      <td>{alltime}</td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
          <hr />
        </div>
        <footer className='footer text-center'>
          <h4 className='m-0 p-3'>Coded by <a href="http://www.gregwong.me">Greg Wong</a></h4>
        </footer>
      </div>
    )
  }
}