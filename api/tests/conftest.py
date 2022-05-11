import pytest
from httpx import AsyncClient
from fastapi import FastAPI

@pytest.fixture
def app() -> FastAPI:
    from src.main import app

    return app

@pytest.fixture
async def client(app: FastAPI) -> AsyncClient:
    async with AsyncClient(
        app=app,
        base_url="http://localhost:8000/",
        headers={"Content-Type": "application/json"},
    ) as client:
        yield client

