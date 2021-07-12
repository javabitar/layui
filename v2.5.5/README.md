# layui typescript 声明文件

# 1、关于

layui 官网：https://www.layui.com/

layui版本：2.5.5

email：865189478@qq.com

关于：本项目用于将layui的声明 layui-src.d.ts发布到

github的https://github.com/DefinitelyTyped/DefinitelyTyped 库中

# 2、进度

进度：已发布

引用： npm install @types/layui-src@2.5.0

npm install 几种区别：https://blog.csdn.net/sunhuaqiang1/article/details/85249656



目录说明：layui-src 是发布到官方库的同步文件，test是js，tmp临时目录。



# 3、问题

## 1、为什么不用2.5.5 而是2.5.0   

首次发布发现不能指定补丁版即只能发布x.y 发布x.y.z会报错。

## 2、为什么不直接使用layui 而使用layui-src 来发布声明

一方面是因为layui 被占用了 ，另一方面和layui源码对应

## 3、如果发布成功，我该如何使用你发布的声明

 npm install --save-dev @types/layui-src        //可以使用

## 4、我想补充和修改该声明怎么办

 可以fork本分支 然后 PR给我，我来发布到github的ts库。

或者你按照官方说明，直接拉取ts官方仓库，对该声明进行修改然后发布。

## 5、contact me

  +qq

## 6、依赖的jquery版本问题

如果直接安装layui-src，默认依赖jq3.5的，

如果你的node项目中js不是这个版本，

你可以：先制定jq，然后下载layui-src，如下

1）npm install --save-dev @types/jquery@1.10.34   //具体版本自己制定，

2）然后在install layui-src即可。



# 4、编写声明

```
参考：https://ts.xcatliu.com/basics/declaration-files#export-1

参考：https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/README.cn.md

参考：https://www.tslang.cn/docs/handbook/declaration-files/templates/module-d-ts.html
```

# 5、声明发布

```
github下载速度慢：https://zhuanlan.zhihu.com/p/112697807

官方如何发布：http://definitelytyped.org/guides/contributing.html

本地测试：https://github.com/DefinitelyTyped/DefinitelyTyped#how-can-i-contribute

官方声明库：https://github.com/DefinitelyTyped/DefinitelyTyped
```

# 6、补充：

如果要学习发布自己的声明到官方库，最好阅读官方文档

快速生成需要发布的4个文件

```
 快速生成4个文件：

D:\DefinitelyTyped>npx dts-gen --dt --name layui-src --template module

必须在DefinitelyTyped目录下执行且   --name后边就是发布的名称，layui-src目录需不存在
```

# 7、待处理

首次发布手忙脚乱，出现很多错误，加上编写和发布差不多耗时一周。

但初次成功后，就会发现发布起始简单(网上资料很少)，后续我会列出详细步骤。