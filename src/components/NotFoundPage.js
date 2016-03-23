import React from 'react';
import { Link } from 'react-router';
const { Container } = require('elemental');

const NotFoundPage = () => {
  return (
    <Container maxWidth={768} className="Page__not-found">
      <h2>
        404 Página não encontrada
      </h2>
      <Link to="/">Voltar ao início </Link>
    </Container>
  );
};

export default NotFoundPage;
