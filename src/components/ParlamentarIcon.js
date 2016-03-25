import React, { Component, PropTypes } from 'react';
import {Link} from 'react-router';
import slugify from 'slugify';

const ParlamentarIcon = (props) => {
  const handleChange = (e) => {
    props.onChange(props.name, e.target.value);
  };

  let colorName = 'success';
  if (props.data['politico_impeachment'] === 'FAVOR') {
    colorName = 'error';
  } else if (props.data['politico_impeachment'] === 'INDECISO') {
    colorName = 'warning';
  }

  let hintClassName = 'hint--top hint--rounded hint--bounce hint--' + colorName;
  let iconClassName = 'fa fa-male ' + colorName;
  let parlamentarSummary = props.data['politico_nome'] + ' - ' +
    props.data['politico_partido'] + '/' +
    props.data['politico_estado']  + ' - Quer impeachment? ' +
    props.data['politico_impeachment'];
  let parlamentarUrl = '/parlamentares/' + slugify(props.data['politico_nome']);

  return (
    <Link to={parlamentarUrl} className={'image '+hintClassName} data-hint={parlamentarSummary}>
      <i className={iconClassName}></i>
    </Link>
	);
};

ParlamentarIcon.propTypes = {
  data : PropTypes.object.isRequired
};

export default ParlamentarIcon;
