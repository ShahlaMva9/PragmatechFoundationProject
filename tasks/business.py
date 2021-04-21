from run import ad, soyad
from data import users


def saveData(name, surname):
    user = {
        "ad": name,
        "soyad": surname
    }


users.append(user)
