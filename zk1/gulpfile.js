var  gulp=require("gulp");
var watch=require("gulp-watch");
var connect=require("gulp-connect");


gulp.task("server",function(){
	gulp.src("./");
	connect.server({
		port:"8008",
		liverload:true
	})
})

gulp.task("reload",function(){
	gulp.src(".")
	.pipe(connect.reload());
})


gulp.task("watch",function(){
	gulp.watch("./index.html",["reload"]);
})
gulp.task("default",["server","watch"]);