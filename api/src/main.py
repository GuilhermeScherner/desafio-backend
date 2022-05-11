import uvicorn
from fastapi import APIRouter, FastAPI
from starlette.middleware.cors import CORSMiddleware

from src.api.routers import include_routers

app = FastAPI(title="mooney")


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

api_router = APIRouter()
include_routers(api_router)
app.include_router(api_router)




if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
