import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import moment from 'moment/min/moment-with-locales.min';
const ReactPropTypes = require('prop-types')

export default class Time extends React.Component {
  render() {
    return (
      <View style={[styles[this.props.position].container, this.props.containerStyle[this.props.position]]}>
        <Text style={[styles[this.props.position].text, this.props.textStyle[this.props.position]]}>
          {moment(this.props.currentMessage.createdAt).locale(this.context.getLocale()).format('LT')}
        </Text>
      </View>
    );
  }
}

const containerStyle = {
  marginLeft: 10,
  marginRight: 10,
  marginBottom: 5,
};

const textStyle = {
  fontSize: 10,
  backgroundColor: 'transparent',
  textAlign: 'right',
};

const styles = {
  left: StyleSheet.create({
    container: {
      ...containerStyle,
    },
    text: {
      color: '#aaa',
      ...textStyle,
    },
  }),
  right: StyleSheet.create({
    container: {
      ...containerStyle,
    },
    text: {
      color: '#fff',
      ...textStyle,
    },
  }),
};

Time.contextTypes = {
  getLocale: ReactPropTypes.func,
};

Time.defaultProps = {
  position: 'left',
  currentMessage: {
    createdAt: null,
  },
  containerStyle: {},
  textStyle: {},
};

Time.propTypes = {
  position: ReactPropTypes.oneOf(['left', 'right']),
  currentMessage: ReactPropTypes.object,
  containerStyle: ReactPropTypes.shape({
    left: View.propTypes.style,
    right: View.propTypes.style,
  }),
  textStyle: ReactPropTypes.shape({
    left: Text.propTypes.style,
    right: Text.propTypes.style,
  }),
};
