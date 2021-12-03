using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace QuickBuy.Dominio.Entities
{
    public abstract class Entidade
    {
        private List<string> _mensagensValidacao { get; set; }
        private List<string> mensagemValidacao 
        {
            get { return _mensagensValidacao ?? (_mensagensValidacao = new List<string>()); } 
        }

        protected void LimparMensagemValidacao()
        {
            mensagemValidacao.Clear();
        }

        protected void AdicionarCritica( string mensagem)
        {
            mensagemValidacao.Add(mensagem);
        }

        public string ObterMensagemValidacao()
        {
            return string.Join(". ", mensagemValidacao);
        }

        public abstract void Validate();
        public bool IsValid
        {
            get
            {
                return !mensagemValidacao.Any();
            }
        }
    }
}
