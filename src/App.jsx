import React from 'react';

const ALL_TIME_URL = 'https://fcctop100.herokuapp.com/api/fccusers/top/alltime';
const RECENT_URL = 'https://fcctop100.herokuapp.com/api/fccusers/top/recent';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      users: [],
      descending: true,
      currentSource: ALL_TIME_URL,
      errorMessage: ''
    }
  }

  componentDidMount() {
    this.fetchUsers(this.state.currentSource);
  }

  fetchUsers = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          users: this.state.descending ? json : json.reverse(),
          currentSource: url,
          errorMessage: ''
        })
      })
      .catch((error) => {
        console.error(error);
        this.setState({
          errorMessage: 'Something went wrong. Try refreshing the page!'
        })
      });
  }

  categoryClicked = (newSource) => {
    return (e) => {
      e.preventDefault();
      if (this.state.currentSource !== newSource) {
        this.setState({
          users: []
        })
        this.fetchUsers(newSource);
      }
      else {
        const { users, descending } = this.state;
        this.setState({
          users: users.reverse(),
          descending: !descending
        })
      }
    }
  }

  render() {
    const { currentSource, descending } = this.state;
    return (
      <div>
        <header className="text-center">
          <h1 className="py-4">FreeCodeCamp Leaderboard</h1>
          <div className="mx-2 pb-2 mb-4">
            <p>Check out who's in the lead on FreeCodeCamp!</p>
          </div>
        </header>
        <div className="container">
          <h2 className='text-center text-danger'>{this.state.errorMessage}</h2>
          <table className='table table-striped px-5'>
            <thead className='thead-inverse'>
              <tr>
                <th style={{ width: '5%' }}>#</th>
                <th style={{ width: '45%' }}>Username</th>
                <th style={{ width: '25%' }}>
                  <a href="" onClick={this.categoryClicked(RECENT_URL)}>
                    Points (past 30 days){currentSource === RECENT_URL && ((descending && '▼') || (!descending && '▲'))}
                  </a>
                </th>
                <th style={{ width: '25%' }}>
                  <a href="" onClick={this.categoryClicked(ALL_TIME_URL)}>
                    Points (all time){currentSource === ALL_TIME_URL && ((descending && '▼') || (!descending && '▲'))}
                  </a>
                </th>
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