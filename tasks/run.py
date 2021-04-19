#  tapsiriq
#  1

for i in range(1, 101):
    if i % 2 != 0:
        print(i)
#  2
sum = 0
for i in range(1, 101):
    if i % 2 != 0:
        sum += i
print(sum)

# 3

x = "javascript ne vaxtdan proqramlasdirma dili olub?"
x_replace = x.replace(" ", "")
x_replace2 = x_replace.replace("?", "")
print(x_replace2)
letterCount = len(x_replace2)
print(letterCount)


#  4
y = "javascript ne vaxtdan proqramlasdirma dili olub?"
y_split = y.split(" ")
wordCount = len(y_split)
print(wordCount)

#  5
surname = "Maharramova"
surnameReverse = ""

for i in reversed(surname):
    surnameReverse = i
    print(surnameReverse)


# 6
saitler = ["a", "i", "o", "e", "u", ]
total = 0
for y in "Javascript,Phyton":
    for x in saitler:
        if y == x:

            total += len(y)
print(total)
