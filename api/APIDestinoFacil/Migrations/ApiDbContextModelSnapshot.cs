﻿// <auto-generated />
using System;
using APIDestinoFacil.Context;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace APIDestinoFacil.Migrations
{
    [DbContext(typeof(ApiDbContext))]
    partial class ApiDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "6.0.25")
                .HasAnnotation("Relational:MaxIdentifierLength", 64);

            modelBuilder.Entity("APIDestinoFacil.Models.Cliente", b =>
                {
                    b.Property<long>("ClienteId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("bigint");

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasMaxLength(128)
                        .HasColumnType("varchar(128)");

                    b.Property<string>("Nome")
                        .IsRequired()
                        .HasMaxLength(128)
                        .HasColumnType("varchar(128)");

                    b.Property<string>("Senha")
                        .IsRequired()
                        .HasMaxLength(128)
                        .HasColumnType("varchar(128)");

                    b.HasKey("ClienteId");

                    b.ToTable("Clientes");
                });

            modelBuilder.Entity("APIDestinoFacil.Models.Compra", b =>
                {
                    b.Property<long>("CompraId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("bigint");

                    b.Property<long>("ClienteId")
                        .HasColumnType("bigint");

                    b.Property<DateTime>("DataHoraViagem")
                        .HasColumnType("datetime(6)");

                    b.Property<long>("DestinoId")
                        .HasColumnType("bigint");

                    b.Property<string>("FormaPagamento")
                        .IsRequired()
                        .HasMaxLength(128)
                        .HasColumnType("varchar(128)");

                    b.HasKey("CompraId");

                    b.HasIndex("ClienteId");

                    b.HasIndex("DestinoId");

                    b.ToTable("Compras");
                });

            modelBuilder.Entity("APIDestinoFacil.Models.Destino", b =>
                {
                    b.Property<long>("DestinoId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("bigint");

                    b.Property<string>("NomeDestino")
                        .IsRequired()
                        .HasMaxLength(128)
                        .HasColumnType("varchar(128)");

                    b.Property<decimal>("Preco")
                        .HasColumnType("decimal(10,2)");

                    b.Property<decimal>("PrecoTotal")
                        .HasColumnType("decimal(10,2)");

                    b.Property<long>("PromocaoId")
                        .HasColumnType("bigint");

                    b.Property<string>("Transporte")
                        .IsRequired()
                        .HasMaxLength(128)
                        .HasColumnType("varchar(128)");

                    b.Property<string>("UrlImagem")
                        .IsRequired()
                        .HasMaxLength(300)
                        .HasColumnType("varchar(300)");

                    b.HasKey("DestinoId");

                    b.HasIndex("PromocaoId");

                    b.ToTable("Destinos");
                });

            modelBuilder.Entity("APIDestinoFacil.Models.Promocao", b =>
                {
                    b.Property<long>("PromocaoId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("bigint");

                    b.Property<int>("Desconto")
                        .HasColumnType("int");

                    b.Property<string>("Pacote")
                        .IsRequired()
                        .HasMaxLength(128)
                        .HasColumnType("varchar(128)");

                    b.Property<DateTime>("ValidadePromocao")
                        .HasColumnType("datetime(6)");

                    b.HasKey("PromocaoId");

                    b.ToTable("Promocoes");
                });

            modelBuilder.Entity("APIDestinoFacil.Models.Compra", b =>
                {
                    b.HasOne("APIDestinoFacil.Models.Cliente", "Cliente")
                        .WithMany()
                        .HasForeignKey("ClienteId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("APIDestinoFacil.Models.Destino", "Destino")
                        .WithMany()
                        .HasForeignKey("DestinoId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Cliente");

                    b.Navigation("Destino");
                });

            modelBuilder.Entity("APIDestinoFacil.Models.Destino", b =>
                {
                    b.HasOne("APIDestinoFacil.Models.Promocao", "Promocao")
                        .WithMany("Destinos")
                        .HasForeignKey("PromocaoId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Promocao");
                });

            modelBuilder.Entity("APIDestinoFacil.Models.Promocao", b =>
                {
                    b.Navigation("Destinos");
                });
#pragma warning restore 612, 618
        }
    }
}