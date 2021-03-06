import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/parlamentarActions';
import ParlamentarIcon from '../components/ParlamentarIcon';
import ParlamentarList from '../components/ParlamentarList';
import { Spinner, ButtonGroup, Button, Row, Col, Card, Container, Pill } from 'elemental';

const handleShareFacebook = (e) => {
  window.FB.ui(
  {
    method: 'share',
    href: 'http://mapadademocracia.org.br'
  }, function(response){});
};


class HomePage extends Component {
  static propTypes = {
    actions: PropTypes.object.isRequired,
    appState: PropTypes.object.isRequired
  };

  componentWillMount () {
    this.props.actions.loadDeputados(this.props.appState);
  }

  handleComissaoParlamentares (filter) {
    let filterComissao = true;
    if (filter === 'showAll') {

      filterComissao = false;
    }

    this.props.actions.comissaoDeputados(this.props.appState.data, filterComissao);
  }

  render() {
    return (
      <Container maxWidth={768} className="Page__home">
        <h2>Comissão de impeachment</h2>
        <Row>
          <Col sm="1/2" className="legenda-infografico">
            <span className="legenda"><i className="fa fa-circle error"></i> Contra democracia</span>
            <span className="legenda"><i className="fa fa-circle success"></i> À favor</span>
            <span className="legenda"><i className="fa fa-circle warning"></i> Indeciso</span>
          </Col>


          <Col sm="1/2" className="filter-infografico">
            <span className="hint--top hint--rounded hint--bounce hint--primary" data-hint="Texto introdutório sobre a comissão.">
              <Pill label="Mostrar todos" type="primary-inverted" onClick={this.handleComissaoParlamentares.bind(this, 'showAll')}  />

              </span>
          </Col>
        </Row>

        <ParlamentarList data={this.props.appState.filteredParlamentar} />


        <Card>
          <h2>Colabore  com essa campanha, mobilize mais gente. Vamos juntos barrar o Golpe!</h2>
        </Card>
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
