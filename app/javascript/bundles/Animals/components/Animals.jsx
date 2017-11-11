import PropTypes from 'prop-types';
import React from 'react';

export default class Animals extends React.Component {
  static propTypes = {
    animals: PropTypes.array.isRequired, // this is passed from the Rails view
  };

  /**
   * @param props - Comes from your rails view.
   */
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        Inside React
      </div>
    );
  }
}
