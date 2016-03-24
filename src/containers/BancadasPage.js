import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/parlamentarActions';
import ParlamentarPhoto from '../components/ParlamentarPhoto';
const { Alert, Spinner, ButtonGroup, Button, Glyph, Row, Col, Card, Container, Pill } = require('elemental');
import Tabletop from 'tabletop';

class BancadaPage extends Component {
  static propTypes = {
    actions: PropTypes.object.isRequired,
    appState: PropTypes.object.isRequired
  };

  componentWillMount () {
    this.props.actions.loadDeputados(this.props.appState);
  }

  render() {
    return (
      <Container maxWidth={768} className="Page__home">
        <Row>
          <Col>
            <h2>Parlamentares <span className="featured success">contra</span> a democracia</h2>
          </Col>
          <Col>
            <Card>
              <Alert type="danger"><strong>Como assim?</strong></Alert>
              <p> Esses parlamentares estão dizendo que vão votar a favor da abertura do processo de impeachment. 

                 O problema é que esse pedido não tem base legal e vai desrespeitar o voto de 54 milhões de pessoas.

                 O nome disso é GOLPE, e contamos com a sua ajuda para ajudar no convencimento de cada deputado.></p>
            </Card>
          </Col>
        </Row>

        <div className="list-parlamentares">
          {(this.props.appState.data.length < 1 ? <Spinner size="lg" /> : this.props.appState.data.map((data) => {
            return (data['politico_impeachment'] === 'FAVOR' ? <ParlamentarPhoto data={data} /> : '');
          }))}
        </div>

          <h2>Navegue pelos deputados e pressione!</h2>
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
)(BancadaPage);
