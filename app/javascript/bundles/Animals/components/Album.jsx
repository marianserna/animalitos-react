import PropTypes from 'prop-types';
import React from 'react';

export default class Album extends React.Component {
  static propTypes = {
    images: PropTypes.array.isRequired,
    active: PropTypes.bool.isRequired
  };

  render() {
    // const images = this.props.images;
    // const active = this.props.active;
    const { images, active } = this.props;

    return (
      <section className={`album ${active ? 'active' : null}`}>
        {images.map(image => (
          <img
            key={image.id}
            src={image.urls.regular}
            alt={image.description}
          />
        ))}
      </section>
    );
  }
}
