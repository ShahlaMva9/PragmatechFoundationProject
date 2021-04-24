

from run import Book, Books


def getDataFromUser():
    bookName = input('Book Name :')
    bookPrice = int(input('Book Price :'))
    bookAuthor = input('Book Author :')
    bookPage = int(input('Book Page :'))
    book = Book(bookName, bookPrice, bookAuthor, bookPage)


def appMenu():
    menu = """
 -Welcome to Book App
 --Menu
 1.Add New Book
 2.show All Books
 3.Return to main Menu
 4. Total Book Pages
5. Total Books Price
 6.Exit
"""
    print(menu)
    order = input("Type your order  :")
    if order == '1':
        addNewBook()

    elif order == "2":
        showAllBooks()
    elif order == '3':
        returnToMain()
    elif order == '6':
        pass
    else:
        print("Unknow order.TYpe 3 to return main menu")


def addNewBook():
    print("add book Gunc")
    getDataFromUser()
    appMenu()


def showAllBooks():
    for book in Books:
        print(book.ShowBook())
    appMenu()


def returnToMain():
    print("return to main menu")
    appMenu()


appMenu()
