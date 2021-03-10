# **_Translyator və assembler nədir?_**

- Translyator.Proqramçının yazdığı proqramı maşın başa düşə bilmir.Buna görədə proqram maşının başa düşə biləcəyi dilə çevrilməlidir. Bunun üçün translyatorlardan(tərcüməçidən) istifadə olunur.
- Assembler translyatorun bir növüdür.Proqram dilini maşın dilinə çevirir.Assemblerdə maşın dilinə çevrilən proqram 0 və 1-lərdən ibarət olur.Bu aşağı səviyyəli dildir.İnsan dilinə oxşarlıı azdır vı çətin dil hesab olunur.

# **_Reqem ve ededlerin 2 li say sistemine tercume olunmasi bilirik.Bes hərflər ve simvollar binary code-a nece tercume olunur?_**

- Bildiyimiz kimi maşın bizim istediyimiz emaliyyatları **0(elektirik keçmir) və 1(elektrik keçir** şəklində başa düşür.Ona görə də biz hər hansı bir sözü vəya simvolu yazdıqda maşın onu hərf və ya simvol olaraq yox **0 və 1** olaraq başa düşür.Hərfi çevirmək üçün ASCII standartlarından istifadə olunur.Hər hərf ASCII rəqəminə uyğun gəlir
  _Məsələn_ Bəzi latın harflərinin ikili sistemdəki qarşılıqları belədir;
- a- 01100001
- A-01000001
- b-01100010
- B-01000010 və s.

# **_butun proqramlasdirma dillerinde ortaq istifade olunan data tipleri hansilardir ve qisaca izahatini yazin_**

Hər proqramlaşdırma dilində fərqli data tiplərindən istifadə olunur.Bu data tiplərini ümümi olaraq aşaıdakı qruplara ayırmaq olar

- Rəqəm
- String
- boolen (true,false)
  Bu data tiplərinin çoxlu alt qrupları var.Bu alt qruplar isə hər proqramlaşdırma dilinə görə dəyişir

#   **_Type Conversion ya da Type Casting nədir? Hansı hallarda ehtiyac duyulur?_**
Bildiyimiz kimi javascriptdə müxtəlif data type var.
- string
- number
- boolean
- null
-  undefined
**Type Conversion** və ya **Type Casting** Javascript dəyişənlərini bir data type-dan başkasına çevirir
Məsələn
* number string-ə çevirək
String(123)
(123).toString()
* Boolean string-ə çevirək
String(false) 
String(true) 
* string number-a çevirək
Number("3.14")
* boolean number-a çevirək
Number(false)     //  0 qaytaracaq
Number(true)      // 1  qaytaracaq

# **_Operator precedence nədir və əhəmiyyətini izah edin_**
Operator precedence - operatorun üstünlüyünü ifadə edir.Əvvəlcə daha yüksək üstünlüyə malik olan operator üzərində əmaliyyat aparılır.
2 + 3 * 5 // 17 qaytarır.Çünki vurma operatoru ("*"), əlavə operatorundan ("+") daha yüksək üstünlükə malikdir buna görədə birinci vurma əməliyyatı aparılır
 