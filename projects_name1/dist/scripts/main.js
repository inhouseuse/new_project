// typescriptのテスト
function hello(compiler) {
    console.log("Hello from " + compiler);
}
hello('TypeScript');
hello('aaa');
// jQueryUIのテスト
$(function () {
    $('#sample-calender').datepicker();
    // jQueryのテスト
    $('#title').click(function () {
        console.log('aaa');
    });
});
// underscore.jsのテスト
console.log(_.random(0, 100));
