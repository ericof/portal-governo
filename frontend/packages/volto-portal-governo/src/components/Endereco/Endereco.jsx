import React from 'react';
import PropTypes from 'prop-types';
import { Container } from '@plone/components';

const Endereco = (props) => {
  const { endereco, complemento, cidade, estado, cep } = props;
  return (
    <Container narrow className={'endereco-wrapper'}>
      {endereco && (
        <Container>
          <span className="endereco">{endereco}</span>
        </Container>
      )}
      {complemento && (
        <Container>
          <span className="complemento">{complemento}</span>
        </Container>
      )}
      <Container>
        <span className="cidade">{cidade}</span> -{' '}
        <span className="estado">{estado}</span>
      </Container>
      {cep && (
        <Container>
          <span className="cep">{cep}</span>
        </Container>
      )}
    </Container>
  );
};

Endereco.propTypes = {
  endereco: PropTypes.string,
  complemento: PropTypes.string,
  cidade: PropTypes.string,
  estado: PropTypes.string,
  cep: PropTypes.string,
};

export default Endereco;
