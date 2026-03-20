-- Database Schema for cf-server
CREATE DATABASE IF NOT EXISTS cf_db;
USE cf_db;

-- Users Table
CREATE TABLE IF NOT EXISTS users (
    id CHAR(36) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    pass VARCHAR(255) NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- News Table
CREATE TABLE IF NOT EXISTS news (
    id CHAR(36) PRIMARY KEY,
    src VARCHAR(255) NOT NULL,
    date VARCHAR(255) NOT NULL,
    title VARCHAR(255) NOT NULL
);

-- Feedback Table
CREATE TABLE IF NOT EXISTS feedback (
    id CHAR(36) PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    message TEXT NOT NULL
);

-- Portfolio Items Table
CREATE TABLE IF NOT EXISTS portfolio_items (
    id CHAR(36) PRIMARY KEY,
    src VARCHAR(255) NOT NULL,
    title VARCHAR(255) NOT NULL,
    category VARCHAR(255) NOT NULL
);

-- Service Items Table
CREATE TABLE IF NOT EXISTS service_items (
    id CHAR(36) PRIMARY KEY,
    img VARCHAR(255) NOT NULL,
    title VARCHAR(255) NOT NULL,
    text TEXT NOT NULL
);

-- Slider Items Table
CREATE TABLE IF NOT EXISTS slider_items (
    id CHAR(36) PRIMARY KEY,
    img VARCHAR(255) NOT NULL,
    title1 VARCHAR(255) NOT NULL,
    title2 VARCHAR(255) NOT NULL,
    subTitle VARCHAR(255) NOT NULL,
    text TEXT NOT NULL
);

-- Team Facts Table
CREATE TABLE IF NOT EXISTS team_facts (
    id CHAR(36) PRIMARY KEY,
    favicon VARCHAR(255) NOT NULL,
    number INT NOT NULL,
    title VARCHAR(255) NOT NULL
);

-- Teammates Table
CREATE TABLE IF NOT EXISTS teammates (
    id CHAR(36) PRIMARY KEY,
    src VARCHAR(255) NOT NULL,
    name VARCHAR(255) NOT NULL,
    position VARCHAR(255) NOT NULL,
    social JSON -- To store social links as a JSON object
);

-- About Content Table
CREATE TABLE IF NOT EXISTS about_content (
    id CHAR(36) PRIMARY KEY,
    biography TEXT NOT NULL,
    historyHtml TEXT NOT NULL
);

-- Skills Table (related to About Content)
CREATE TABLE IF NOT EXISTS skills (
    id CHAR(36) PRIMARY KEY,
    about_id CHAR(36) NOT NULL,
    text VARCHAR(255) NOT NULL,
    width VARCHAR(50) NOT NULL,
    backgroundColor VARCHAR(50) NOT NULL,
    FOREIGN KEY (about_id) REFERENCES about_content(id) ON DELETE CASCADE
);
