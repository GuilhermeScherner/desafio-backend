from fastapi import Depends

from src.data.repositories.suggestion_repository import SuggestionRepository
from src.services.suggestion_service import SuggestionService


def suggestion_service_depends(suggestion_repository=Depends(SuggestionRepository)) -> SuggestionService:
    return SuggestionService(suggestion_repository)
