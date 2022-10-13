import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
const baseURL = "https://jsonplaceholder.typicode.com/posts";
import Pockball from '../pockball.jpg'

class Home extends Component {

  state = {
    posts: []
  }

  componentDidMount() {
    axios.get(`${baseURL}`).then(res => {
      console.log(res);
      this.setState({
        posts: res.data.slice(0, 10)
      })
    })
  }
  render() {

    const { posts } = this.state;
    const postLIst = posts.length ? (
      posts.map(post => {
        return (
          <div className='post card' key={post.id}>
          
              <img style={{ width: 100, height: 100 }} src={Pockball} alt='A pockball'/>
          
            <div className='card-content'>
              <span className='card-title red-text'>

                {post.title}
              </span>
              <p>{post.body}</p>
              <Link to={'/' + post.id}><button type='submit' className="waves-effect waves-light btn">Read More</button></Link>
            </div>
          </div>
        )
      })
    ) : (
      <div className="center">
        <span>Loading...</span>;
      </div>
    )
    return (
      <div className='container'>
        <h4 className='center'>Home</h4>

        {postLIst}
      </div>
    );
  }
}

export default Home;
