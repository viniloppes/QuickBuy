using Microsoft.EntityFrameworkCore.Migrations;

namespace QuickBuy.Repositorio.Migrations
{
    public partial class PaoBatata : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "FormaPagamento",
                columns: new[] { "Id", "Descricao", "Nome" },
                values: new object[] { 4, "Forma de Pagamento Depósito", "Pão de Batata" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "FormaPagamento",
                keyColumn: "Id",
                keyValue: 4);
        }
    }
}
