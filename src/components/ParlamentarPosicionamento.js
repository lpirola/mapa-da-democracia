import React, { Component, PropTypes } from 'react';
import {Link} from 'react-router';
import slugify from 'slugify';

const ParlamentarPosicionamento = (props) => {
  let labelActive = labelActive = (<h2>É <span className="featured success">PRÓ</span> DEMOCRACIA</h2>);

  if (props.data.politico_impeachment == "FAVOR") {
    labelActive = (<h2>É <span className="featured error">CONTRA</span> A DEMOCRACIA</h2>);
  } else if (props.data["politico_impeachment"] === "INDECISO") {
    labelActive = (<h2>AINDA <span className="featured warning">NÃO APOIA</span> DEMOCRACIA</h2>);
  }
  return labelActive;

};

ParlamentarPosicionamento.propTypes = {
  data : PropTypes.object.isRequired
};

export default ParlamentarPosicionamento;
