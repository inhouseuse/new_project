function hello(compiler: string) {
    console.log(`Hello from ${compiler}`);
}
hello("TypeScript");
hello('aaa');


$(function() {
  $("#sample-calender").datepicker();
  $('#title').click(function(){
    console.log("aaa");
    alert(this.target.tagName);
  });
});

