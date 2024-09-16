from plone.dexterity.content import Container
from plone.schema.email import Email
from plone.supermodel import model
from portal.governo import _
from portal.governo.utils import validadores
from zope import schema
from zope.interface import implementer


class ISecretaria(model.Schema):
    """Definição de uma Secretaria de governo."""

    model.fieldset(
        "contato",
        _("Contato"),
        fields=[
            "email",
            "telefone",
        ],
    )
    email = Email(
        title=_("Email"),
        required=True,
        constraint=validadores.is_valid_email,
    )

    telefone = schema.TextLine(
        title=_("Telefone"),
        description=_("Informe o telefone de contato"),
        required=False,
        constraint=validadores.is_valid_telefone,
    )

    model.fieldset(
        "endereco",
        _("Endereço"),
        fields=[
            "endereco",
            "complemento",
            "cidade",
            "estado",
            "cep",
        ],
    )
    endereco = schema.TextLine(
        title=_("Endereço"),
        required=False,
        default="",
    )
    complemento = schema.TextLine(
        title=_("Complemento"),
        description=_("Ex. Anexo, Sala"),
        required=False,
        default="",
    )
    cidade = schema.TextLine(
        title=_("Cidade"),
        required=False,
        default="",
    )
    estado = schema.TextLine(
        title=_("Estado"),
        required=False,
    )
    cep = schema.TextLine(
        title=_("CEP"),
        required=False,
        default="",
    )


@implementer(ISecretaria)
class Secretaria(Container):
    """Uma secretaria de governo."""
