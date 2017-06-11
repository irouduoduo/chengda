 // 引入分页插件,依赖模块要写
        var app = angular.module('app',['ngRoute','myModule']);
        app.controller('new',['$scope',function($scope){
          // 
          $('header li a').click(function(){
              $(this).addClass('focus').parent().siblings().find('a').removeClass('focus');

          });
          $scope.register = function(){
            console.log("显示成功");
            document.querySelector('.a').style.display = 'block';
          }
          $scope.cancle = function(){
            console.log('取消成功');
            document.querySelector('.a').style.display = 'none';
          }
        }]);
        // 配置相关超链接的内联页面
       app.config(['$routeProvider',function($routeProvider) {
          $routeProvider.when('/',{ //单斜杠表示页面加载的时候跳转到的页面
               templateUrl:'home.html',
               controller:'homectrl'
          }).when('/index',{
               templateUrl:'article.html',
               controller:'articlectrl'
          }).when('/beauty',{
               templateUrl:'beauty.html',
               controller:'beautyctrl'
          }).when('/orange',{
               templateUrl:'orange.html',
               controller:'orangectrl'
          }).otherwise({
            redirectTo:'/'
          });
        }]);
           // 文章页面的控制器,article.html
       app.controller('articlectrl',['$scope','$http',function($scope,$http){
          $('.pagination li a').click(function(){
            console.log('ssjjsj');
              $(this).addClass('pageBtn-focus').parent().siblings().find('a').removeClass('pageBtn-focus');

          });
           $http({
               url:'php/article.php'
      }).success(function (info) {
        // 请求回的数据放到模型上
       
        $scope.selAll = info.data.selList;
        $scope.selList = info.data.selList.slice(0, 10);
        // console.log(info.data.selList.length);
        
      });
      // console.log($scope.selAll);
          $scope.option = {
               curr: 1,  //当前页数
               all: 20,  //总页数
               count: 10,  //最多显示的页数，默认为10
               click: function (page) {
                 //这里可以写跳转到某个页面等
                    if (page>=1&&page<20) {
                        $scope.selList = $scope.selAll.slice(page*10, page*10+10);
                     };
                  }
                };
        // 评论提交给后台
          $scope.comment = '在此输入相关评论内容';
          $('.message textarea').focus(function(){
            $(this).val('');
          });
         var arr = new Array();
         $scope.submit = function(){
          arr.push($scope.comment);
          console.log(arr);
          alert('评论已提交等待审核');
          $scope.comment = '';
         }         

       }]);
       // 美搭欣赏
     app.controller('beautyctrl',['$scope','$http',function($scope,$http){

           $http({
            url:'php/beauty.php',//去后台获取相关数据
           }).success(function(info){
             $scope.allData = info.data;
             console.log($scope.allData.length);
               $scope.data = info.data.slice(0, 15);//处理返回的数据
           });
          
             $scope.option = {
               curr: 1,  //当前页数
               all: 2,  //总页数
               count: 2,  //最多显示的页数，默认为10
               click: function (page) {
                    if(page == 1)
                    {
                        $scope.data = $scope.allData.slice(0,15);
                    }else{
                      $scope.data = $scope.allData.slice((page-1)*15,(page-1)*15+15);
                     
                  }
                    }
                }; 


       }]);
     //
    
      app.controller('orangectrl',['$scope','$http',function($scope,$http){
           
       }]);
      app.controller('homectrl',['$scope','$http',function($scope,$http){
           console.log("yunxin");
       }]);