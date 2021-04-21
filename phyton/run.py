# # - variables
# a = 5
# c = True
# b = 4.45
# d = "hello"
# a = 7
# print(type(a))
# print(a)
# print(type(b))
# print(type(c))
# print(type(d))

# #- data-types
# mylist = [1, 2, "3"]
# mylist[1] = "new"
# mydict = {
#     "ad": "sehla",
#     "soyad": "Maharramova"
# }
# myTuple = (1, 4, "hello")
# # - myTuple[2] = "hi"  islemeyecek tuple ile deyismek olmur
# x = range(6)


# print((mylist))
# print(mydict)
# print(myTuple)
# print(x)

# # condition

# if 5 > 4:
#     print("true")
#     if True:
#         print("second true")
# else:
#     print("false")

# #- function


# def Foo(a, b):
#     print(a)


# Foo(4, 3)


# def Foo(*nums):
#     for num in nums:
#         print(num)


# Foo(1, 2, 3, 4, 5, 6, 7)
# sum = 0
# for i in range(2):
#     sum += i
# print(sum)


#- tapsiriq
#- 1

# for i in range(1, 101):
#     if i % 2 != 0:
#         print(i)
# # # -2
# sum = 0
# for i in range(1, 101):
#     if i % 2 != 0:
#         sum += i
# print(sum)

# # -3

# x = "javascript ne vaxtdan proqramlasdirma dili olub?"
# x_replace = x.replace(" ", "")
# x_replace2 = x_replace.replace("?", "")
# print(x_replace2)
# letterCount = len(x_replace2)
# print(letterCount)


# # # - 4
# y = "javascript ne vaxtdan proqramlasdirma dili olub?"
# y_split = y.split(" ")
# wordCount = len(y_split)
# print(wordCount)
thislist = ["apple", "banana", "cherry", "peaar", "watermelon"]
if "appleq" in thislist:
    print("yes")
else:
    print("no")
thislist[1] = 'melon'
thislist[1:3] = ["1", "2", "3"]
thislist[1:3] = "fruit"
thislist.insert(0, "insert ")
thislist.append("append")
tropical = ["mango", "pineapple", "papaya"]
thislist.extend(tropical)
thislist.remove("apple")
thislist.pop(0)
del thislist[6]
# del thislist
# thislist.clear()
for x in range(len(thislist)):
    print(thislist[x])
# print(thislist)
# Append method sona elave edir
numbers = ["1", "2", "3", "4", "5"]
numbers.append("6")
