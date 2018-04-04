// 输入数据
var year = prompt("请输入您的出生年份");
var month = prompt("请输入您的出生月份");
var day = prompt("请输入您的出生日期");
// 设置空数组
var arr = [];
// 认证闰年
if (((year % 4 == 0) && !(year % 100 == 0)) || year % 400 == 0) {
	arr = ['31', '29', '31', '30', '31', '30', '31', '31', '30', '31', '30', '31'];
} else {
	arr = ['31', '28', '31', '30', '31', '30', '31', '31', '30', '31', '30', '31'];
}
// 判断总天数
var sum = parseInt(day);
for (var i = 0; i < month - 1; i++) {
	sum += parseInt(arr[i]);
}
// 打印数据
document.write("您的生日是在" + year + "年" + "是第" + sum + "天");