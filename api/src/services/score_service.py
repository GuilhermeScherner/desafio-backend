from src.services.models.suggestions_models import SuggestionsRequest


class ScoreService:
    @staticmethod
    def score_calculate(suggestion: SuggestionsRequest, name: str, lat: str, lon: str) -> float:
        count_letter = 0.0
        for i in range(len(suggestion.q)):
            if len(name) > i and suggestion.q[i].lower() == name[i].lower():
                if suggestion.lat:
                    lat_diff = abs(suggestion.lat) - abs(float(lat))
                    count_letter += 1.0 - abs(lat_diff)/100
                    continue
                if suggestion.lon:
                    lon_diff = abs(suggestion.lon) - abs(float(lon))
                    count_letter += 1.0 - abs(lon_diff)/100
                    continue
                count_letter += 1.0
        return count_letter

    @staticmethod
    def score_calculate_normalized(suggestion: SuggestionsRequest, name: str, lat: str, lon: str) -> float:
        count = ScoreService.score_calculate(suggestion, name, lat, lon)
        result = count / len(suggestion.q)

        return float("{:.3f}".format(result))
