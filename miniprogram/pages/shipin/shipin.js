Page({

  /**
   * 页面的初始数据
   */
  data: {
    hiddenName:true,
    tabs:[
      {
        id:0,
        name:"论坛教程",
        isActive:true
      },
      {
        id:1,
        name:"好课推荐",
        isActive:false
      },
      {
        id:2,
        name:"编程练习",
        isActive:false
      },
    ],
    haokeList:[
      {
        name:"黑马程序员匠心之作|C++教程从0到1入门编程,学习编程不再难",
        comment:"知识点划分细，老师授课方式轻松，每一节课时长较短，适合利用碎片化时间学习。",
        imagePath:"../../images/121.jpg",
        platform:"bilibili",
        way:"打开b站，搜索课程名称或av41559729"
      },
      {
        name:"西安交通大学|计算机程序设计（C++）",
        comment:"国家精品课程，内容适合应试，有配套oj系统题目。",
        imagePath:"../../images/122.jpg",
        platform:"中国大学MOOC",
        way:"打开MOOC，注册账号，搜索课程名称加入课程。"
      },
      {
        name:"北京邮电大学|C/C++程序设计与编程方法",
        comment:"信息黄埔出品，专业！",
        imagePath:"../../images/123.jpg",
        platform:"中国大学MOOC",
        way:"打开MOOC，注册账号，搜索课程名称加入课程。"
      }
    ],
      questionList:[
        {
         name:"输入3个数，求最大值",
         answer:"#include<iostream>"+"\n"+"using namespace std;"+"\n"+"int main() {"+"\n"+"int a, b, c, m;"+"\n"+"cin >> a >> b >> c;"+"\n"+ "cout << a << endl;"+"\n"+"cout << b << endl;"+"\n"+"cout << c << endl;"+"\n"+" m = a;"+"\n"+"if (b > m)"+"\n"+"m = b;"+"\n"+"if (c > m)"+"\n"+"m = c;"+"\n"+"cout<<m<<endl;\nreturn 0;\n}"
         },
        {
          name:"求 e=1 + 1/1! + 1/2! + 1/3! + ...",
          answer:"#include<iostream> \nusing namespace std;\nint main() {\nint i;\n double e,t;\n i = 1, e = 1, t = 1;\n while (t>=1e-7) \n{ \nt = t / i; i += 1; e += t;\n }\n cout << e;\nreturn0;\n}"
        },
        {
          name:"求水仙花数（一个三位数，其各位数字立方和等于该数字本身）",
          answer:"#include<iostream> \nusing namespace std;\n int main() {\nint i = 1 ,j = 0, k = 0,a=0;\n for (int i=1;i<10;i++)\n for (int j=0;j<10;j++)\n for (int k=0;k<10;k++) \n{\nif((i*i*i+j*j*j+k*k*k)==(100*i+10*j+k)) \n{ \na = a + 1; \ncout << i<<j<< k<<endl; \n} \n}\n cout << a;\nreturn 0;\n}"
        },
        {
            name:"从键盘输入一个三位整数，请将其逆序输出。如输入123，输出321",
            answer:"#include <iostream>\n using namespace std;\nint main(){ \nint i; \nint a =0;\nint b[3];\ncin>>a;\nfor (i = 0; i < 3; i++) \n{\nb[i] = a % 10; \na /= 10;\n}\nfor (i = 2; i >=0; i--)\n{\n}\nfor (i = 0; i < 3; i++)\n{\ncout<<b[i];\n}\nreturn 0;\n}"
          },
         {
              name:"欧几里德算法即使用辗转相除法求解两个自然数m和n的最大公约数，假定m>=n",
              answer:"#include<iostream>\nusing namespace std;\nint main()\n{\nint m=0, n=0, b=0;\ncin>>m>>n;\nif(m==n)\n{\ncout<<m<<endl;\n}\nelse if(m>n)\n{\ndo\n{\nb=m%n;\nm=n;\nn=b;\n}\nwhile(b!=0); \ncout<<m<<endl;\n}\nreturn 0;\n}"
            },
      {
                name:"编写一个程序，求满足如下条件的最大的n，1!+2!+3!+……+n!<=X，其中X由键盘输入",
                answer:"#include<iostream>\nusing namespace std;\nint main()\n{\nint n = 0, i=0, j, k=1, count = 0, x, l;\ncin >> x;\nwhile (++i) {\nk *= i;\ncount += k;\nif (count <= x)\nn++;\nelse\nbreak;\n}\ncout<<n;\nreturn 0;\n}"
              },
 {
                    name:"从键盘输入十个正整数，找出最大的合数（合数，除了能被1和本身整除外，还能被其他数（0除外）整除的数）",
                    answer:"#include<iostream>\nusing namespace std;\nint main() {\nint a[10], i=0, j, temp = 0;\nfor (i = 0; i < 10; i++) {\ncin >> a[i];\nif (a[i] > 0) \n{for (j = (a[i] - 1); j > 1; j--) {\nif ((a[i] % j) == 0 && a[i] > temp) \n{\ntemp = a[i];\nbreak;\n}\n}\n}\n}\ncout << temp<<endl;\nreturn 0;\n}"
                  },
            {
                      name:"编写程序计算排列，排列的公式P(n,m)=n!/(n-m)!，其中n>=m。请使用两个函数分别实现计算阶乘和计算排列。键盘输入n和m的值，输出它们的排列值",
                      answer:"#include<iostream>\nusing namespace std;\nint fun1(int n){\nint sum=1;\nfor(int i=n;i>0;--i)\nsum=sum*i;\nreturn sum;\n}\nint fun2(int n,int m){\nint sum=fun1(n)/fun1(n-m);\nreturn sum;\n}\nint main(){\nint n,m;\ncin>>n>>m;\ncout<<fun2(n,m);\nreturn 0;\n}"
                    },
            {
                        name:"用非递归函数，求Fibonacci数列第n项。键盘输入一个n，输出Fibonacci数列第n项的值",
                        answer:"#include<iostream>\nusing namespace std;\nint Fibonacci(int n){\nif(n==0)\nreturn 0;\nif(n==1)\nreturn 1;\nint fib1=0;\nint fib2=1;\nint fibn=0;\nfor(int i=2;i<=n;++i){\nfibn=fib1+fib2; \nfib1=fib2;\nfib2=fibn;\n}\nreturn fibn;\n}\nint main(){\nint n;\ncin>>n;\ncout<<Fibonacci(n);\nreturn 0;\n}"
                      },
                {
                          name:"给定很多行数据,要求输出每一行的最大值",
                          answer:"#include<iostream> \nusing namespace std;\n int main() {\nint a,b;\nint max;\nwhile(cin>>a)\n{ max=a\ndo{\ncin>>b; \nif(max<b) max=b;\n} \nwhile(b!=0);\ncout<<max<<endl; \n}\nreturn 0;\n}"
                        },
                  {
                            name:"编写一个函数get_average()获取整型数组元素的平均值。要求这个函数既可以用来求一维数组元素的平均值，编程实现这个函数。数组变量的值由键盘输入，输出平均值",
                            answer:"#include<iostream> \nusing namespace std;\n int main() {\nint a[1000],i=0;\nfloat sum1=0,ave1=0;\nwhile(cin>>a[i]){\nsum1=sum1+a[i];\ni++;\nif(getchar() == '\n')\nbreak;\n}\ncout<<sum1/i<<endl;\nreturn 0;\n}"
                          },
   {
                      name:"编写相应的程序用指针实现：从键盘输入3个整型数va、vb、vc，通过一个指向整型的指针iptr，输出3个数中的最大值",
                              answer:"#include<iostream> \nusing namespace std;\n int main() {\nint va,vb,vc,max;\ncin>>va>>vb>>vc;\nmax=va>vb?va:vb;\nmax=vc>max?vc:max;\ncout<<max;\nreturn 0;\n}"
                            },
    ]
  },
  clickMe:function(e){
    this.setData({
        hiddenName:!this.data.hiddenName
    })
},
  fun:function(){
    wx.showToast({
      title:'复制成功',
    })
    wx.setClipboardData({
      data:"复制内容",
      success:function(res){
        wx.getClipboardData({
          success:function(res){
            console.log(res.data)
          }
        })
      }
    })
  },
  handleItemTab(e){
    const{index}=e.currentTarget.dataset;
    let{tabs}=this.data;
    tabs.forEach((v,i)=>i===index?v.isActive=true:v.isActive=false);
    this.setData({
      tabs
    })
  },
  handleSaveTap() {
    if (wx.getStorageSync('collect')) {
      var collect = wx.getStorageSync('collect')
    }
    else {
      var collect = []
    }
   
   if (!collect.collectionStatus) {
    collect.push([this.data.word, this.data.pron, this.data.pron_audio, this.data.defen, this.data.definition])
    wx.setStorage({
      key: "collect",
      data: collect
    })
      //如果当前状态是未收藏
      collect.collectionStatus = true;
      this.setData({
        'voteTitle.collectionStatus': collect.collectionStatus
      })
    } 
   else if (collect.collectionStatus) {
      // 如果当前状态是收藏
      collect.collectionStatus = false;
      this.setData({
        'voteTitle.collectionStatus': collect.collectionStatus
      })
    } 
    console.log(collect)
    wx.cloud.uploadFile({
      cloudPath: 'test.jpg',
      filePath:" {{questionList}}",
      success(res) {
      //上传成功后会返回永久地址
         console.log(res.fileID) 
      }
    })
    wx.showToast({
      title: collect.collectionStatus ? "收藏成功" : "取消成功",
      duration: 1000,
      icon: "success",
      mask: true})
    }

})
