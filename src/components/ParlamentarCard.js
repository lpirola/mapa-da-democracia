import React, { Component, PropTypes } from 'react';
import {Link} from 'react-router';
import ParlamentarIcon from './ParlamentarIcon';
//import DemoBox from './DemoBox';
const { Button, Alert, Card, Row, Col, Glyph } = require('elemental');

const ParlamentarCard = (props) => {
  let data = props.data[0];
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

          <a className="Button Button--primary" href={'mailto:'+data.politico_email+'?subject=Excelentissimo%20Deputado%20Federal%20'+data.politico_nome+'%20&body=Exmo.%20Deputado%20'+data.politico_nome+',%0D%0A%0D%0ANossa%20democracia%20está%20em%20risco!%20A%20conduta%20política%20no%20judiciário%20brasileiro%20e%20as%20arbitrariedades%20na%20condução%20da%20Lava%20Jato%20estão%20colocando%20sob%20ameaça%20nosso%20estado%20democrático%20de%20direito.%20A%20investigação%20que%20deveria%20ser%20um%20processo%20formalmente%20jurídico,%20a%20cada%20dia,%20deixa%20mais%20evidente%20sua%20natureza%20política%20e%20o%20objetivo%20de%20abrir%20caminhos%20para%20o%20golpe.%0D%0A%0D%0AO%20processo%20de%20impeachment%20tem%20de%20ser%20denunciado%20e%20enfrentado,%20tendo%20em%20vista%20que%20extrapola%20os%20termos%20da%20legalidade.%20O%20impeachment%20é%20um%20processo%20de%20punição%20por%20crime%20de%20responsabilidade,%20no%20entanto%20não%20há%20provas%20de%20que%20tais%20crimes%20tenham%20sido%20cometidos%20no%20governo%20Dilma%20Rousseff.%0D%0A%0D%0AA%20Presidenta%20é%20acusada,%20por%20aqueles%20que%20defendem%20seu%20afastamento%20de%20ter%20cometido%20pedaladas%20fiscais.%20De%20fato,%20a%20conduta,%20que%20visa%20a%20dar%20certa%20aura%20de%20equilíbrio%20às%20contas%20públicas%20em%20momentos%20de%20aperto%20de%20caixa,%20não%20é%20boa%20prática%20de%20finança%20pública.%20No%20entanto,%20não%20se%20configura%20como%20crime%20de%20responsabilidade.%20Observe%20que%2016%20dos%2027%20governadores%20do%20país%20que%20também%20teriam%20cometido%20pedalas%20fiscais%20não%20estão%20respondendo%20por%20processos%20de%20impeachment,%20deixando%20claro%20o%20caráter%20golpista.%0D%0A%0D%0ANo%20nosso%20país%20o%20processo%20de%20impeachment%20não%20deve%20ser%20utilizado%20quando%20a%20população%20se%20sente%20insatisfeita%20com%20o%20não%20cumprimento%20de%20promessas%20eleitorais,%20quando%20a%20oposição%20não%20aceita%20os%20resultados%20obtidos%20nas%20urnas%20e%20também%20não%20é%20o%20foro%20adequado%20para%20estabelecer%20uma%20catarse%20contra%20o%20estado%20endêmico%20de%20corrupção%20nacional.%0D%0A%0D%0AO%20processo%20está%20sendo%20tocado%20a%20toque%20de%20caixa%20pelo%20deputado%20Eduardo%20Cunha%20sob%20o%20qual%20existem%20investigações%20de%20desvio%20de%20dinheiro%20e%20contas%20na%20suíça,%20em%20uma%20comissão%20com%2034%20investigados%20pelo%20Supremo%20Tribunal%20Federal.%20Caso%20aprovada%20a%20votação%20irá%20para%20a%20Câmara%20dos%20Deputados%20onde%20271%20deputados%20enfrentam%20acusações%20que%20vão%20da%20fraude%20ao%20homicídio.%0D%0A%0D%0AAprovar%20o%20impeachment%20da%20presidenta%20significa%20escrever%20na%20história%20um%20episódio%20de%20golpe,%20protagonizado%20pelo%20judiciário,%20validado%20pelo%20congresso%20e%20inflamado%20pela%20mídia.%20Promover%20o%20impeachment%20da%20presidente%20é%20abrir%20um%20precedente%20para%20que%20o%20direito%20de%20presunção%20de%20inocência%20seja%20determinado%20pela%20opinião%20pública%20e%20não%20pela%20lei.%0D%0A%0D%0A#ContraOImpeachment%20#GolpeNuncaMais'}>
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
