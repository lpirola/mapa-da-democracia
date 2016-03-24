import React, { PropTypes } from 'react';
import { Link } from 'react-router';
const { Container } = require('elemental');

// Since this component is simple and static, there's no parent container for it.
const AboutPage = () => {
    return (
      <Container maxWidth={768} className="Page__about">
        <h2>Motivação</h2>
          <p>A Comissão Especial do Impeachment tem 65 deputados. Destes, 37 estão na mira da Justiça, incluindo o presidente da comissão, deputado Rogério Rosso (PSD-DF), e o relator Jovair Arantes (PTB-GO), homem-forte de Eduardo Cunha, presidente da Casa e também com muito a explicar ao Poder Judiciário.</p>
          
          <p>O impeachment é uma ferramenta que só pode ser usada com base legal, não como forma de derrubar um governo democraticamente eleito, por mais que possamos discordar dele.</p>
          
          <p>Até hoje não foram apresentadas provas que justifiquem o impeachment de Dilma. Apesar disso, a mídia inflama factóides e estimula um cenário nacional de apoio a um golpe institucional. </p>
          
          <p>50 anos após a implementação da ditadura militar no Brasil, não podemos deixar que os deputados aprovem um impeachment ilegal ameaçando o Estado Democrático de Direito.</p>
        <h2>Contato</h2>
        <p>
          This example app is part of the <a href="https://github.com/coryhouse/react-slingshot">React-Slingshot
          starter kit</a>.
        </p>


        <h2>Colaboradores</h2>
        <p>
          <Link to="/badlink">Edite esses arquivos no github</Link> para trocar o texto.
        </p>
      </Container>
    );
};

export default AboutPage;
