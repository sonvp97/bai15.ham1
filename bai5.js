let arr = ['Polaris','Aldebaran','Deneb','Vega','Altair','Dubhe','Regulus'];
let arr1 = ['Ursa Minor','Tarurus','Cygnus','Lyra','Aquila','Ursa Major','Leo'];
let star = prompt('Nhập tên ngôi sao');
for (let i=0;i < arr.length ; i++){
    if (star === arr[i]){
        document.write('Ngôi sao của bạn thuộc chòm sao số: '+ arr1[i]);
        break;
    }
    else {
        document.write('Ngôi sao bạn nhập không thuộc ngôi sao nào');
    }
}