from typing import Optional, List
import pandas as pd
import math
from src.data.repositories.base import BaseRepository


class SuggestionRepository(BaseRepository):
    def __init__(self):
        super().__init__()

    def get_cities_by_name(self, contains: Optional[str]) -> pd.DataFrame:
        if not contains:
            column_names = self.cities_file.columns
            return pd.DataFrame(columns=column_names)
        df = self.cities_file.copy()

        split_strings = []
        length_char = round(math.sqrt(len(contains)))
        for index in range(0, len(contains), length_char):
            split_strings.append(contains[index: index + length_char])
        list_dataframes = []

        for letter in split_strings:
            list_dataframes.append(df[df['nome'].str.contains(letter, na=False, case=False)])
        result = pd.concat(list_dataframes).drop_duplicates().reset_index(drop=True)
        return result

    def get_states_by_id(self, cods_uf: List[str]):
        df = self.states_file.copy()
        result = df[df['codigo_uf'].isin(cods_uf)]
        return result
