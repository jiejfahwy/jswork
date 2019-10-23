// function goldbach(c){
//     var sum = 0;
//     for(var i=1;i<=c;i++){
//         if(c %i == 0){
//             sum++;
//         }
//     }
//     if(sum==2){
//         return true;
//     }else{
//         return false;
//     }
// }

// function isTrue(c){
//     for(var i=2;i<c-2;i++){


//         var a = c -i;
//         if(goldbach(i)&&isTrue(a)){
//          console.log(a+"可以拆分为两个质数"+i+"与"+a+"的和");
//         }
//     }
// }
function goldbach(){
    let sum = parseInt(document.getElementById('odd').value)
    var str = []
    if(sum <= 2 || (sum % 2 != 0) )
    {
        alert('请输入一个大于2的偶数！')
        return false
    }
    for(let i = 2; i <= sum / 2; ++i)
    {
        for(j = 2; j < i; ++j)
        {
            if(i % j == 0){
                break;
            }
        }
        if(j == i){ // i是素数
            var sub = sum - i;
            for(k = 2; k < sub; ++k)
            {
                if(sub % k == 0){
                    break;
                }
            }
            if(k == sub){
                str += sum + "可以被拆分为两个素数" + i + "和" + sub + "的和\n"
            }
        }
    }
    document.getElementById('goldbach').innerText = str
}