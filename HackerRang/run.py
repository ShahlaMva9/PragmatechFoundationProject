n = "0,5,5,2,1"
nSplit = n.split(",")


nSplit.sort(reverse=True)
print(nSplit)
if nSplit[0] == nSplit[1]:
    print(nSplit[2])
else:
    print(nSplit[0])
