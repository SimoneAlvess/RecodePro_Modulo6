using System.Collections.ObjectModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Diagnostics.CodeAnalysis;
using System.Runtime.InteropServices;

namespace APIDestinoFacil.Models
{
    [Table("Promocoes")]
    public class Promocao
    {
        public Promocao()
        {
            Destinos = new Collection<Destino>();
        }

        [Key]
        public long PromocaoId { get; set; }

        [Required]
        public int Desconto { get; set; }

        [Required]
        public DateTime ValidadePromocao { get; set; }

        [Required]
        [StringLength(128)]
        public string Pacote { get; set; }

        public ICollection<Destino> Destinos { get; set; }

    }
}
