from fastapi import APIRouter, Depends
import src.services.models.suggestions_models as suggestions_models
from src.services.suggestion_service import SuggestionService
from src.api.dependencies.services import suggestion_service_depends

router = APIRouter()


@router.get("", response_model=suggestions_models.SuggestionsResponse, name="Suggestion: suggestion of cities")
async def suggestions(
    suggestion_request: suggestions_models.SuggestionsRequest = Depends(),
    suggestion_service: SuggestionService = Depends(suggestion_service_depends),
) -> suggestions_models.SuggestionsResponse:
    result = await suggestion_service.suggestion_cities(suggestion_request)
    return result
