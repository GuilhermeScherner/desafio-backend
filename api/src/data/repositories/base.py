import pandas as pd
import os


class BaseRepository:
    def __init__(self):
        self.cities_file = pd.read_csv(os.path.join(os.getcwd(), "src", "data", "file_csv", "cities.csv"))
        self.states_file = pd.read_csv(os.path.join(os.getcwd(), "src", "data", "file_csv", "states.csv"))
