module.exports = function(grunt) {
  grunt.initConfig({
//插件配置开始
    pkg: grunt.file.readJSON('package.json'),
    //连接插件
    concat:{
    	options:{
    		//定义一个用于插入合并输出文件之间的字符
    		separator:';'
    	},
    	dist:{
    		//将要被合并的文件
    		src:['static/js/**/*.js'],
    		//合并后的js文件的存放位置
    		dest:'source/js/<%= pkg.name %>.js'
    	},
      mytask:{
        //自定义任务，要合并的文件写在src数组里，目标文件写在dest里,可以在自定义任务中重写配置options，优先于默认配置
        options:{
          separator:'&'
        },
        src:['static/js/test1.js','static/js/test2.js'],
        dest:'static/js/test.js'
      },
    },
    //es6转换插件
    babel:{
      options:{
        sourceMap:true,
        presets:['babel-preset-es2015']
      },
      dist:{
        //dist是插件默认任务
        files:{
          'static/js/test1.js':'source/js/used-for-grunt.js'
        }
      },
      mytask:{
          //自定义任务
          options:{
            sourceMap:false,
            presets:['babel-preset-es2015'],
            //presets: ["es2015"]
          },
          files:{
            //要编译的es6文件放在第二项，编译结果放在第一项（真TM反人类），两个文件必须已创建，否则会报path must be a string错误，不会自动帮你创建文件
            'static/js/target.js':'source/js/source.js'
          }
        },
    },
    //js语法检查插件
    jshint:{
      options:{
        //默认配置项，执行自定义任务时会与自定义任务重的配置项合并进行
         curly: true,//使用大括号，比如if(true) dosomething();需要使用大括号，if(true) {dosomething();}
         eqnull: true,//允许使用"== null"作比较
         eqeqeq: true,//强制==(!=)为===(!==)
         es3: true,//按照ECMAScript 3标准执行，针对IE6/7/8/9
         asi: true,//允许没有加分号的行尾
         boss: false,//允许if(a=1) for(;a=1;) while(a=1)等赋值语句
         sub: true,//允许obj["key"]这样下标的方式访问属性，默认只能使用点访问属性
         undef: true,//如果为真，JSHint会要求所有的非全局变量，在使用前都被声明
         noempty: false,//如果为真，JSHint会禁止出现空的代码块（没有语句的代码块）
         maxerr: 10,//错误数超过这个数目将不再继续检查js文件
         browser: true,//真为浏览器环境，允许console/setTimeOut等，但是必须前面写上window,折中的办法就是在globals全局变量白名单里添加console等
         immed: false,//如果为真，JSHint要求匿名函数的调用为(function(){//}());而非(function(){//bla bla})();
         globals: {
          //表示已存在合法的全局变量
           jQuery: true,
           $: true,
           module: true,
        },
      },
      //自定义任务all，作用是检查static/js目录及子目录下所有js文件
      all:["static/js/**/*.js"],
      mytask:{
        //options:{},
        src:["static/js/target.js"]
      },
    },
//插件配置结束
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-babel');
  //设置grunt不带参数时默认执行的任务，可以有多项，任务名按照执行顺序依次写在第二个参数数组里
  //要执行确定的任务必须指定，例如 grunt babel:mytask 就会执行babel插件的mytask任务
  grunt.registerTask('default', ['concat:mytask','babel:mytask','jshint:mytask']);
};   