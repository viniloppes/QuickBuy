using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using QuickBuy.Dominio.Contratos;
using QuickBuy.Dominio.Entities;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace QuickBuy.Web.Controllers
{
    [Route("api/[controller]")]
    public class ProdutoController: Controller
    {
        private readonly IProdutoRepositorio _produtoRepositorio;
        private IHttpContextAccessor _httpContextAccessor;
        private IHostingEnvironment _hostingEnvironment;

        public ProdutoController(IProdutoRepositorio produtoRepositorio, IHttpContextAccessor httpContextAccessor, IHostingEnvironment hostingEnvironment)
        {
            _produtoRepositorio = produtoRepositorio;
            _hostingEnvironment = hostingEnvironment;
            _httpContextAccessor = httpContextAccessor;
        }

        [HttpGet]
        public IActionResult Get()
        {
            try
            {

                return Json(_produtoRepositorio.ObterTodos());
            }
            catch (Exception ex)
            {

                return BadRequest(ex.ToString());

            }
        }

        [HttpPost]
        public IActionResult Post([FromBody]Produto produto)
        {
            try
            {
                produto.Validate();
                if(!produto.IsValid)
                {
                    return BadRequest(produto.ObterMensagemValidacao());
                }
                if(produto.Id > 0)
                {
                    _produtoRepositorio.Atualizar(produto);
                } else
                {
                    _produtoRepositorio.Adicionar(produto);

                }
                return Created("api/produto", produto);
            }
            catch (Exception ex)
            {
               return  BadRequest(ex.ToString());
            }
        }

        [HttpPost("EnviarArquivo")]
        public IActionResult EnviarArquivo()
        {
            try
            {
                var formFile = _httpContextAccessor.HttpContext.Request.Form.Files["arquivoEnviado"];
                var nomeArquivo = formFile.FileName;
                var extesao = nomeArquivo.Split(".").Last();
                string novoNomeArquivo = GerarNovoNome(nomeArquivo, extesao);
                var pastaArquivos = _hostingEnvironment.WebRootPath + "\\arquivos\\";
                var nomeCompleto = pastaArquivos + novoNomeArquivo;

                using (var streamAquivo = new FileStream(nomeCompleto, FileMode.Create))
                {
                    formFile.CopyTo(streamAquivo);
                }

                return Json(novoNomeArquivo);
            }
            catch (Exception ex)
            {

                return BadRequest(ex.ToString());
            }
        }

        [HttpPost("Deletar")]
        public IActionResult Deletar([FromBody] Produto produto)
        {
            try
            {
                // produto recebido do FromBrody, deve ter a propriedade Id > 0
                _produtoRepositorio.Remover(produto);
                return Json(_produtoRepositorio.ObterTodos());
            }
            catch (Exception ex)
            {
                return BadRequest(ex.ToString());
            }
        }

        private static string GerarNovoNome(string nomeArquivo, string extesao)
        {
            var arrayNomeCompacto = Path.GetFileNameWithoutExtension(nomeArquivo).Take(10).ToArray();
            var novoNomeArquivo = new string(arrayNomeCompacto).Replace(" ", "-");
            novoNomeArquivo = $"{novoNomeArquivo}_{DateTime.Now.ToString("ddMMyyyy-HHmmss")}." + extesao;
            return novoNomeArquivo;
        }
    }
}
