import React, { Component, PropTypes } from 'react';
import {Link} from 'react-router';
import slugify from 'slugify';
import ParlamentarIcon from './ParlamentarIcon';

const { Spinner, Glyph } = require('elemental');

const ParlamentarList = (props) => {
  let labelActive = labelActive = (<h2>É <span className="featured success">PRÓ</span> DEMOCRACIA</h2>);

  if (props.data.politico_impeachment == "FAVOR") {
    labelActive = (<h2>É <span className="featured error">CONTRA</span> A DEMOCRACIA</h2>);
  } else if (props.data["politico_impeachment"] === "INDECISO") {
    labelActive = (<h2>AINDA <span className="featured warning">NÃO APOIA</span> DEMOCRACIA</h2>);
  }

  return (
    props.data.length < 1 ? <Spinner size="lg" /> : <div className="list-parlamentares">
    {
      props.data.map((data) => {
        return <ParlamentarIcon data={data} />;
      })
    }</div>
  );

};

ParlamentarList.propTypes = {
  data : PropTypes.array.isRequired
};

export default ParlamentarList;
