# from pytest_mock import MockerFixture
# from httpx import AsyncClient
# from starlette import status
#
# async def test_get_suggestions_without_params(client: AsyncClient, mocker: MockerFixture):
#     response = await client.get("/suggestions")
#     assert response.status_code == status.HTTP_200_OK
#     data = response.json()
#
#     assert data.get("suggestions") == []
#
#
# async def test_get_suggestions_with_q_param(client: AsyncClient, mocker: MockerFixture):
#     ...
#
# async def test_get_suggestions_with_all_params(client: AsyncClient, mocker: MockerFixture):
#     ...
#
# async def test_get_suggestions_with_q_param_stranger():
#     ...
