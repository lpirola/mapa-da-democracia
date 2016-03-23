import React, { Component, PropTypes } from 'react';
const { Glyph } = require('elemental');

const ParlamentarIcon = (props) => {
  const handleChange = (e) => {
    props.onChange(props.name, e.target.value);
  };

  let className = 'success';
  if (props.data['Quer impeachment? '] === 'Sim') {
    className = 'danger';
  } else if (props.data['Quer impeachment? '] === '') {
    className = 'warning';
  }

  let hintClassName = 'hint--top hint--rounded hint--bounce hint--' + className;
  let iconClassName = 'fa fa-male ' + className;
  let parlamentarSummary = props.data['Nome'] + ' - ' +
    props.data['Partido'] + ' - ' +
    props.data['UF']  + ' - Quer impeachment? ' +
    (props.data['Quer impeachment? '] === '' ? 'Indeciso' : '');

  return (
    <span className={hintClassName} data-hint={parlamentarSummary}>
      <i className={iconClassName}></i>
    </span>
	);
};

ParlamentarIcon.propTypes = {
  data : PropTypes.object.isRequired
};

export default ParlamentarIcon;
