-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 21, 2023 at 01:57 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.1.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sportska_radnja`
--

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `kategorijas`
--

CREATE TABLE `kategorijas` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `naziv` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `kategorijas`
--

INSERT INTO `kategorijas` (`id`, `naziv`, `created_at`, `updated_at`) VALUES
(1, 'Patike', '2023-02-20 21:40:40', '2023-02-20 21:40:40'),
(2, 'Dukserica', '2023-02-20 21:40:40', '2023-02-20 21:40:40'),
(3, 'Jakna', '2023-02-20 21:40:40', '2023-02-20 21:40:40'),
(4, 'Lopta', '2023-02-20 21:40:40', '2023-02-20 21:40:40'),
(5, 'Majica', '2023-02-20 21:40:40', '2023-02-20 21:40:40'),
(6, 'Trenerka', '2023-02-20 21:40:40', '2023-02-20 21:40:40');

-- --------------------------------------------------------

--
-- Table structure for table `korpas`
--

CREATE TABLE `korpas` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_reset_tokens_table', 1),
(3, '2019_08_19_000000_create_failed_jobs_table', 1),
(4, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(5, '2023_02_15_173333_create_porukas_table', 1),
(6, '2023_02_15_194140_create_kategorijas_table', 1),
(7, '2023_02_15_194210_create_proizvods_table', 1),
(8, '2023_02_15_194229_create_stavka_korpes_table', 1),
(9, '2023_02_15_194333_create_korpas_table', 1),
(10, '2023_02_15_195039_add_columns_user_table', 1);

-- --------------------------------------------------------

--
-- Table structure for table `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `personal_access_tokens`
--

INSERT INTO `personal_access_tokens` (`id`, `tokenable_type`, `tokenable_id`, `name`, `token`, `abilities`, `last_used_at`, `expires_at`, `created_at`, `updated_at`) VALUES
(1, 'App\\Models\\User', 12, 'auth_token', '1afb50bc2f62c70ccf5bc4a7d2bf41de81b00c3e6d8c25f30ea29b077f0fef32', '[\"*\"]', NULL, NULL, '2023-02-20 21:45:46', '2023-02-20 21:45:46'),
(2, 'App\\Models\\User', 12, 'bane@b.com_Token', 'e64223a5d373b3a593b3557e1d0811ee2eadb53f3fcbbb98e1e8ceb8dedb3b47', '[\"\"]', NULL, NULL, '2023-02-20 21:45:54', '2023-02-20 21:45:54'),
(3, 'App\\Models\\User', 1, 'admin@gmail.com_AdminToken', '9409ab5ffb28e25410345c2bbd38dcd25be1d97b70a2d7a21d75396cc326b079', '[\"server:admin\"]', NULL, NULL, '2023-02-20 22:44:42', '2023-02-20 22:44:42'),
(4, 'App\\Models\\User', 12, 'bane@b.com_Token', '73b5c3188e32e264a8826c07060dae9986919448f2a307b00f74c981794d81bb', '[\"\"]', NULL, NULL, '2023-02-20 23:25:08', '2023-02-20 23:25:08'),
(5, 'App\\Models\\User', 1, 'admin@gmail.com_AdminToken', '642a1a5760e4120e4cfb49364bfc2967737c69839da90ba1ea70d55a7aa96f4a', '[\"server:admin\"]', NULL, NULL, '2023-02-20 23:25:31', '2023-02-20 23:25:31'),
(6, 'App\\Models\\User', 12, 'bane@b.com_Token', '56a26ae6a753eb92b996bfa604d8ec98661d079e6fbd56020765eb857d8eec17', '[\"\"]', NULL, NULL, '2023-02-21 00:58:47', '2023-02-21 00:58:47'),
(7, 'App\\Models\\User', 1, 'admin@gmail.com_AdminToken', '1f251c0a11fb527fdeb11455d1781593f8a110c4be2aee47b166e3cf8ff2f2b5', '[\"server:admin\"]', NULL, NULL, '2023-02-21 00:58:56', '2023-02-21 00:58:56'),
(8, 'App\\Models\\User', 12, 'bane@b.com_Token', '1c218404c1938020ed9ea0c273b6499039b231fefd0cd2857e06a25c8b6f5e50', '[\"\"]', NULL, NULL, '2023-02-21 01:05:43', '2023-02-21 01:05:43'),
(9, 'App\\Models\\User', 12, 'bane@b.com_Token', '2b2199507d15be10a3972fb117edddb827873f006e8ff2e879c3a5af94df0655', '[\"\"]', NULL, NULL, '2023-02-21 09:09:22', '2023-02-21 09:09:22');

