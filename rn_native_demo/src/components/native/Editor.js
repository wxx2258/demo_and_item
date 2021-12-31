import PropTypes from 'prop-types';
import React from 'react';
import {requireNativeComponent} from 'react-native';

class Editor extends React.Component {
  render() {
    return <RNTEditor {...this.props} />;
  }
}

Editor.propTypes = {};

const RNTEditor = requireNativeComponent('RNTEditor', Editor);

export default Editor;
