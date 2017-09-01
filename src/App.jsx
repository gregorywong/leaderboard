import React from 'react';

const user = 'harry';
export default class App extends React.Component {

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
                <th style={{ width: '10%' }}>#</th>
                <th style={{ width: '40%' }}>Username</th>
                <th style={{ width: '25%' }}>Points (past 30 days)</th>
                <th style={{ width: '25%' }}>Points (all time)</th>
              </tr>
            </thead>
            <tbody>
              {/* use a map function to output trows */}
              <tr>
                <td>1</td>
                <td>
                  <a href={`www.freecodecamp.com/${user}`}>
                    <img className="small-image" src="https://avatars1.githubusercontent.com/u/4639625?v=4" alt="" />
                    <span className="px-1">harry</span>
                  </a>
                </td>
                <td>123</td>
                <td>4345</td>
              </tr>
              {/* end of first trow */}
              <tr>
                <td>2</td>
                <td><img className="small-image" src="https://avatars1.githubusercontent.com/u/4639625?v=4" alt="" /> harry</td>
                <td>123</td>
                <td>4345</td>
              </tr>
              <tr>
                <td>2</td>
                <td><img className="small-image" src="https://avatars1.githubusercontent.com/u/4639625?v=4" alt="" /> harry</td>
                <td>123</td>
                <td>4345</td>
              </tr>
              <tr>
                <td>2</td>
                <td><img className="small-image" src="https://avatars1.githubusercontent.com/u/4639625?v=4" alt="" /> harry</td>
                <td>123</td>
                <td>4345</td>
              </tr>
              <tr>
                <td>2</td>
                <td><img className="small-image" src="https://avatars1.githubusercontent.com/u/4639625?v=4" alt="" /> harry</td>
                <td>123</td>
                <td>4345</td>
              </tr>
              <tr>
                <td>2</td>
                <td><img className="small-image" src="https://avatars1.githubusercontent.com/u/4639625?v=4" alt="" /> harry</td>
                <td>123</td>
                <td>4345</td>
              </tr>
              <tr>
                <td>2</td>
                <td><img className="small-image" src="https://avatars1.githubusercontent.com/u/4639625?v=4" alt="" /> harry</td>
                <td>123</td>
                <td>4345</td>
              </tr>
              <tr>
                <td>2</td>
                <td><img className="small-image" src="https://avatars1.githubusercontent.com/u/4639625?v=4" alt="" /> harry</td>
                <td>123</td>
                <td>4345</td>
              </tr>
              <tr>
                <td>3</td>
                <td><img className="small-image" src="https://avatars1.githubusercontent.com/u/4639625?v=4" alt="" /> harry</td>
                <td>123</td>
                <td>4345</td>
              </tr>
              <tr>
                <td>4</td>
                <td><img className="small-image" src="https://avatars1.githubusercontent.com/u/4639625?v=4" alt="" /> harry</td>
                <td>123</td>
                <td>4345</td>
              </tr>
              <tr>
                <td>4</td>
                <td><img className="small-image" src="https://avatars1.githubusercontent.com/u/4639625?v=4" alt="" /> harry</td>
                <td>123</td>
                <td>4345</td>
              </tr>
              {/* delete up to here */}
            </tbody>
          </table>
          <hr />
        </div>
        <footer className='footer text-center'>
          <h2 className='m-0 p-3'>Coded by <a href="http://www.gregwong.me">Greg Wong</a></h2>
        </footer>
      </div>
    )
  }
}