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
    Tabletop.init({
      key: '1cWg1D5fmG-Y8IFCRm-2CWQt0UZixreH8OS4wu90M_A8',
      orderby: 'querimpeachment',
      reverse: true,
      callback: (data, tabletop) => { this.props.actions.saveDeputados(data, tabletop); },
      simpleSheet: true }
    );
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
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti.

</p>
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
