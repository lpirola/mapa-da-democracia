import React, { Component, PropTypes } from 'react';
import {Link} from 'react-router';
import ParlamentarIcon from './ParlamentarIcon';
//import DemoBox from './DemoBox';
const { Button, Alert, Card, Row, Col, Glyph } = require('elemental');

const ParlamentarCard = (props) => {
  let data = props.data[0];
  console.log(props.data[0]);
//  console.log(data);
  const handleChange = (e) => {
    props.onChange(props.name, e.target.value);
  };

  let colorName = 'success';
  if (props.data['politico_impeachment'] === 'FAVOR') {
    colorName = 'error';
  } else if (props.data['politico_impeachment'] === '') {
    colorName = 'warning';
  }


  let hintClassName = 'hint--top hint--rounded hint--bounce hint--' + colorName;
  let iconClassName = 'fa fa-male ' + colorName;
  let parlamentarSummary = data['politico_nome'] + ' - ' +
  data['politico_partido'] + '/' +
  data['politico_estado']  + ' - Quer impeachment? ' +
  data['politico_impeachment'];


  let parlamentarTelUrl = 'tel:' + data['politico_phone'];

  return (
  <div>
    <Row className="card-parlamentar">
      <Col sm="1/3" className="profile-image">
        <ParlamentarIcon data={data} />
          <h3>
            <i className="fa fa-map-marker"></i> {data.politico_estado} &nbsp;&nbsp;
            <i className="fa fa-flag"></i> {data.politico_partido}
          </h3>
      </Col>
      <Col sm="2/3">
        <div className="profile-summary">
          <h1>{data.politico_nome}</h1>
          <h2>Deputado Federal</h2>

        </div>
        <div className="profile-contacts">
          <h4>Formas de contato:</h4>
          <a className="Button Button--primary" href={'tel:061'+data['politico_phone']}>
            <span className="">
              <i className="fa fa-phone"></i> Telefone
            </span>
          </a>

          <a className="Button Button--primary" href={'mailto:'+data.politico_email+'?subject=Excelentissimo%20Deputado%20Federal%20'+data.politico_nome+'%20&body=Excelentissimo%20Deputado%20Federal%20'+data.politico_nome+'%20...'}>
            <span className="">
              <i className="fa fa-envelope"></i> E-mail
            </span>
          </a>

          <a className="Button Button--primary" target="_blank" href={data.politico_facebook}>
            <span className="">
              <i className="fa fa-facebook"></i> Facebook
            </span>
          </a>

          <a className="Button Button--primary" href={data.politico_twitter}>
            <span className="">
              <i className="fa fa-twitter"></i> Twitter
            </span>
          </a>
        </div>
      </Col>
    </Row>
    <Card>

      <h2>Parlamentar <span className="featured success">contra</span> a democracia, pressione:</h2>

      <Alert type="error">
        <strong>Instruções:</strong>
        <p><strong>Por telefone: </strong>Ligue para o gabinete, peça para deixar um recado para o(a) parlamentar. Diga que você espera seu voto contrário à tentativa ilegal de impeachment de Dilma. Reforce que há milhares de pessoas acompanhando este processo e contando com o(a) parlamentar.</p>
        <p><strong>Por e-mail: </strong>Envie um email direto para o(a) parlamentar.</p>
        <p><strong>No facebook: </strong>faça um post ou um comentário na página do(a) parlamentar. Diga que você espera seu voto contrário à tentativa ilegal de impeachment de Dilma. Reforce que há milhares de pessoas acompanhando este processo e contando com o(a) parlamentar.</p>
        <p><strong>No twitter: </strong>faça um tweet para o(a) parlamentar. Diga que o impeachment de Dilma é ilegal e que conta com ele(ela) para barrar o golpe. Use a tag #ContraOImpeachment</p>
      </Alert>
    </Card>
  </div>
  );
};

ParlamentarCard.propTypes = {
  data : PropTypes.array.isRequired
};

export default ParlamentarCard;
