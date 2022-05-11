import asyncio
from typing import List, Optional
import uvicorn
from fastapi import FastAPI


class UvicornTestServer(uvicorn.Server):
    def __init__(self, app: FastAPI, host: str = "127.0.0.1", port: int = 8000):
        self._started = asyncio.Event()
        super().__init__(config=uvicorn.Config(app, host=host, port=port))

    async def startup(self, sockets: Optional[List] = None) -> None:
        await super().startup(sockets)
        self.config.setup_event_loop()
        self._started.set()

    async def up(self) -> None:
        self._serve_task = asyncio.create_task(self.serve())
        await self._started.wait()

    async def down(self) -> None:
        self.should_exit = True
        await self._serve_task
