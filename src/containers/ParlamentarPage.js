import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/parlamentarActions';
import ParlamentarIcon from '../components/ParlamentarIcon';
const { Glyph, Card, Container, Pill } = require('elemental');
import Tabletop from 'tabletop';

class HomePage extends Component {
  static propTypes = {
    actions: PropTypes.object.isRequired,
    appState: PropTypes.object.isRequired
  };

  componentWillMount () {
    Tabletop.init({
      key: '1cWg1D5fmG-Y8IFCRm-2CWQt0UZixreH8OS4wu90M_A8',
      orderby: 'querimpeachment',
      callback: (data, tabletop) => { this.props.actions.saveDeputados(data, tabletop); },
      simpleSheet: true }
    );
  }

  render() {
    return (
      <Container maxWidth={768} className="Page__parlamentar">
        Página do parlamentar
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {
    appState: state.fuelSavingsAppState
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
