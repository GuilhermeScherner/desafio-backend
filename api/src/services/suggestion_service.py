import math

import pandas as pd

from src.services.base import BaseService
import src.services.models.suggestions_models as suggestions_models
from src.data.repositories.suggestion_repository import SuggestionRepository
from src.services.score_service import ScoreService


class SuggestionService(BaseService):
    def __init__(self, suggestion_repository: SuggestionRepository):
        super().__init__(suggestion_repository)

    @staticmethod
    def return_cod_uf(cod: str, states: pd.DataFrame) -> str:
        uf_filtered = states[states["codigo_uf"].isin([cod])]
        return uf_filtered["uf"].values[0]

    async def suggestion_cities(
        self, suggestion_request: suggestions_models.SuggestionsRequest
    ) -> suggestions_models.SuggestionsResponse:
        cities_filtered = self.suggestion_repository.get_cities_by_name(suggestion_request.q)

        if len(cities_filtered) == 0:
            return suggestions_models.SuggestionsResponse(suggestions=[])

        states = self.suggestion_repository.get_states_by_id(cities_filtered["codigo_uf"])
        suggestions = [
            suggestions_models.Suggestion(
                name=suggestion[1]["nome"] + " - " + SuggestionService.return_cod_uf(suggestion[1]["codigo_uf"], states),
                latitude=suggestion[1]["latitude"],
                longitude=suggestion[1]["longitude"],
                score=ScoreService.score_calculate_normalized(
                    suggestion_request, suggestion[1]["nome"], suggestion[1]["latitude"], suggestion[1]["longitude"]
                ),
            )
            for suggestion in cities_filtered.iterrows()
        ]

        suggestions_sorted = sorted(suggestions, key=lambda x: x.score, reverse=True)[:30]

        return suggestions_models.SuggestionsResponse(suggestions=suggestions_sorted)
