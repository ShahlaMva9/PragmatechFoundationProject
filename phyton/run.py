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

for i in range(1, 101):
    if i % 2 != 0:
        print(i)
# -2
sum = 0
for i in range(1, 101):
    if i % 2 != 0:
        sum += i
print(sum)

# -3
total = 0
x = "javascript ne vaxtdan proqramlasdirma dili olub?"
for i in x:
    total += 1
print(total)
print(x)

# - 4
y = "javascript ne vaxtdan proqramlasdirma dili olub?"
y_split = x.split()
print(y_split)
wordCount = len(test_string.split())
