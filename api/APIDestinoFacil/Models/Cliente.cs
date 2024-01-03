using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Collections.ObjectModel;

namespace APIDestinoFacil.Models
{
    [Table("Clientes")]
    public class Cliente
    {
        public Cliente()
        {
            Compras = new Collection<Compra>();
        }

        [Key]
        public long ClienteId { get; set; }

        [Required]
        [StringLength(128)]
        public string Nome { get; set; }

        [Required]
        [StringLength(128)]
        public string Email { get; set; }

        [Required]
        [StringLength(128)]
        public string Senha { get; set; }

        public ICollection<Compra> Compras { get; set; }
    }
}
