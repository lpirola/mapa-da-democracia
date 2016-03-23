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
      <Container maxWidth={768} className="Page__home">
        <div className="list-parlamentares">
          {this.props.appState.data.map((data) => {
            return (<ParlamentarIcon data={data} />);
          })}
        </div>
        <div className="filter-infografico">
          <Pill label="Comissão de relatoria" type="primary-inverted" />
          <Pill label="Todos deputados" type="primary" onClear={this.handleClear} />
          <Pill label="Todos senadores" type="primary" onClear={this.handleClear} />
        </div>
        <Card>
          <h2>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.</h2>
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
