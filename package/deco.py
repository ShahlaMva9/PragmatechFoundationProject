


def turnToUppercase(func):
    def wrapper():
        result = func()
        newresult = result.upper()
        return newresult
    return wrapper


@turnToUppercase
def getName():
    return "somtehin"


# @turnToUppercase
# def getName():
#     return "This is my name"