-- --------------------------------------------------------

--
-- Table structure for table `porukas`
--

CREATE TABLE `porukas` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `ime` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `poruka` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `porukas`
--

INSERT INTO `porukas` (`id`, `ime`, `email`, `poruka`, `created_at`, `updated_at`) VALUES
(1, 'Bane', 'bane@gmail.com', 'Koje je radno vreme prodavnice?', '2023-02-20 22:44:27', '2023-02-20 22:44:27');

-- --------------------------------------------------------

--
-- Table structure for table `proizvods`
--

CREATE TABLE `proizvods` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `image` varchar(255) NOT NULL,
  `naziv` varchar(255) NOT NULL,
  `proizvodjac` varchar(255) NOT NULL,
  `cena` double NOT NULL,
  `kolicina` int(11) NOT NULL DEFAULT 0,
  `kategorija` bigint(20) UNSIGNED NOT NULL,
  `zemlja_porekla` varchar(255) NOT NULL DEFAULT 'Srbija',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `proizvods`
--

INSERT INTO `proizvods` (`id`, `image`, `naziv`, `proizvodjac`, `cena`, `kolicina`, `kategorija`, `zemlja_porekla`, `created_at`, `updated_at`) VALUES
(2, 'https://www.sportvision.rs/files/thumbs/files/watermark/files/images/slike_proizvoda/media/DQ5/DQ5558-503/images/thumbs_w/thumbs_800/DQ5558-503_2_w_800_800px.jpg', 'Nike Get Fit', 'Nike', 6300, 0, 2, 'Srbija', '2023-02-20 21:40:40', '2023-02-21 01:04:15'),
(3, 'https://www.sportvision.rs/files/thumbs/files/watermark/files/images/slike_proizvoda/media/DH4/DH4073-010/images/thumbs_w/thumbs_800/DH4073-010_w_800_800px.jpg', 'Nike Sportswear Therma-FIT Windrunner', 'Nike', 16000, 0, 3, 'Srbija', '2023-02-20 21:40:40', '2023-02-20 21:40:40'),
(4, 'https://www.sportvision.rs/files/thumbs/files/watermark/files/images/slike_proizvoda/media/656/656927/images/thumbs_w/thumbs_800/656927_w_800_800px.jpg', 'adidas TANGO ROSARIO', 'adidas', 2700, 0, 4, 'Srbija', '2023-02-20 21:40:40', '2023-02-20 21:40:40'),
(5, 'https://www.sportvision.rs/files/thumbs/files/watermark/files/images/slike_proizvoda/media/NF0/NF0A7X2KJK31/images/thumbs_w/thumbs_800/NF0A7X2KJK31_w_800_800px.jpg', 'THE NORTH FACE COORDINATES', 'THE NORTH FACE', 4990, 0, 5, 'Srbija', '2023-02-20 21:40:40', '2023-02-20 21:40:40'),
(6, 'https://www.sportvision.rs/files/thumbs/files/watermark/files/images/slike_proizvoda/media/IC6/IC6755/images/thumbs_w/thumbs_800/IC6755_w_800_800px.jpg', 'adidas Basic 3-Stripes', 'adidas', 8000, 0, 6, 'Srbija', '2023-02-20 21:40:40', '2023-02-20 21:40:40'),
(7, 'https://www.sportvision.rs/files/thumbs/files/watermark/files/images/slike_proizvoda/media/369/369144-01/images/thumbs_w/thumbs_800/369144-01_w_800_800px.jpg', 'PUMA VIKKY STACKED', 'Puma', 8000, 0, 1, 'Srbija', '2023-02-20 21:40:40', '2023-02-20 21:40:40');

-- --------------------------------------------------------

--
-- Table structure for table `stavka_korpes`
--

CREATE TABLE `stavka_korpes` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `korpa_id` bigint(20) UNSIGNED NOT NULL,
  `proizvod_id` bigint(20) UNSIGNED NOT NULL,
  `kolicina` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `stavka_korpes`
--

