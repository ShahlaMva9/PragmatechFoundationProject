# #  tapsiriq
# #  1

# for i in range(1, 101):
#     if i % 2 != 0:
#         print(i)
# #  2
# sum = 0
# for i in range(1, 101):
#     if i % 2 != 0:
#         sum += i
# print(sum)

# # 3

# x = "javascript ne vaxtdan proqramlasdirma dili olub?"
# x_replace = x.replace(" ", "")
# x_replace2 = x_replace.replace("?", "")
# print(x_replace2)
# letterCount = len(x_replace2)
# print(letterCount)


# #  4
# y = "javascript ne vaxtdan proqramlasdirma dili olub?"
# y_split = y.split(" ")
# wordCount = len(y_split)
# print(wordCount)

# #  5
# surname = "Maharramova"
# surnameReverse = ""

# for i in reversed(surname):
#     surnameReverse = i
#     print(surnameReverse)


# # 6
# saitler = ["a", "i", "o", "e", "u", ]
# total = 0
# for y in "Javascript,Phyton":
#     for x in saitler:
#         if y == x:

#             total += len(y)
# print(total)

# # 7 Pythonda “List” metodlarını araşdırın və istədiyiniz hər hansı 5 metodun nə işə yaradığını nümunə ilə göstərin


# # Insert yazdigimiz indexe elave edir
# numbers.insert(0, "0")


# # pop yazgimiz indeksi silir index bildimesek axirdan silir
# numbers.pop()
# print(numbers)

# # clear list icersini silir
# letter = ["a", "b", "c"]
# letter.clear()
# print(letter)

# # del azigimiz indekxi silir listin ozunde ile bilerik
# random = ["121", "jkj", "g"]
# del random[0]
# print(random)

# # remove list icersinden silir
# thislist = ["apple", "banana", "cherry", "peaar", "watermelon"]
# thislist.remove("apple")

#  append void functiondir bir deyer alir return type noneType dir hecne qaytarmir

# 8 Pythonda “Dictionary” metodlarını araşdırın və istədiyiniz hər hansı 5 metodun nə işə yaradığını nümunə ilə göstərin
# thisdict = {
#     "brand": "Ford",
#     "model": "Mustang",
#     "year": 1964,
#     "colors": ["red", "white"]
# }

# x = thisdict["colors"]
# # get secdiyimiz xusisi deyeri geri donruru
# y = thisdict.get("model")
# # keys key leri qaylari
# keys = thisdict.keys()
# # values deyerleri geri qaytrarir
# values = thisdict.values()
# # items dict icersinde olan key vevalue list forasinda geri qaytaror
# items = thisdict.items()
# # update orjina dict icersindeki melumati deyise bilir
# thisdict.update({"model": "Ferrari"})
# print(thisdict)

# # 9
# list1 = [50, 35, "70"]
# total = 0
# for i in range(len(list1)):
#     total += int(list1[i])
# print(total)


# list2 = [7, 9, "7", "8", ]

# sum = 0
# for i in range(len(list2)):
#     if type(list2[i]) == int:
#         sum += int(list2[i])

#     else:
#         print("Problem var")
# print(sum)
#  10

# import random
# colours = ['Red', 'Blue', 'Green', 'White', 'Black']
# print(random.choice(colours))


# # 11

# say = input("Emeliyyat sayini daxil edin")
# sayInt = int(say)

# _list = []
# for i in range(sayInt):
#     operation = input("Emaliyyati daxil edin")
#     operation = operation.split()
#     print(operation)
#     _list += operation
#     if operation[0] == "sort":
#         _list.sort()
#     elif operation[0] == "append":
#         _list.append(int(operation[1]))
#     elif operation[0] == "print":
#         print(_list)
#     elif operation[0] == "pop":
#         _list.pop()
#     elif operation[0] == "reverse":
#         _list.reverse()
#     if operation[0] == 'remove':
#         if _list:
#             _list.remove(int(operation[1]))
# 12


def split_and_join():
    a = "this is a string"
    a = a.split(" ")
    print("string", a)
    a = "-".join(a)
    print("join", a)


split_and_join()
