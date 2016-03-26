import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/parlamentarActions';
import ParlamentarIcon from '../components/ParlamentarIcon';
import ParlamentarCard from '../components/ParlamentarCard';
const { Row, Spinner, Col, Card, Container, Pill } = require('elemental');

class ParlamentarPage extends Component {
  static propTypes = {
    actions: PropTypes.object.isRequired,
    appState: PropTypes.object.isRequired,
    params: PropTypes.object.isRequired
  };

  componentWillMount () {
    let { name } = this.props.params;

//    this.props.actions.loadDeputados(this.props.appState);
    this.props.actions.loadDeputado(this.props.appState, name);

    // this.parlamentarData = {};
    // if (this.props.appState.data.length > 1) {
    //   this.parlamentarData = this.props.appState.data.filter((data) => {
    //     return (slugify(data['title']) == name ? data : null);
    //   });
    // }
  }

  render() {
    return (
      <Container maxWidth={768} className="Page__parlamentar">
        <Link to="/parlamentares">Voltar</Link>
        {(!this.props.appState.selectedParlamentar.length ? <Spinner size="lg" /> : <ParlamentarCard data={this.props.appState.selectedParlamentar} />)}
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
