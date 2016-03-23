import React, { Component, PropTypes } from 'react';
import {Link} from 'react-router';

const { Glyph } = require('elemental');

const ParlamentarPhoto = (props) => {
  const handleChange = (e) => {
    props.onChange(props.name, e.target.value);
  };

  let colorName = 'success';
  if (props.data['Quer impeachment? '] === 'Sim') {
    colorName = 'error';
  } else if (props.data['Quer impeachment? '] === '') {
    colorName = 'warning';
  }

  let hintClassName = 'hint--top hint--rounded hint--bounce hint--' + colorName;
  let iconClassName = 'fa fa-male ' + colorName;
  let parlamentarSummary = props.data['Nome'] + ' - ' +
    props.data['Partido'] + ' - ' +
    props.data['UF']  + ' - Quer impeachment? ' +
    (props.data['Quer impeachment? '] === '' ? 'Indeciso' : props.data['Quer impeachment? ']);

  return (
    <Link to="/parlamentares/{props.data.Nome}" className={hintClassName} data-hint={parlamentarSummary}>
      <i className={iconClassName}></i>
    </Link>
	);
};

ParlamentarPhoto.propTypes = {
  data : PropTypes.object.isRequired
};

export default ParlamentarPhoto;
