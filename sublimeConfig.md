# javascript 使用sublime运行配置详解
---- 
准备工作：先建立一个js测试文件并保存；文件内容如下： 
`for (var i=0;i < 10; i++){` 
`console.log('sublime Text 3'+i);` 
`}` 
`console.log('end!');` 
---- 
## JSC方式（Mac）
## nodeJS方式
1. 下载安装NodeJS，mac直接运行命令：brew install node；
2. 启动sublime text，Tool-\>Build System-\>New Build System；
3. 在Build System中添加一下内容： 
	`{` 
	`"cmd": ["node", "$file"],` 
	`"selector": "source.js"` 
	`}` 
	保存文件（文件名不固定）； 
	选上js运行环境：Tool-\>Build System-\>刚才保存的文件名；
4. 使用快捷键command(⌘)+B运行，如果执行不成功，需要配置node路径；在终端执行命令：which node查看node路径；
	![][image-1] 
	重新配置路径，如我的路径为：/usr/local/bin/node，修改配置如下：
	`{` 
	`"cmd": ["/usr/local/bin/node", "$file"],` 
	`"selector": "source.js"` 
	`}` 
6. 测试输出结果： 
	![][image-2]


[image-1]:	DraggedImage.png
[image-2]:	DraggedImage-1.png