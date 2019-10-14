for(let i =9;i>=1;){
    str +='<tr>'
    for(var j=9;j>0;){
        str +='<td>&nbsp;</td>'
    }
    str +='</tr>'
}

str = '<table border="1">'
for(let i=9;i>0;--i) {
   str +='<tr>'
   for(var j=1;j>0;--j){
       str +='<td>&nbsp;</td>'
   }   
   str +='</tr>'
}
str +='</table>'
document.getElementById('table2').innerHTML = str

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
document.getElementById('table3').innerHTML = str
