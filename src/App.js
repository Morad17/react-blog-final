import React from 'react'
import Home from './pages/home'
import Sorting from './components/sorting'
import data from './assets/blog.json'

class App extends React.Component {
  constructor(props){
      super(props)
      this.state={
        data: data
      }
      this.sortBy = this.sortBy.bind(this)
  }

  sortBy(key) {
      this.setState({
        data: data.sort( (a, b) => a < b )
      })
  }

  render() {
      return( 
        <div>
          <Sorting 
            data={this.state.data}
            sortBy={this.sortBy} 
          />
        </div>
      )
  }
}

export default App;
