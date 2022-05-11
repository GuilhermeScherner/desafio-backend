import pytest
from pytest_mock import MockerFixture
from httpx import AsyncClient
from starlette import status

from src.services.models.suggestions_models import SuggestionsResponse

suggestions_response = SuggestionsResponse(suggestions=[
        {"name": "Ijuí - RS", "latitude": -28.388, "longitude": -53.92, "score": 0.75},
        {"name": "Ipuiúna - MG", "latitude": -22.1013, "longitude": -46.1915, "score": 0.75},
        {"name": "Ituiutaba - MG", "latitude": -18.9772, "longitude": -49.4639, "score": 0.75},
        {"name": "Ijaci - MG", "latitude": -21.1738, "longitude": -44.9233, "score": 0.5},
        {"name": "Águia Branca - ES", "latitude": -18.9846, "longitude": -40.7437, "score": 0.5},
        {"name": "Aguiar - PB", "latitude": -7.0918, "longitude": -38.1681, "score": 0.5},
        {"name": "Aguiarnópolis - TO", "latitude": -6.55409, "longitude": -47.4702, "score": 0.5},
        {"name": "Apuiarés - CE", "latitude": -3.94506, "longitude": -39.4359, "score": 0.5},
        {"name": "Aquidabã - SE", "latitude": -10.278, "longitude": -37.0148, "score": 0.5},
        {"name": "Aquidauana - MS", "latitude": -20.4666, "longitude": -55.7868, "score": 0.5},
        {"name": "Aquiraz - CE", "latitude": -3.89929, "longitude": -38.3896, "score": 0.5},
        {"name": "Pauini - AM", "latitude": -7.71311, "longitude": -66.992, "score": 0.5},
        {"name": "Birigui - SP", "latitude": -21.291, "longitude": -50.3432, "score": 0.25},
        {"name": "Ibicuitinga - CE", "latitude": -4.96999, "longitude": -38.6362, "score": 0.25},
        {"name": "Ibirapuitã - RS", "latitude": -28.6247, "longitude": -52.5158, "score": 0.25},
        {"name": "Imbuia - SC", "latitude": -27.4908, "longitude": -49.4218, "score": 0.25},
        {"name": "Irituia - PA", "latitude": -1.76984, "longitude": -47.446, "score": 0.25},
        {"name": "Itaqui - RS", "latitude": -29.1311, "longitude": -56.5515, "score": 0.25},
        {"name": "Itaquiraí - MS", "latitude": -23.4779, "longitude": -54.187, "score": 0.25},
        {"name": "Itaquitinga - PE", "latitude": -7.66373, "longitude": -35.1002, "score": 0.25},
        {"name": "Itiquira - MT", "latitude": -17.2147, "longitude": -54.1422, "score": 0.25},
        {"name": "Iuiú - BA", "latitude": -14.4054, "longitude": -43.5595, "score": 0.25},
        {"name": "Júlio Mesquita - SP", "latitude": -22.0112, "longitude": -49.7873, "score": 0.25},
        {"name": "Periquito - MG", "latitude": -19.1573, "longitude": -42.2333, "score": 0.25},
        {"name": "Sítio do Quinto - BA", "latitude": -10.3545, "longitude": -38.2213, "score": 0.25},
        {"name": "Urucuia - MG", "latitude": -16.1244, "longitude": -45.7352, "score": 0.25},
    ])


@pytest.mark.asyncio
async def test_get_suggestions_without_params(client: AsyncClient, mocker: MockerFixture):
    mocker.patch(
        "src.services.suggestion_service.SuggestionService.suggestion_cities",
        return_value={
            "suggestions": [],
        },
    )
    response = await client.get("/suggestions")
    assert response.status_code == status.HTTP_200_OK
    data = response.json()

    assert data.get("suggestions") == []
