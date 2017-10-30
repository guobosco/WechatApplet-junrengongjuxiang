Page({
  data: {
    array1: ['军政后装军官', '专业技术军官、文职干部', '非专业技术文职干部'],
    index1: 0,
    array201: ['排职', '副连职', '正连职','副营职','正营职','副团职','正团职','副师职','正师职','副军职','正军职'],
    index2: 1,
    array202: ["14级","13级","12级","11级","10级","9级","8级或中职7级","6级或高级7级","4、5级","3级","1、2级"],
    array203: ["办事员","二级科员","一级科员","副科级","正科级","副处级","正处级","副局级","正局级","副军待遇","正军待遇"],
    array300: ['1年','2年','3年','4年','5年','6年','7年','8年','9年','10年','11年','12年','13年','14年','15年'],
    array301: ['1年','2年','3年','4年','5年','6年','7年','8年','9年','10年','11年','12年','13年','14年','15年','16年','17年','18年','19年','20年','21年','22年','23年'],
    array302: ['1年','2年','3年','4年','5年','6年','7年','8年','9年','10年','11年','12年','13年','14年','15年','16年','17年','18年','19年','20年','21年','22年','23年','24年','25年','26年','27年','28年','29年','30年','31年','32年'],
    array303: ['1年','2年','3年','4年','5年','6年','7年','8年','9年','10年','11年','12年','13年','14年','15年','16年','17年','18年','19年','20年','21年','22年','23年','24年','25年','26年','27年','28年','29年','30年','31年','32年','33年','34年','35年','36年','37年','38年','39年','40年'],
    array304: ['1年','2年','3年','4年','5年','6年','7年','8年','9年','10年','11年','12年','13年','14年','15年','16年','17年','18年','19年','20年','21年','22年','23年','24年','25年','26年','27年','28年','29年','30年','31年','32年','33年','34年','35年','36年','37年','38年','39年','40年','41年','42年','43年','44年','45年','46年','47年'],
    index3: 0,
    primarySize: 'default',
    loading: false,
    plain: false,
    disabled: false,
    _1src0: "../images/0year.png",
    _1src1: "../images/1year.png",
    _1src2: "../images/2year.png",
    _1src3: "../images/3year.png",
    _1src4: "../images/4year.png",
    _1src5: "../images/5year.png",
    _1src10: "../images/10year.png",

    png:".png",
    _2src:"../images/index2",
    _0: "00",
    _1: "01",
    _2: "02",
    _3: "03",
    _4: "04",
    _5: "05",
    _6: "06",
    _7: "07",
    _8: "08",
    _9: "09",
    _10: "10",
    _11: "11",
    _12: "12",

    show:false,
    buttontext:"开始排列",
    paishu:0
  },
  bindPickerChange1: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index1: e.detail.value
    })
  },
  bindPickerChange2: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index2: e.detail.value
    })
  },
  bindPickerChange3: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index3: e.detail.value
    })
  },
  
  setShow: function(e) {
    this.setData({
      show: !this.data.show
      
    })
  },
  // setPaishu: function(e){
  //   this.setData({
  //     switch (index2)
  //     {
  //       case 0:
  //       paishu=1;
  //       break;
  //       case 1:
  //       paishu=1;
  //       break;
  //       case 2:
  //       paishu=1;
  //       break;
  //       case 3:
  //       paishu=2;
  //       break;
  //       case 4:
  //       paishu=2;
  //       break;
  //       case 5:
  //       paishu=3;
  //       break;
  //       case 6:
  //       paishu=3;
  //       break;
  //       case 7:
  //       paishu=4;
  //       break;
  //       case 8:
  //       paishu=4;
  //       break;
  //       case 9:
  //       paishu=5;
  //       break;
  //       case 10:
  //       paishu=5;
  //       break;
  //       case 11:
  //       paishu=6;
  //       break;
  //       case 12:
  //       paishu=6;
  //       break;
  //     }
  //   })
  // },
  
  onShareAppMessage: function () {
    var sharetitle,
      tid = this.data.tid,
      m = this.data.m,
      flag = this.data.lastflag,
      title = this.data.sharetitle;
    return {
      title: flag == true ? title : '军人工具箱——资历章排列',
      desc: '可排列资历章',
      path: '/pages/dstree/dstree?tid=' + tid + '&m=' + m
    }
  }

})