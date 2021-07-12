# layui typescript 声明文件
layui 官网：https://www.layui.com/

layui版本：2.5.5

email：865189478@qq.com

本项目用于将layui的声明 layui-src.d.ts发布到github的https://github.com/DefinitelyTyped/DefinitelyTyped

库中



问题：

1、为什么不用2.5.6 而是2.5.5

因为ts声明发布需要和一个npm包挂钩，npm库中有只有layui=src@2.5.5。

2、为什么不直接使用layui 而使用layui-src 来发布声明

一方面是因为layui 被占用了 ，另一方面和问题一样，需要对应。 

3、如果发布成功，我该如何使用你发布的声明

 npm install --save-dev @types/layuisrc        //可以使用

4、我想补充和修改该声明怎么办

 可以fork本分支 然后 PR给我，我来发布到github的ts库。

或者你按照官方说明，直接拉取ts官方仓库，对该声明进行修改然后发布。

5、contact me

  +qq





6、如果发布

只需要下边几个文件，然后放到github对应的 types/layui-src 目录中即可

tslint.json

tsconfig.json

layui-src-tests.ts

index.d.ts