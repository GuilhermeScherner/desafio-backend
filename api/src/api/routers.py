from fastapi import APIRouter
import src.api.controllers.suggestion_controller as suggestion_controller


def include_routers(api: APIRouter) -> None:
    api.include_router(suggestion_controller.router, prefix="/suggestions", tags=["suggestions"])
