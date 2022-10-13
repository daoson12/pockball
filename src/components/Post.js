import React, { Component } from 'react';
const baseURL = "https://jsonplaceholder.typicode.com/posts";
import axios from 'axios'
class Post extends Component {


    state = {
        post: null
    }

    componentDidMount() {
        console.log(this.props);
        let id = this.props.match.params.post_id
        axios.get(`${baseURL}/` + id)
            .then((res) => {
                this.setState({
                    post: res.data
                })
                console.log(res);
            })
    }

    render() {

        const post = this.state.post ? (
            <div className='post card '>
                <div className='card-content'>
                    <h4 className='center text-blue'>{this.state.post.title}</h4>
                    <p>{this.state.post.body}</p>
                </div>

            </div>
        ) : (
            <div className='center'>
                Loading post...
            </div>
        )

        return (
            <div className='container'>
                {post}

            </div>
        );
    }
}

export default Post;