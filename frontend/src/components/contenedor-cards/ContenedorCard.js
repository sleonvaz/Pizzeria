import React, { Component } from 'react';
import PizzaCard from '../pizza-card/PizzaCard';
import axios from 'axios';

export default class ContenedorCard extends Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    // axios.post('http://localhost:3001/pizza/add')
    //   .then(response => {
    //     console.log(response.data);
    //       this.setState({

    //           posts: response.data
    //       })
    //   })

    axios
      .get('http://localhost:3001/pizza/search')

      .then(response => {
        this.setState({
          posts: response.data,
        });
      });
  }
  render() {
    const posts = this.state.posts.map((post, index) => (
      <PizzaCard key={index} addpizza={this.props.addpizza} items={this.props.items} pizza={post} />
    ));
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-8 offset-1">
              <div className="row">
                {posts}

                {/* {pizzas.map(n => (
                  <PizzaCard pizza={n} />
                ))} */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
