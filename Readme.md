# Main git command

- git init
- git add .
- git commit -m ""
- git push
- git pull

# Frontend and Backend technology

## Frontend part - UI(User-Interface),Presentation Layer,Client Side

- HTML (Hypertext Markup Language)
- CSS(Cascading Style Sheet.)
- JS(JavaScript)

## Backend part

- Business Layer
- Persistance Layer
- Data Layer

# Tags used to divide html into parts

- section-tag defines a section in a document.Usually We name section with ID.The section tag is used to separate large part
- div - tag defines a division or a section in an HTML document.

# Basic Css tags

1. /_ Comment _/
2. color
3. background

- background-color
- background-img

4. border
   - border width
   - border color
   - border slides
5. margin
6. padding
7. height
8. width
9. text-align (left,center,right)
10. text-decoration
11. text transformation
12. font-family
13. font-style

- normal
- italic
- bold

14. font-size (px,em,rem,%)

# Css selectors

- .class
- #id
- element p
- element.class p.text
- element, element div , p (Selects all div elements and all p elements)
- element>element div > p Selects all p elements where the parent is a div element
- element+element div + p Selects the first p element that are placed immediately after div elements

# Week 02 - hesabat

- [x] Layihəmdə 3 section tamamlandı
- [x] Müəllimin Layihəsi qısa yolla yazıldı
- [x] Videolar analiz edildi

# Border-radius

The border-radius property defines the radius of the element's corners.
This property allows you to add rounded corners to elements!
[Example](https://codepen.io/ShahlaMammadova/pen/vYydXLV)

# Medium.com I məqaləm

[Proqramlaşdırma dillərinin inkişaf tarixi və inkişafa təsir edən amillər](https://sehlameherremova888.medium.com/proqramla%C5%9Fd%C4%B1rma-dill%C9%99rinin-inki%C5%9Faf-tarixi-v%C9%99-inki%C5%9Fafa-t%C9%99sir-ed%C9%99n-amill%C9%99r-423cc3fd9682)

# Javascriptə giriş

## data type

- string (hərfilər)-yazmaq üçün "" və ya '' istifadə olunur
- number (rəqəmlər tam,mənfi,kəsr ədədlər)
- boolean -2 dəyəri var true(1)və false(0)
- null- variables içərisi boşdur
- undefined - variables içərisində nəsə dəyər var amma bilinmir nədir

## variables

- let
- const -sabit dəyər vermək üçün istifadə olunur .

# Js operators

- Toplama(+)- bu operatorun 2 funksiyası var.Birinci toplama əməliyyaını yerinə yetirir.İkinci isə əgər tərəflərdən biri number deyiləs o halda yan yana gətirmə funksiysını yerinə yetirir.Bundan əlvə + operatoru vasitəsilə stringi numbera çevirmək olur
- Çıxma(-)
- Vurma(\*)
- Bölmə (/)
- \*\* üstə yüksətlmə
- ++ 1 vahid artırır
- -- 1 vahod azaldır

# Declaration ve assigment function

Local skopda 2cur yaza

# array

Array eyni tipde olan degiskenleri bir yere yigmaq ucun istifade olunur
let numbers=[1,2,3] formasinda yazilir

- array.push(4) - array sonuna yeni elemt elave edir
- array.unshift(5)- array evveline yeni elemt elave edir
- array.pop()-sonuncu elemeti silir
- array.shift()-ilk elemeti silir
- array.indexof()- secdiyimiz elementin sirasini gosterir
- array.lentgh()- arrayin uzunluğun gosterir

# js Math

- Math.max()
- Math.min()
- MAth.PI pi sayisi
- Math.pow(4,3) menasi 4 usdu 3 cavab 64
- Math.random()
- Math.round(2.5) 3 e yuvarlaqsak
- Math.sign() musbet menfi oldugun bildirir
- Math.sqrt() kok alir
- Math.abs() modul alir
- Math.floor(1.6) asagi yvarlaqsdiri

# js practice

(Sağa və sola hərəkət edən qutu)[https://codepen.io/ShahlaMammadova/pen/BapzeZb]
(Sağa və sola hərəkət edən qutu container icersinde qalir)[https://codepen.io/ShahlaMammadova/pen/BapzeZb]

# SQl

Main commands

- create table User ();
- insert into User();
- delete from User where ;
- select\*from User;
- uptade User set;

# js practice

- (background deyismek)[https://codepen.io/ShahlaMammadova/pen/oNBMxeK]
- (counter)[https://codepen.io/ShahlaMammadova/pen/zYNLqmb]
- (slider)[https://codepen.io/ShahlaMammadova/pen/XWpORxj]

# Phyton data types

Icerisinde bir data saxlayanlar:Primitive data type

- str(metin)
  Reqem
- int (tam ededler)
- float (kesr edeler )
- complex(5k)
- boolean (true ,false)
  Referance Data Type
- list []- array oxsuyur icersiinde deyisiklik ede bilirik
- tuple() array oxsuuyur icersinde deyisiklik etmek olmur
- range(100)
- dict obyekte bezniyir

# Phyton list method

- append void functiondir ,hecne qaytarmir , 1 deyer alir requiredir bu deyer ,return type NOneType-dir.Liste element elave edir
  x = [1, 2]
  x.append(3)
  print(x)
- insert void-dir,2 deyer alir- ikiside required-dir,Return type Nonetype.Liste element elave edir
  x.insert(index,elem)
- extend void,return type nonetype,1 deyer alir required-dir. 2 list, set, tuple ni birlesdiri
- remove void ,return type nonetype ,1 deyer alir required ,string, number, list etc elementleri sile bilirik
- pop return-dir sildiyi elementi donderir ,return type siliyi elementin type olur ,1 deyer alir optinaldir deyer yamasaq sonuncu elementi silir
- clear void,return type none type ,deyer almir listin icerisini silir
- del voiddir ,
- sort() voididr , return type Nonetype, 2 deyer alir optinaldir reverse=true tersine cevirir
- reverse voiddir , return type None type ,deyer almir -listin tersine cevirir
