from typing import List, Optional

from src.services.models.base import Base


class SuggestionsRequest(Base):
    q: Optional[str]
    lat: Optional[float]
    lon: Optional[float]


class Suggestion(Base):
    name: str
    latitude: float
    longitude: float
    score: float


class SuggestionsResponse(Base):
    suggestions: List[Optional[Suggestion]]
