import PropTypes from 'prop-types';
import React from 'react';

import player from '../Player';

export default class Animal extends React.Component {
  static propTypes = {
    animal: PropTypes.object.isRequired,
    loadImages: PropTypes.func.isRequired
  };

  render() {
    console.log(this.props);
    const { animal, loadImages } = this.props;

    return (
      <figure
        className="animal"
        onClick={e => {
          player.play(animal.sound);
          loadImages(animal);
        }}
      >
        <div
          className="background"
          style={{ backgroundImage: `url('${animal.image}')` }}
        />

        <figcaption style={{ backgroundColor: animal.bg_color }}>
          <h2>{animal.name}</h2>
          <img src={animal.icon} alt={animal.name} className="animal-icon" />
        </figcaption>
      </figure>
    );
  }
}
