import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/parlamentarActions';
import ParlamentarIcon from '../components/ParlamentarIcon';
const { Spinner, ButtonGroup, Button, Glyph, Row, Col, Card, Container, Pill } = require('elemental');

class HomePage extends Component {
  static propTypes = {
    actions: PropTypes.object.isRequired,
    appState: PropTypes.object.isRequired
  };

  componentWillMount () {
    this.props.actions.loadDeputados(this.props.appState);
  }

  /*<div className="filter-infografico">
    <span className="hint--top hint--rounded hint--bounce hint--primary" data-hint="Texto introdutório sobre a comissão."><Pill label="Comissão de relatoria" type="primary-inverted" /></span>
    <Pill label="Todos deputados" type="primary" onClear={this.handleClear} />
    <Pill label="Todos senadores" type="primary" onClear={this.handleClear} />
  </div>*/

  render() {
    return (
      <Container maxWidth={768} className="Page__home">
          <h2>Não podemos deixar que os deputados aprovem um impeachment ilegal ameaçando o Estado Democrático de Direito. É hora de pressionarmos o Congresso nas ruas e nas redes. Envie agora uma mensagem para os deputados federais.</h2>
        <div className="legenda-infografico">
          <span className="legenda"><i className="fa fa-circle error"></i> Pró-impeachment</span>
          <span className="legenda"><i className="fa fa-circle success"></i> Contra</span>
          <span className="legenda"><i className="fa fa-circle warning"></i> Indecisos</span>
        </div>
        <div className="list-parlamentares">
          {(this.props.appState.data.length < 1 ? <Spinner size="lg" /> : this.props.appState.data.map((data) => {
            return ((data['politico_comissao'] == 'sim' && data['politico_impeachment'] == 'FAVOR') ? <ParlamentarIcon data={data} /> : '');
          }))}
          {(this.props.appState.data.length < 1 ? '' : this.props.appState.data.map((data) => {
            return ((data['politico_comissao'] == 'sim' && data['politico_impeachment'] == 'INDECISO') ? <ParlamentarIcon data={data} /> : '');
          }))}
          {(this.props.appState.data.length < 1 ? '' : this.props.appState.data.map((data) => {
            return ((data['politico_comissao'] == 'sim' && data['politico_impeachment'] == 'CONTRA') ? <ParlamentarIcon data={data} /> : '');
          }))}
        </div>

        <div className="filter-infografico">
          <span className="hint--top hint--rounded hint--bounce hint--primary" data-hint="Texto introdutório sobre a comissão."><Pill label="Comissão de relatoria" type="primary-inverted" /></span>
          <Pill label="Todos deputados" type="primary" onClear={this.handleClear} />
          <Pill label="Todos senadores" type="primary" onClear={this.handleClear} />
        </div>

        <Card>
          <h2>Colabore  com essa campanha, mobilize mais gente. Vamos juntos barrar o Golpe!</h2>
          <br/>
          <br/>
          <h2>Compartilhe a Democracia:</h2>
          <div className="botoes-compartilhar">
            <span data-hint="Compartilhe" className=" hint--top hint--rounded hint--bounce hint--primary">
              <a href="https://www.facebook.com/sharer/sharer.php?u=http%3A//mapadademocracia.org.br/" className="Button Button--primary">
                <i className="fa fa-facebook"></i> Facebook
              </a>
            </span>
            <span data-hint="Tweet" className=" hint--top hint--rounded hint--bounce hint--primary">
              <a href="https://twitter.com/intent/tweet?text=Vote%20%20Contra%20o%20Impeachmende%20Dilma.%20N%C3%A3o%20h%C3%A1%20nenhuma%20base%20legal%20para%20afast%C3%A1-la.&hashtags=ContraOImpeachment,GolpeNuncaMais&url=http%3A//mapadademocracia.org.br/" className="Button Button--warning">
                <i className="fa fa-twitter"></i> Twitter
              </a>
            </span>
            <span data-hint="Envie uma mensagem" className=" hint--top hint--rounded hint--bounce hint--primary">
              <a href="whatsapp://send?text=Exerça%20a%20Democracia!%20http%3A//mapadademocracia.org.br" className="Button Button--success">
                <i className="fa fa-whatsapp"></i> Whatsapp
              </a>
            </span>
          </div>
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
