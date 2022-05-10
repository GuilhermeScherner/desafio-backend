from src.data.repositories.suggestion_repository import SuggestionRepository


class BaseService:
    def __init__(self, suggestion_repository: SuggestionRepository):
        self.suggestion_repository = suggestion_repository