INSERT INTO `stavka_korpes` (`id`, `korpa_id`, `proizvod_id`, `kolicina`, `created_at`, `updated_at`) VALUES
(1, 12, 4, 1, '2023-02-20 22:30:04', '2023-02-20 22:30:04'),
(2, 12, 5, 1, '2023-02-20 22:30:05', '2023-02-20 22:30:05');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `phone` varchar(255) NOT NULL DEFAULT '+38161 5424 9544',
  `birthdate` date NOT NULL DEFAULT '1987-04-06',
  `admin` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`, `phone`, `birthdate`, `admin`) VALUES
(1, 'Admin', 'admin@gmail.com', NULL, '$2y$10$5jnpvdp.GcOxMmOOUY4zzuJ8BpBWmVkNioYIIQxHhwQKBT0nGe6gu', NULL, '2023-02-20 21:40:40', '2023-02-20 21:40:40', '+38161 5424 9544', '1987-04-06', 1),
(2, 'William Haag', 'toy.margarett@example.org', '2023-02-20 21:40:40', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'LoQDx9o9sf', '2023-02-20 21:40:40', '2023-02-20 21:40:40', '+38161 5424 9544', '1987-04-06', 0),
(3, 'Izabella Hermann', 'laney94@example.org', '2023-02-20 21:40:40', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'S9gq2fGRJt', '2023-02-20 21:40:40', '2023-02-20 21:40:40', '+38161 5424 9544', '1987-04-06', 0),
(4, 'Trey Bergstrom', 'brody.davis@example.com', '2023-02-20 21:40:40', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'lHja68SAkA', '2023-02-20 21:40:40', '2023-02-20 21:40:40', '+38161 5424 9544', '1987-04-06', 0),
(5, 'Roman Dickens', 'vswaniawski@example.net', '2023-02-20 21:40:40', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'Ccgka3L5Oe', '2023-02-20 21:40:40', '2023-02-20 21:40:40', '+38161 5424 9544', '1987-04-06', 0),
(6, 'Mr. Reginald Jacobi I', 'lmarquardt@example.net', '2023-02-20 21:40:40', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'C8hQR3VYdI', '2023-02-20 21:40:40', '2023-02-20 21:40:40', '+38161 5424 9544', '1987-04-06', 0),
(7, 'Omari Casper', 'nikki98@example.org', '2023-02-20 21:40:40', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'wA8JzbO3vJ', '2023-02-20 21:40:40', '2023-02-20 21:40:40', '+38161 5424 9544', '1987-04-06', 0),
(8, 'Mr. Sim Hickle', 'kayla.will@example.org', '2023-02-20 21:40:40', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'ThAlH3kWpx', '2023-02-20 21:40:40', '2023-02-20 21:40:40', '+38161 5424 9544', '1987-04-06', 0),
(9, 'Leif Monahan', 'haylie84@example.org', '2023-02-20 21:40:40', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'YhVTMxj60I', '2023-02-20 21:40:40', '2023-02-20 21:40:40', '+38161 5424 9544', '1987-04-06', 0),
(10, 'Burley Grady', 'jebert@example.net', '2023-02-20 21:40:40', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'j8fVbhyWPH', '2023-02-20 21:40:40', '2023-02-20 21:40:40', '+38161 5424 9544', '1987-04-06', 0),
(11, 'Jacky Schuster', 'abner.hagenes@example.com', '2023-02-20 21:40:40', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'hJ5NyHBxtt', '2023-02-20 21:40:40', '2023-02-20 21:40:40', '+38161 5424 9544', '1987-04-06', 0),
(12, 'bane', 'bane@b.com', NULL, '$2y$10$LD2X7dMqHJ02sreRGUZAzOxLxKrkeM9pGIhWJQFiHI3Zs4NBaGkl2', NULL, '2023-02-20 21:45:46', '2023-02-20 21:45:46', '+38161 5424 9544', '1987-04-06', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `kategorijas`
--
ALTER TABLE `kategorijas`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `korpas`
--
ALTER TABLE `korpas`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `porukas`
--
ALTER TABLE `porukas`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `proizvods`
--
ALTER TABLE `proizvods`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `stavka_korpes`
--
ALTER TABLE `stavka_korpes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `kategorijas`
--
ALTER TABLE `kategorijas`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `korpas`
--
ALTER TABLE `korpas`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `porukas`
--
ALTER TABLE `porukas`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `proizvods`
--
ALTER TABLE `proizvods`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `stavka_korpes`
--
ALTER TABLE `stavka_korpes`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
