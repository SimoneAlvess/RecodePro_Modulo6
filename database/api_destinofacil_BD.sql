use apidestinofacil;

/* Seleção Tabelas */
select * from clientes;
select * from destinos;
select * from promocoes;
select * from compra;

/* Inserção de Dados */
# Clientes
insert into apidestinofacil.clientes (nome, email, senha) values 
('Vitoria Brito', 'vitoriabrito@email.com', '2678'),
('Carla Almeida', 'carlaalmeida@email.com', '6798'),
('Maria Alves', 'mariaalves@email.com', '1234'),
('Carlos Santos', 'carlosantos@email.com', '3629'),
('Marcos Souza', 'marcossouza@email.com', '9356'),
('Sofia Benjamin', 'sofiabenjamin@email.com', '5670'),
('Felipe Oliveira', 'felipeoliveira@email.com', '7893'),
('Pedro Santos', 'pedrosantos@email.com', '0137'),
('Ana Oliveira', 'anaoliveira@email.com', '1874'),
('Beatriz Lima', 'beatriz.lima@email.com', '1459');

# Promoções
insert into apidestinofacil.promocoes (desconto, validadePromocao, pacote) values 
('25', '2024-09-19 15:00:00', 'Nacional'),
('20', '2025-12-21 12:30:00', 'Nacional'),
('30', '2024-02-25 17:00:00', 'Nacional'),
('10', '2025-09-12 12:40:00', 'Nacional'),
('15', '2025-01-22 10:45:00', 'Nacional'),
('20', '2024-01-02 19:30:00', 'Internacional'),
('45', '2025-05-20 09:20:00', 'Internacional'),
('50', '2024-07-11 11:25:00', 'Internacional'),
('15', '2025-04-02 13:39:00', 'Internacional');

# Destinos
insert into apidestinofacil.destinos (nomedestino, preco, transporte, urlimagem, precototal, promocaoId) values 
('Rio de Janeiro', 1500, 'Aéreo','https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdXB3azYxOTAwMzYwLXdpa2ltZWRpYS1pbWFnZS1rb3dlMXJpZC5qcGc.jpg', 1050, 4),
('Gramado', 920, 'Aéreo', 'https://blog.hurb.com/wp-content/uploads/2023/07/iStock-688523034-1024x683.jpg', 828, 5),
('Beberibe', 890, 'Rodoviário', 'https://www.viagensecaminhos.com/wp-content/uploads/2013/02/praia-morro-branco-ceara.jpg', 756.5, 6),
('Foz do Iguaçu', 2100, 'Aéreo', 'https://www.melhoresdestinos.com.br/wp-content/uploads/2019/07/passagens-aereas-foz-do-iguacu-capa2019-05-820x430.jpg', 1470, 4),
('Maragogi', 1100, 'Rodoviário', 'https://upload.wikimedia.org/wikipedia/commons/b/b8/Gal%C3%A9s_de_maragogi.jpg', 880, 3),
('Bonito', 1000, 'Aéreo', 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Abismo_Anhumas%2C_Bonito%2C_MS.JPG/640px-Abismo_Anhumas%2C_Bonito%2C_MS.JPG', 800, 3),
('Capitolio', 879, 'Rodoviário', 'https://lirp.cdn-website.com/b4aad4f5/dms3rep/multi/opt/lago-de-furnas-capitolio-minas-gerais-1920w.jpg', 791.1, 5),
('Holambra', 990, 'Aéreo', 'https://www.melhoresdestinos.com.br/wp-content/uploads/2022/10/holambra-cidade-flores-capa.jpg', 841.5, 6),
('New York', 2000, 'Aéreo', 'https://www.remessaonline.com.br/blog/wp-content/uploads/2022/06/morar-em-nova-york-1170x777.jpg.webp', 1700, 10),
('Paris', 3100, 'Aéreo', 'https://www.melhoresdestinos.com.br/wp-content/uploads/2019/02/passagens-aereas-paris-capa2019-02.jpg', 2480, 7),
('Seoul', 5200, 'Aéreo', 'https://yazigitravel.com.br/wp-content/uploads/2020/06/Viagem-para-Seul-Coreia-do-Sul-Mathew-Schwartz-1.jpg', 2860,  8),
('Orlando', 1890, 'Aéreo', 'https://www.cp4.com.br/wp-content/uploads/2019/02/IslandsofAdventure.jpg', 1228.5, 1),
('Roma', 3350, 'Aéreo', 'https://res.cloudinary.com/hello-tickets/image/upload/c_limit,f_auto,q_auto,w_1300/v1640835927/o3pfl41q7m5bj8jardk0.jpg', 1675, 9),
('Cairo', 5104, 'Aéreo', 'https://upload.wikimedia.org/wikipedia/commons/d/db/Cairo_From_Tower_%28cropped%29.jpg', 2807.2, 8),
('Londres', 2520, 'Aéreo', 'https://inglaterrabrasil.com.br/wp-content/uploads/sites/8/2022/08/conheca-londres.jpg', 2016, 7),
('Tóquio', 5870, 'Aéreo', 'https://s2.glbimg.com/1NqTrdukaHaNY2ZGKqaSkb2dnO4=/e.glbimg.com/og/ed/f/original/2021/08/02/gettyimages-1208124099.jpg', 2935, 9);

# Compras
insert into apidestinofacil.compras (datahoraviagem, formapagamento, clienteid, destinoid) values
('2024-12-31 08:00:00', 'Débito', 6, 2),
('2024-10-06 12:00:00', 'Crédito', 7, 4),
('2024-01-10 07:30:00', 'Débito', 10, 6),
('2024-01-20 18:00:00', 'Débito', 12, 5),
('2024-12-29 17:20:00', 'Crédito', 8, 8),
('2024-02-10 13:40:00', 'Crédito', 13, 10),
('2024-06-27 06:20:00', 'Débito', 11, 7),
('2024-04-27 21:00:00', 'Crédito', 2, 14),
('2024-11-08 12:30:00', 'Débito', 4, 15),
('2024-03-15 15:20:00', 'Crédito', 6, 17),
('2024-09-16 11:00:00', 'Débito', 9, 3);