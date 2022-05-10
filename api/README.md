# {{cookiecutter.title}}



### Execution

- After clone the project install dependencies with poetry

```sh
poetry install
```

- Start the API

```sh
poetry run uvicorn src.main:app --reload --port 8000
```

- Access swagger
```sh
http://localhost:8000/docs
```
