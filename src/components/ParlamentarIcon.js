import React, { Component, PropTypes } from 'react';
const { Glyph } = require('elemental');

const ParlamentarIcon = (props) => {
  const handleChange = (e) => {
    props.onChange(props.name, e.target.value);
  };

  let className = 'fa fa-male success';
  if (props.data['Quer impeachment? '] === 'Sim') {
    className = 'fa fa-male danger';
  } else if (props.data['Quer impeachment? '] === '') {
    className = 'fa fa-male warning';
  }

  return (
    <i className={className}></i>
	);
};

ParlamentarIcon.propTypes = {
  data : PropTypes.object.isRequired
};

export default ParlamentarIcon;
