import React from 'react';
import PropTypes from 'prop-types';
import { getBaseUrl } from '@plone/volto/helpers';
import { Container } from '@plone/components';
import Endereco from '../Endereco/Endereco';
import RenderBlocks from '@plone/volto/components/theme/View/RenderBlocks';

const SecretariaView = (props) => {
  const { content, location } = props;
  const { endereco, complemento, cidade, estado, cep, telefone, email } =
    content;
  const path = getBaseUrl(location?.pathname || '');

  return (
    <Container id="page-document" className="view-wrapper secretaria-view">
      <RenderBlocks {...props} path={path} />
      <Endereco
        endereco={endereco}
        complemento={complemento}
        cidade={cidade}
        estado={estado}
        cep={cep}
      />
      <Container narrow className="contato">
        <Container className="telefone">
          <span>Telefone</span>: <span>{telefone}</span>
        </Container>
        <Container className="email">
          <span>E-mail</span>: <a href={`mailto:${email}`}>{email}</a>
        </Container>
      </Container>
    </Container>
  );
};

/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
SecretariaView.propTypes = {
  content: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    email: PropTypes.string,
    telefone: PropTypes.string,
    endereco: PropTypes.string,
    complemento: PropTypes.string,
    cidade: PropTypes.string,
    estado: PropTypes.string,
    cep: PropTypes.string,
  }).isRequired,
};

export default SecretariaView;
