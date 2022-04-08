def ed(func):
    def inner(*args,**kwargs):
        returned_value = func(*args,**kwargs)
        return  returned_value
    return inner