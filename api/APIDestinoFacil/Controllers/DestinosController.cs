using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using APIDestinoFacil.Context;
using APIDestinoFacil.Models;

namespace APIDestinoFacil.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DestinosController : ControllerBase
    {
        private readonly ApiDbContext _context;

        public DestinosController(ApiDbContext context)
        {
            _context = context;
        }

        // GET: api/Destinos
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Destino>>> GetDestinos()
        {
          if (_context.Destinos == null)
          {
              return NotFound();
          }
            return await _context.Destinos.ToListAsync();
        }

        // GET: api/Destinos/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Destino>> GetDestino(long id)
        {
          if (_context.Destinos == null)
          {
              return NotFound();
          }
            var destino = await _context.Destinos.FindAsync(id);

            if (destino == null)
            {
                return NotFound();
            }

            return destino;
        }

        // PUT: api/Destinos/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutDestino(long id, Destino destino)
        {
            if (id != destino.DestinoId)
            {
                return BadRequest();
            }

            _context.Entry(destino).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!DestinoExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Destinos
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Destino>> PostDestino(Destino destino)
        {
          if (_context.Destinos == null)
          {
              return Problem("Entity set 'ApiDbContext.Destinos'  is null.");
          }
            _context.Destinos.Add(destino);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetDestino", new { id = destino.DestinoId }, destino);
        }

        // DELETE: api/Destinos/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteDestino(long id)
        {
            if (_context.Destinos == null)
            {
                return NotFound();
            }
            var destino = await _context.Destinos.FindAsync(id);
            if (destino == null)
            {
                return NotFound();
            }

            _context.Destinos.Remove(destino);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool DestinoExists(long id)
        {
            return (_context.Destinos?.Any(e => e.DestinoId == id)).GetValueOrDefault();
        }
    }
}
