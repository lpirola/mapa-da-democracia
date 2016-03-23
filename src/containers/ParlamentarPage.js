import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/parlamentarActions';
import ParlamentarIcon from '../components/ParlamentarIcon';
import ParlamentarCard from '../components/ParlamentarCard';
const { Row, Col, Glyph, Card, Container, Pill } = require('elemental');
import Tabletop from 'tabletop';
import slugify from 'slugify';

class ParlamentarPage extends Component {
  static propTypes = {
    actions: PropTypes.object.isRequired,
    appState: PropTypes.object.isRequired,
    params: PropTypes.object.isRequired
  };

  componentWillMount () {
    let { name } = this.props.params;
    this.parlamentarData = this.props.appState.data.length < 1 ? '' : this.props.appState.data.filter((data) => {
      return (slugify(data['politico_nome']) == name ? data : null);
    });
    // console.log(this.parlamentarData);
  }

  render() {
    return (

      <Container maxWidth={768} className="Page__parlamentar">
        <ParlamentarCard data={this.parlamentarData} />
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
)(ParlamentarPage);
