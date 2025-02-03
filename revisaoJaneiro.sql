-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Tempo de geração: 04-Fev-2025 às 00:08
-- Versão do servidor: 10.4.28-MariaDB
-- versão do PHP: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `revisaoJaneiro`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `anotacao`
--

CREATE TABLE `anotacao` (
  `id` int(11) NOT NULL,
  `conteudo` text NOT NULL,
  `created_by` int(11) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_by` int(11) DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `deleted_by` int(11) DEFAULT NULL,
  `deleted_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `anotacao`
--

INSERT INTO `anotacao` (`id`, `conteudo`, `created_by`, `created_at`, `updated_by`, `updated_at`, `deleted_by`, `deleted_at`) VALUES
(1, 'fsafsafsafa', 1, '2025-01-30 19:34:28', NULL, NULL, 1, '2025-01-30 19:44:12'),
(3, 'dsdsafsaf sa afsa', 2, '2025-01-30 19:45:32', NULL, NULL, NULL, NULL),
(4, 'blablabla', 3, '2025-01-30 19:45:42', 1, '2025-01-31 00:08:05', NULL, '2025-01-31 00:08:05'),
(5, 'dsdsadsad', 1, '2025-01-30 19:45:42', NULL, NULL, NULL, NULL),
(6, 'meu insert via api :)', 1, '2025-01-30 23:25:23', NULL, '2025-01-30 23:25:23', NULL, NULL),
(7, 'meu insert via api :)', 1, '2025-01-30 23:46:48', NULL, '2025-01-30 23:46:48', NULL, NULL);

-- --------------------------------------------------------

--
-- Estrutura da tabela `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `email` varchar(125) NOT NULL,
  `password` varchar(255) NOT NULL,
  `name` varchar(125) NOT NULL,
  `created_by` int(11) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_by` int(11) DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL ON UPDATE current_timestamp(),
  `deleted_by` int(11) DEFAULT NULL,
  `deleted_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Extraindo dados da tabela `users`
--

INSERT INTO `users` (`id`, `email`, `password`, `name`, `created_by`, `created_at`, `updated_by`, `updated_at`, `deleted_by`, `deleted_at`) VALUES
(1, 'marcos.rodrigues@bol.com.br', '$2y$10$poNF6TEzWHYA2hNi5S.U6.eo/zbKxa2rXBDPbrlcBb1IHBuDL35Ey', 'Matheus Rubens', 0, '2025-01-30 19:46:44', NULL, '2025-02-03 19:37:25', NULL, NULL),
(2, 'fabio.fonseca@uol.com.br', 'dsadada', 'Fabio Fonseca', 0, '2025-01-30 19:46:44', NULL, NULL, NULL, NULL);

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `anotacao`
--
ALTER TABLE `anotacao`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `anotacao`
--
ALTER TABLE `anotacao`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de tabela `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
