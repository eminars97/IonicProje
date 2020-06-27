CREATE TABLE IF NOT EXISTS portal (id INTEGER PRIMARY KEY AUTOINCREMENT,name TEXT,url TEXT,status INTEGER);
INSERT INTO portal (name, url, status) VALUES ('Kocaeli Üniversitesi', 'portal.kocaeli.edu.tr', '1');
INSERT INTO portal (name, url, status) VALUES ('Enformatik Bölümü', 'enformatik.kocaeli.edu.tr', '1');
INSERT INTO portal (name, url, status) VALUES ('Bilgisayar Mühendisliği', 'bilgisayar.kocaeli.edu.tr', '0');
INSERT INTO portal (name, url, status) VALUES ('Bilgisayar deneme', 'bilgisayar.kocaeli.edu.tr', '0');

CREATE TABLE IF NOT EXISTS dersler (id INTEGER PRIMARY KEY AUTOINCREMENT,dersadi TEXT,vizenotu INTEGER,finalnotu INTEGER,kredi INTEGER);
INSERT INTO note (dersadi, vizenotu, finalnotu,kredi) VALUES ('mobilprogramlama', '55', '55','3');
