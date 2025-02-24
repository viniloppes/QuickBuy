﻿using System.Collections;
using System.Collections.Generic;

namespace QuickBuy.Dominio.Entities
{
    public class Usuario : Entidade
    {
        public int Id { get; set; }
        public string Email { get; set; }
        public string Senha { get; set; }
        public string Nome { get; set; }
        public string SobreNome { get; set; }
        public bool EhAdministrador { get; set; }

        /// <summary>
        ///     Um usuario pode ter 1 ou muitos pedidps
        /// </summary>
        public virtual ICollection<Pedido> ItensPedido { get; set; }

        public override void Validate()
        {
            if (string.IsNullOrEmpty(Email))
                AdicionarCritica("Email não informado");

            if (string.IsNullOrEmpty(Senha))
                AdicionarCritica("Senha não foi informada");
        }
    }
}
