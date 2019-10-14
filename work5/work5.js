<<<<<<< HEAD
for(let i =9;i>=1;){
    str +='<tr>'
    for(var j=9;j>0;){
=======
let str = '<table border="1">'
for(let i =1;i<=9;i++){
    str +='<tr>'
    for(var j=1;j<=9;j++){
>>>>>>> work5
        str +='<td>&nbsp;</td>'
    }
    str +='</tr>'
}
<<<<<<< HEAD

str = '<table border="1">'
for(let i=9;i>0;--i) {
   str +='<tr>'
   for(var j=1;j>0;--j){
=======
str += '</table>'

document.getElementById('table1').innerHTML = str

str = '<table border="1">'
for(let i=9;i>0;i--) {
   str +='<tr>'
   for(var j=0;j<i;j++){
>>>>>>> work5
       str +='<td>&nbsp;</td>'
   }   
   str +='</tr>'
}
str +='</table>'
document.getElementById('table2').innerHTML = str

<<<<<<< HEAD
document.write("<br>")

str = '<table border="1">'
   for(let i=10;i>=1;--i){
    str += '<tr>'
    for(var j=10;j<=i;--j){
        //；拼接单元格
        str +='<td>' + j + '*' + i + '=' + ( j * i ) +'</td>'

    }
    str +='</tr>'
   }
str += '</table>'
//设置div的html文档内容
=======
// document.write("<br>")

// str = '<table border="1">'
//    for(let i=9;i>=1;--i){
//     str += '<tr>'
//     // for(var j=1;j<=i;++j)
//     for(var j=9;j<=i;--j){
//         str +='<td>' + i+ '*' + j + '=' + ( j * i ) +'</td>'
//     }
//     str +='</tr>'
//    }
// str += '</table>'
// //设置div的html文档内容
// document.getElementById('table3').innerHTML = str

str = '<table border="1">'
for(var i=9;i>0;i--) {
   str +='<tr>'
   for(var j=i;j>0;j--){
       str +='<td>' + j + '*' + i + '='+ j*i + '</td>'
   }   
   str +='</tr>'
}
str +='</table>'
console.log(str)
>>>>>>> work5
document.getElementById('table3').innerHTML = str
