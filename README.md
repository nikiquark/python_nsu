## Database configuration (postgres)
```
CREATE DATABASE python_nsu;
CREATE USER python_nsu WITH PASSWORD 'password';
ALTER ROLE python_nsu SET client_encoding TO 'utf8';
ALTER ROLE python_nsu SET default_transaction_isolation TO 'read committed';
ALTER ROLE python_nsu SET timezone TO 'UTC';
GRANT ALL PRIVILEGES ON DATABASE python_nsu TO python_nsu;
```
## .env 

```
DB_USER = 'user'
DB_PASSWORD = 'password'
DB_NAME = 'name'
```


