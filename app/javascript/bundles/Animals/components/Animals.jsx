import PropTypes from 'prop-types';
import React from 'react';

import Animal from './Animal';
import Album from './Album';

export default class Animals extends React.Component {
  static propTypes = {
    animals: PropTypes.array.isRequired // this is passed from the Rails view
  };

  /**
   * @param props - Comes from your rails view.
   */
  constructor(props) {
    super(props);

    this.state = {
      images: [],
      active: false
    };
  }

  componentDidMount() {
    document.body.addEventListener('keyup', e => {
      if (e.keyCode === 27) {
        this.setState({
          active: false
        });
      }
    });
  }

  loadImages = animal => {
    const client_id =
      'b423b0dc011957d4aaa82c769883c935fe9c62b123ca67c3a1a293ac6bdfd013';

    fetch(
      `https://api.unsplash.com/search/photos?client_id=${client_id}&query=${
        animal.name
      }`
    )
      .then(response => response.json())
      .then(data => {
        this.setState({
          images: data.results,
          active: true
        });
      });
  };

  render() {
    console.log(this.props);
    // const { images, active } = this.state;

    return (
      <div>
        <section className="animals">
          {this.props.animals.map(animal => (
            <Animal
              key={animal.id}
              animal={animal}
              loadImages={this.loadImages}
            />
          ))}
        </section>
        <Album images={this.state.images} active={this.state.active} />
      </div>
    );
  }
}
