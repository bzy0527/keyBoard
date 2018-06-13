DBFX.RegisterNamespace("DBFX.Web.Controls");
DBFX.RegisterNamespace("DBFX.Design");
DBFX.RegisterNamespace("DBFX.Serializer");
DBFX.RegisterNamespace("DBFX.Design.ControlDesigners");



//自定义输入框类
DBFX.Web.Controls.CustomizeInputBox = function () {
    var io = DBFX.Web.Controls.Control("CustomizeInputBox");

    io.ClassDescriptor.Designers.splice(1, 0, "DBFX.Design.ControlDesigners.CustomizeInputBoxDesigner");
    io.ClassDescriptor.Serializer = "DBFX.Serializer.CustomizeInputBoxSerializer";

    io.VisualElement = document.createElement('div');
    io.OnCreateHandle();

    //提示文字
    io.placeHolderText = "请输入……";
    Object.defineProperty(io,'PlaceHolderText',{
        get:function () {
            return io.placeHolderText;
        },
        set:function (v) {
            io.placeHolderText = v;
            io.placeHolderE.innerText = v;
        }
    });

    //phoneNum、IDNum、numbers、naviBar
    io.dataType = 'IDNum';
    Object.defineProperty(io,'DataType',{
        get:function () {
            return io.dataType;
        },
        set:function (v) {
            io.dataType = v;
        }
    });

    //选中后外边框颜色
    io.activateBorderColor = '#2b68dc';
    Object.defineProperty(io,'ActivateBorderColor',{
        get:function () {
            return io.activateBorderColor;
        },
        set:function (v) {
            io.activateBorderColor = v;
        }
    });

    io.SetFontSize = function (v) {
        io.testSize = v;
        io.inputE.style.fontSize = v;
        io.placeHolderE.style.fontSize = v;
    }
    io.SetFontFamily = function (v) {
        io.inputE.style.fontFamily = v;
        io.placeHolderE.style.fontFamily = v;
    }

    io.SetFontStyle = function (v) {
        io.inputE.style.fontStyle = v;
    }

    io.SetWidth = function (v) {
        io.VisualElement.style.width = v;
    }

    io.SetHeight = function (v) {
        io.VisualElement.style.height = v;
    }

    io.SetBorderRadius = function (v) {
        io.VisualElement.style.borderRadius = v;
    }

    io.testSize = '11px';
    io.characters = [];

    //TODO:添加valueChanged事件  让使用此控件的人在输入框文本改变时做处理
    io.ValueChanged = function (v) {

    }


    io.settleKeyboard = function (keyboard) {
        switch (io.dataType){
            case 'phoneNum'://手机号码
                keyboard.KbWidth = window.innerWidth;
                var w = keyboard.KbWidth;
                keyboard.RowSpacing = (w-w/4*3)/4;

                keyboard.HiddenBtnText = '收起键盘';
                // keyboard.TitleImg = '120px.png';
                keyboard.TitleText = '键盘';


                //配置键盘按键
                keyboard.ItemSource = [
                    {'code':'1','text':'1','w':w/4,'h':w/8},
                    {'code':'2','text':'2','w':w/4,'h':w/8},
                    {'code':'3','text':'3','w':w/4,'h':w/8},
                    {'code':'4','text':'4','w':w/4,'h':w/8},
                    {'code':'5','text':'5','w':w/4,'h':w/8},
                    {'code':'6','text':'6','w':w/4,'h':w/8},
                    {'code':'7','text':'7','w':w/4,'h':w/8},
                    {'code':'8','text':'8','w':w/4,'h':w/8},
                    {'code':'9','text':'9','w':w/4,'h':w/8},
                    {'code':'0','text':'0','w':w/4,'h':w/8},
                    {'code':'enter','text':'确认','w':w/4,'h':w/8},
                    {'code':'delete','text':'删除','w':w/4,'h':w/8}
                ];
                break;
            case 'IDNum'://身份证号码
                keyboard.KbWidth = window.innerWidth;
                var w = keyboard.KbWidth;
                keyboard.RowSpacing = (w-w/4*3)/4;

                keyboard.HiddenBtnText = '收起键盘';
                // keyboard.TitleImg = '120px.png';
                keyboard.TitleText = '键盘';

                //配置键盘按键
                keyboard.ItemSource = [
                    {'code':'1','text':'1','w':w/4,'h':w/8},
                    {'code':'2','text':'2','w':w/4,'h':w/8},
                    {'code':'3','text':'3','w':w/4,'h':w/8},
                    {'code':'4','text':'4','w':w/4,'h':w/8},
                    {'code':'5','text':'5','w':w/4,'h':w/8},
                    {'code':'6','text':'6','w':w/4,'h':w/8},
                    {'code':'7','text':'7','w':w/4,'h':w/8},
                    {'code':'8','text':'8','w':w/4,'h':w/8},
                    {'code':'9','text':'9','w':w/4,'h':w/8},
                    {'code':'0','text':'0','w':w/4,'h':w/8},
                    {'code':'10','text':'X','w':w/4,'h':w/8},
                    {'code':'delete','text':'删除','w':w/4,'h':w/8}
                ];
                break;
            case 'numbers'://数字键盘
                keyboard.KbWidth = window.innerWidth;
                var w = keyboard.KbWidth;
                keyboard.RowSpacing = (w-w/4*3)/4;

                keyboard.HiddenBtnText = '收起键盘';
                // keyboard.TitleImg = '120px.png';
                keyboard.TitleText = '键盘';

                //配置键盘按键
                keyboard.ItemSource = [
                    {'code':'1','text':'1','w':w/4,'h':w/8},
                    {'code':'2','text':'2','w':w/4,'h':w/8},
                    {'code':'3','text':'3','w':w/4,'h':w/8},
                    {'code':'4','text':'4','w':w/4,'h':w/8},
                    {'code':'5','text':'5','w':w/4,'h':w/8},
                    {'code':'6','text':'6','w':w/4,'h':w/8},
                    {'code':'7','text':'7','w':w/4,'h':w/8},
                    {'code':'8','text':'8','w':w/4,'h':w/8},
                    {'code':'9','text':'9','w':w/4,'h':w/8},
                    {'code':'0','text':'0','w':w/4,'h':w/8},
                    {'code':'10','text':'.','w':w/4,'h':w/8},
                    {'code':'delete','text':'删除','w':w/9,'h':w/8}
                ];
                break;
            case 'naviBar'://导航
                keyboard.KbWidth = '40px';
                // keyboard.KbHeight = '500px';

                var w = keyboard.KbWidth;
                // keyboard.RowSpacing = (w-180*3)/4;
                keyboard.RowSpacing = 5;
                //不显示键盘头部
                keyboard.IsShowHead = false;

                //配置键盘按键
                var keys = [];
                for(var i=0;i<26;i++){
                    var key = {};
                    key['code'] = i;
                    key['text'] = String.fromCharCode(65+i);
                    key['w'] = 16;
                    key['h'] = 16;
                    key['tsize'] = 11;
                    keys.push(key);
                }
                keyboard.ItemSource = keys;
                break;
            default:
                break;
        }

    }

    //键盘是否显示 默认隐藏
    io.keyboardShow = false;


    //文本框被点击
    io.VisualElement.onmousedown = function (ev) {

        var keyboard = DBFX.Web.Controls.Keyboard;
        keyboard.whenHidden= io.whenKBHidden;
        keyboard.whenShow = function () {
            if(app.SaveState){
                app.SaveState('hiddenKeyboard',keyboard.hidden);
            }
        }

        //判断是否是当前选中的输入框  不是的话 之前的输入框就要做失去焦点的处理
        if(keyboard.inputBinding != io && keyboard.inputBinding != undefined){

            keyboard.inputBinding.cursorE.style.display = 'none';
            keyboard.hidden();
            keyboard.inputBinding.keyboardShow = false;
            keyboard.inputBinding.VisualElement.style.borderColor = '#bbb';
        }

        io.VisualElement.style.borderColor = io.activateBorderColor;

        if(io.keyboardShow){
            return ;
        }


        io.placeHolderE.innerText = '';
        //鼠标点击输入框时闪动光标显示 进行动画
        io.cursorE.style.display = 'inline-block';
        keyboard.inputBinding = io;

        //这个方法不能在对象输入框创建时就绑定  后创建的输入框会覆盖！！！
        keyboard.KeyPressed = function (key) {

            if(key.KeyCode=='delete'){//删除键
                io.inputE.innerText = io.inputE.innerText.substring(0,io.inputE.innerText.length-1);
                if(io.characters.length>0){
                    io.characters.pop();
                }
            }else if(key.KeyCode=='enter'){//确认键


                // if(app.GoBack){
                //     app.GoBack();
                // }else{
                //
                // }
                keyboard.hidden();

            }else if(key.KeyCode=='hidden'){
                // if(app.GoBack){
                //     app.GoBack();
                // }else{
                //
                // }
                // keyboard.whenHidden = io.whenKBHidden;
                keyboard.hidden();
                // keyboard.hidden(io.whenKBHidden);
            }else {
                io.characters.push(key.Character);
                io.inputE.innerText += key.Character;
            }

            var w = window.getComputedStyle(io.inputE,null).width;


            if(parseFloat(w)>140){
                io.inputE.style.left = 140-parseFloat(w) +'px';
            }

            io.cursorE.style.left = parseFloat(w)<140?w:'140px';

            io.ValueChanged(io.inputE.innerText);

        }

        
        io.settleKeyboard(keyboard);
        //键盘弹出样式
        keyboard.ShowStyle = 'bottomToTop';

        if(io.keyboardShow==false){

            keyboard.show();
            io.keyboardShow = true;
        }
    }
    
    //键盘隐藏时的处理
    io.whenKBHidden = function () {
        //光标隐藏
        io.cursorE.style.display = 'none';
        io.keyboardShow = false;
        io.VisualElement.style.borderColor = '#bbb';

    }

    io.onload = function () {
        var ioE = io.VisualElement;
        ioE.style.width = '150px';
        ioE.style.height = '20px';
        ioE.style.border = '1px solid #bbb';
        ioE.style.borderRadius = '3px';

        //
        io.textBox =  document.createElement('div');
        io.textBox.style.width = "100%";
        io.textBox.style.height = "100%";
        io.textBox.style.position = "relative";
        io.textBox.style.overflow = 'hidden';
        io.textBox.style.display = "flex";
        io.textBox.style.flexDirection = "column";
        io.textBox.style.justifyContent = "center";
        ioE.appendChild(io.textBox);


        //显示提示文字的标签
        io.placeHolderE = document.createElement('div');
        io.placeHolderE.innerText = io.placeHolderText;
        io.placeHolderE.style.color = "#888";
        io.placeHolderE.style.fontSize = "11px";
        io.placeHolderE.style.textIndent = '3px';
        io.textBox.appendChild(io.placeHolderE);


        //使用div模拟文本输入框
        io.inputE = document.createElement('div');
        io.inputE.style.display = 'inline-block';
        io.inputE.style.cssFloat = 'left';
        io.inputE.style.position = 'absolute';
        io.inputE.style.left = '3px';
        // io.inputE.style.zIndex = -1;
        io.textBox.appendChild(io.inputE);

        //使用div模拟浮动光标
        io.cursorE = document.createElement('div');
        io.cursorE.style.width = '2px';
        io.cursorE.style.height = '75%';
        //和输入文本框相距3px
        io.cursorE.style.marginLeft = '3px';
        io.cursorE.style.display = 'none';
        io.cursorE.style.position = 'absolute';
        io.cursorE.style.cssFloat = 'left';
        //实现光标的闪动效果
        io.cursorE.classList.add("textcursorAnimation");
        io.textBox.appendChild(io.cursorE);
        
    }
    io.onload();
    return io;
}
DBFX.Serializer.CustomizeInputBoxSerializer = function () {

    //反系列化
    this.DeSerialize = function (c, xe, ns) {
        DBFX.Serializer.DeSerialProperty("DataType", c, xe);
        DBFX.Serializer.DeSerialProperty("PlaceHolderText", c, xe);
        DBFX.Serializer.DeSerialProperty("ActivateBorderColor", c, xe);
    }

    //系列化
    this.Serialize = function (c, xe, ns) {
        DBFX.Serializer.SerialProperty("DataType", c.DataType, xe);
        DBFX.Serializer.SerialProperty("PlaceHolderText", c.PlaceHolderText, xe);
        DBFX.Serializer.SerialProperty("ActivateBorderColor", c.ActivateBorderColor, xe);
    }
}
DBFX.Design.ControlDesigners.CustomizeInputBoxDesigner = function () {

    var obdc = new DBFX.Web.Controls.GroupPanel();
    obdc.OnCreateHandle();
    obdc.OnCreateHandle = function () {

        DBFX.Resources.LoadResource("design/DesignerTemplates/FormDesignerTemplates/CustomizeInputBoxDesigner.scrp", function (od) {
            od.DataContext = obdc.dataContext;
        }, obdc);
    }

    obdc.HorizonScrollbar = "hidden";
    obdc.OnCreateHandle();
    obdc.Class = "VDE_Design_ObjectGeneralDesigner";
    obdc.Text = "自定义输入框控件";
    return obdc;
}


//键盘类
DBFX.Web.Controls.SoftKeyboard = function () {

    var kb = DBFX.Web.Controls.Control("SoftKeyboard");

    kb.VisualElement = document.createElement('div');
    kb.OnCreateHandle();

    //键盘类型 手机号、身份证、数据（有小数点）、侧边定位导航（A-Z 通讯录快速定位）
    /*
    * phoneNum、IDNum、numbers、naviBar
    *
    * */
    kb.type = "phoneNum";
    Object.defineProperty(kb,'Type',{
        get:function () {
            return kb.type;
        },
        set:function (v) {
            kb.type = v;
            kb.reLayout();
        }
    });

    //键盘展现方式
    /*
    * 从左侧出现-leftToRight; 从右侧出现-rightToLeft
    * 从底部出现-bottomToTop; 从顶部出现-topToBottom
    *从右侧中部出现rightToLeftCenter
    * */
    kb.showStyle = 'bottomToTop';
    Object.defineProperty(kb,'ShowStyle',{
        get:function () {
            return kb.showStyle;
        },
        set:function (v) {
            kb.showStyle = v;
            kb.setOriginalPos();

        }
    });


    //键盘宽度
    kb.kbWidth = 500;
    Object.defineProperty(kb,'KbWidth',{
        get:function () {
            return kb.kbWidth;
        },
        set:function (v) {
            kb.kbWidth = v;
            kb.reLayout();
        }
    });
    //键盘高度
    kb.kbHeight = 100;
    Object.defineProperty(kb,'KbHeight',{
        get:function () {
            return kb.kbHeight;
        },
        set:function (v) {
            kb.kbHeight = v;
            kb.VisualElement.style.height = (v+'').indexOf('%')!=-1?v:parseFloat(v)+'px';
            kb.reLayout();
        }
    });

    //两行按键间距 行间距
    kb.lineSpacing = 12;
    Object.defineProperty(kb,'LineSpacing',{
        get:function () {
            return kb.lineSpacing;
        },
        set:function (v) {
            kb.lineSpacing = v;
            kb.reLayout();
        }
    });
    //同行按键的间距
    kb.rowSpacing = 12;
    Object.defineProperty(kb,'RowSpacing',{
        get:function () {
            return kb.rowSpacing;
        },
        set:function (v) {
            kb.rowSpacing = v;
            kb.reLayout();
        }
    });

    //隐藏键盘按钮文字
    kb.hiddenBtnText = '收起键盘';
    Object.defineProperty(kb,'HiddenBtnText',{
        get:function () {
            return kb.hiddenBtnText;
        },
        set:function (v) {
            kb.hiddenBtnText = v;
            kb.reLayout();
        }
    });

    //隐藏键盘按钮图片
    kb.hiddenBtnImg = '';
    Object.defineProperty(kb,'HiddenBtnImg',{
        get:function () {
            return kb.hiddenBtnImg;
        },
        set:function (v) {
            kb.hiddenBtnImg = v;
            kb.reLayout();
        }
    });

    //是否显示键盘头部
    kb.isShowHead = true;
    Object.defineProperty(kb,'IsShowHead',{
        get:function () {
            return kb.isShowHead;
        },
        set:function (v) {
            kb.isShowHead = v;
            if(v){
                kb.headElement.style.display = 'block';
            }else {
                kb.headElement.style.display = 'none';
            }

        }
    });

    //头部标题栏文字
    kb.titleText = '键盘';
    Object.defineProperty(kb,'TitleText',{
        get:function () {
            return kb.titleText;
        },
        set:function (v) {
            kb.titleText = v;
            kb.titleElement.innerText = v;
        }
    });
    //头部标题栏图片
    kb.titleImg = '';
    Object.defineProperty(kb,'TitleImg',{
        get:function () {
            return kb.titleImg;
        },
        set:function (v) {
            kb.titleImg = v;
            kb.titleElement.innerHTML = "<IMG class=\"titleImg\" src=\"" + v + "\" />";
            kb.titleElement.querySelector('.titleImg').style.maxHeight = '50px';

        }
    });


    //按键集合
    /**按键配置属性
     * code:按键码 默认0
     * text：显示文字 默认0;     bgc：背景颜色 默认：transparent;      tsize：显示文字大小  默认12 ;
     * tcolor:文字颜色 默认#4B4B4B；   tfamily:文字字体 默认：宋体；
     * w：宽度 默认30 ;  h:高度 默认30 ;   display：css样式中的display 默认inline-block;
     * float：浮动 默认left;     imgURL:显示图片地址 默认空;
     */

    kb.Keys = [];

    //键盘中按键的配置
    Object.defineProperty(kb, "ItemSource", {
        get: function () {

            return kb.Keys;

        },
        set: function (v) {
            kb.Keys = v;
            kb.reLayout();

        }
    });


    //设置弹出前的初始位置
    kb.setOriginalPos = function () {
        //初始设置放在这里可以避免点击输入框时反复弹出键盘

        kb.VisualElement.style.top = '';
        kb.VisualElement.style.left = '0px';

        switch (kb.showStyle){
            case 'bottomToTop'://从底部出现
                kb.VisualElement.style.top = window.innerHeight*1.1+'px';
                break;
            case 'topToBottom'://从顶部出现
                kb.VisualElement.style.top = -window.innerHeight +'px';

                // kb.VisualElement.style.top = 0 +'px';
                break;
            case 'leftToRight'://从左侧出现
                kb.VisualElement.style.left = -window.innerWidth +'px';
                break;
            case 'rightToLeft'://从右侧出现
                kb.VisualElement.style.left = window.innerWidth +'px';
                break;
            case 'rightToLeftCenter':
                kb.VisualElement.style.left = window.innerWidth +'px';
                kb.VisualElement.style.top = window.innerHeight*0.5+'px';
                break;
            default:
                break;
        }
    }


    //布局按键
    kb.reLayout = function () {

        if (!Array.isArray(kb.Keys))
            return;

        kb.keysArea.innerHTML = '';
        for(var i=0;i<kb.Keys.length;i++){
            var obj = kb.Keys[i];
            var skey = new DBFX.Web.Controls.SoftKey();
            skey.Keyboard = kb;
            kb.keysArea.appendChild(skey.VisualElement);

            skey.KeyCode = obj['code'] || '';
            skey.Character = obj['text'] || '';
            skey.KeyWidth = obj['w'] || 30;
            skey.KeyHeight = obj['h'] || 30;
            skey.BgColor = obj['bgc'] || 'transparent';
            skey.CharacterSize = obj['tsize'] || 25;//100
            skey.CharacterColor = obj['tcolor'] || '#4B4B4B';
            skey.CharacterFamily = obj['tfamily'] || '粗体';

            skey.VisualElement.style.display = obj['display'] || 'inline-block';
            skey.VisualElement.style.cssFloat = obj['float'] || 'left';
            skey.KeyImageUrl = obj['imgURL'] || '';

            skey.BorderW = obj['borderW'] || 2;
            skey.BorderC = obj['borderC'] || 'rgba(255,255,255,1)';
            skey.BorderR = obj['borderR'] || '8px';


            skey.LeftMargin = parseFloat(kb.rowSpacing)+'px';
            // skey.RightMargin = parseFloat(kb.rowSpacing)+'px';
            skey.TopMargin = parseFloat(kb.lineSpacing)*0.5+'px';
            skey.BottomMargin = parseFloat(kb.lineSpacing)*0.5+'px';



            // Object.keys(obj).forEach(function (value) {
            //    skey[value] = obj[value];
            // });
        }

        kb.hiddenBtn.innerHTML = '';
        var hiddenK = new DBFX.Web.Controls.SoftKey();
        hiddenK.Keyboard = kb;
        kb.hiddenBtn.appendChild(hiddenK.VisualElement);


        hiddenK.KeyImageUrl = kb.hiddenBtnImg;
        hiddenK.KeyCode = "hidden";
        hiddenK.Character = kb.hiddenBtnText;
        hiddenK.CharacterSize = 12;
        hiddenK.BorderW = 0;
        hiddenK.KeyHeight = '40px';
        hiddenK.KeyWidth = '60px';

    }

    //触发按键
    kb.OnKeyPressed = function (key) {

        if (kb.KeyPressed != undefined && kb.KeyPressed.GetType() == "Command") {

            kb.KeyPressed.Sender = key;
            kb.KeyPressed.Execute();
        }


        if (kb.KeyPressed != undefined && typeof kb.KeyPressed=="function") {

            kb.KeyPressed(key);

        }

    }


    //键盘按键显示的字符
    kb.characters = ['1','2','3','4','5','6','7','8','9','.','0','确认'];



    //键盘展现方式
    /*
    * 从左侧出现-leftToRight; 从右侧出现-rightToLeft
    * 从底部出现-bottomToTop; 从顶部出现-topToBottom
    *
    * */
    // kb.showStyle = 'leftToRight';

    //键盘展示
    kb.show = function () {
        //键盘展示时调用
        kb.whenShow();

        kb.VisualElement.style.position = 'fixed';
        //设置动画
        kb.VisualElement.style.transition = "all 200ms linear";
        kb.VisualElement.style.width = (kb.kbWidth+'').indexOf('%') != -1?kb.kbWidth : parseFloat(kb.kbWidth)+'px';

        document.body.appendChild(kb.VisualElement);
        var h = window.getComputedStyle(kb.VisualElement,null).height;
        var w = window.getComputedStyle(kb.VisualElement,null).width;
        switch (kb.showStyle){
            case 'bottomToTop'://从底部出现
                kb.VisualElement.style.minHeight = '300px';
                kb.VisualElement.style.top = window.innerHeight-parseFloat(h)+'px';
                break;
            case 'topToBottom'://从顶部出现
                console.log('从顶部出现');
                kb.VisualElement.style.top = window.innerHeight-parseFloat(h)+'px';
                break;
            case 'leftToRight'://从左侧出现
                kb.VisualElement.style.left = '0px';
                kb.VisualElement.style.top = window.innerHeight-parseFloat(h)+'px';
                break;
            case 'rightToLeft'://从右侧出现
                kb.VisualElement.style.left = '0px';
                kb.VisualElement.style.top = window.innerHeight-parseFloat(h)+'px';
                break;
            case 'rightToLeftCenter':
                kb.VisualElement.style.left = '0px';
                kb.VisualElement.style.top = window.innerHeight-parseFloat(h)+'px';
                break;
            default:
                break;
        }

        //弹出键盘时添加蒙版
        document.body.insertBefore(kb.maskE,kb.VisualElement);
        //布局按键
        kb.reLayout();

    }
    //键盘弹出时需要做的处理 在调用show方法之前赋值
    kb.whenShow = function () {

    }


    //隐藏键盘
    kb.hidden = function (hiddenfunc) {
        
        kb.whenHidden();
        if(document.body.contains(kb.maskE)){
            document.body.removeChild(kb.maskE);
        }


        switch (kb.showStyle){
            case 'bottomToTop'://从底部出现
                kb.VisualElement.style.top = window.innerHeight+'px';
                break;
            case 'topToBottom'://从顶部出现
                kb.VisualElement.style.top = -window.innerHeight +'px';
                break;
            case 'leftToRight'://从左侧出现
                kb.VisualElement.style.left = -window.innerWidth +'px';
                break;
            case 'rightToLeft'://从右侧出现
                kb.VisualElement.style.left = window.innerWidth +'px';
                break;
            default:
                break;
        }
    }
    //键盘隐藏时需要做的处理 在调用hidden方法前调用
    kb.whenHidden = function () {

    }


    kb.onload = function () {
        kb.VisualElement.style.width = parseFloat(kb.kbWidth)+'px';
        // kb.VisualElement.style.height = parseFloat(kb.kbHeight)+'px';
        //#cbcbcb
        kb.VisualElement.style.backgroundColor = 'transparent';
        kb.VisualElement.style.overflow = 'hidden';
        kb.VisualElement.style.margin = '0px';
        kb.VisualElement.style.left = '0px';
        kb.VisualElement.style.background = 'rgba(0,0,0,0.1)';

        // console.log('键盘类加载时屏幕的宽度'+window.innerWidth);
        //初始化时就设置键盘的宽度为窗口的宽度
        // kb.kbWidth = window.innerWidth;

        //键盘蒙版
        kb.maskE = document.createElement('div');
        kb.maskE.style.width = window.innerWidth+'px';
        kb.maskE.style.height = window.innerHeight+'px';
        kb.maskE.style.backgroundColor= 'transparent';
        kb.maskE.style.position = 'fixed';
        kb.maskE.style.left = "0px";
        kb.maskE.style.top = "0px";
        kb.maskE.onmousedown = function (ev) {
            kb.hidden();
        }

            //键盘头部
        kb.headElement = document.createElement('div');
        kb.headElement.style.width = "100%";
        kb.headElement.style.height = "50px";
        kb.headElement.style.position = "relative";
        kb.headElement.style.lineHeight = "50px";
        kb.headElement.style.borderBottom = '2px solid #ccc';
        kb.VisualElement.appendChild(kb.headElement);

        //头部标题栏
        kb.titleElement = document.createElement('div');
        kb.titleElement.style.display = "inline-block";
        kb.titleElement.style.width = '100%';
        kb.titleElement.innerText = '键盘';
        kb.titleElement.style.textAlign = 'center';
        kb.headElement.appendChild(kb.titleElement);

        //头部右侧隐藏键盘按钮
        kb.hiddenBtn = document.createElement('div');
        kb.hiddenBtn.style.position = 'absolute';
        kb.hiddenBtn.style.right = '50px';
        kb.hiddenBtn.style.bottom = '3px';
        // kb.hiddenBtn.style.height = '40px';
        // kb.hiddenBtn.style.width = '40px';
        kb.hiddenBtn.style.overflow = "hidden";
        kb.headElement.appendChild(kb.hiddenBtn);

        // kb.downArrow = document.createElement('img');
        // kb.downArrow.src = "down.jpg";
        // // kb.downArrow.style.width = "40px";
        // kb.downArrow.style.height = "40px";
        // kb.hiddenBtn.appendChild(kb.downArrow);

        //按键区
        kb.keysArea = document.createElement('div');
        kb.keysArea.style.width = "100%";
        kb.VisualElement.appendChild(kb.keysArea);

        kb.setOriginalPos();
        // kb.createKeyboard();
        kb.reLayout();

    }

    kb.onload();
    return kb;
}


//按键类
DBFX.Web.Controls.SoftKey = function () {

    var k = DBFX.Web.Controls.Control("SoftKey");

    k.VisualElement = document.createElement("DIV");
    k.OnCreateHandle();



    //显示字符
    k.character = "按键";
    Object.defineProperty(k,"Character",{
        get:function () {
            return k.character;
        },
        set:function (v) {
            k.character = v;
            // k.setAppearance();
            k.textE.innerText = v;
        }
    });

    //按键代码
    Object.defineProperty(k, "KeyCode", {
        get: function () {
            return k.keyCode;
        },
        set: function (v) {
            k.keyCode = v;
        }
    });

    //按键图片链接
    Object.defineProperty(k, "KeyImageUrl", {
        get: function () {
            return k.keyImageUrl;
        },
        set: function (v) {
            if(v!=undefined && v!= ''){
                k.keyImageUrl = v;
                k.keyElement.innerHTML = "<IMG class=\"SoftKey\" src=\"" + v + "\" />";
            }
        }
    });


    //字符颜色
    k.characterColor = '#fff';
    Object.defineProperty(k,"CharacterColor",{
        get:function () {
            return k.characterColor;
        },
        set:function (v) {
            k.characterColor = v;
            k.textE.style.color = v;
        }
    });
    //字符字体
    k.characterFamily = '宋体';
    Object.defineProperty(k,"CharacterFamily",{
        get:function () {
            return k.characterFamily;
        },
        set:function (v) {
            k.characterFamily = v;
            k.textE.style.fontFamily = v;
        }
    });
    //字符大小
    k.characterSize = 12;
    Object.defineProperty(k,"CharacterSize",{
        get:function () {
            return k.characterSize;
        },
        set:function (v) {
            k.characterSize = v;
            k.textE.style.fontSize = parseInt(v)+"px";
        }
    });

    //按键背景色  #9ab3cb   transparent
    k.bgColor = 'transparent';
    Object.defineProperty(k,"BgColor",{
        get:function () {
            return k.bgColor;
        },
        set:function (v) {
            k.bgColor = v;
            k.setAppearance();
            // k.keyElement.style.backgroundColor = v;
            // k.VisualElement.style.backgroundColor = 'transparent';
        }
    });

    //高亮时（按下时）背景颜色
    k.highlightBgColor = '#f9f9f9';
    //高亮时（按下时）字体颜色
    k.highlightCharactorColor = ''

    //宽度
    k.keyWidth = 30;
    Object.defineProperty(k,"KeyWidth",{
        get:function () {
            return k.keyWidth;
        },
        set:function (v) {
            k.keyWidth = v;
            k.setAppearance();
        }
    });

    //height
    k.keyHeight = 30;
    Object.defineProperty(k,"KeyHeight",{
        get:function () {
            return k.keyHeight;
        },
        set:function (v) {
            k.keyHeight = v;
            k.setAppearance();
        }
    });

    
    //border
    k.borderW = 1;
    Object.defineProperty(k,"BorderW",{
        get:function () {
            return k.borderW;
        },
        set:function (v) {
            k.borderW = v;
            k.setAppearance();
        }
    });
    k.borderC = 'red';
    Object.defineProperty(k,"BorderC",{
        get:function () {
            return k.borderC;
        },
        set:function (v) {
            k.borderC = v;
            k.setAppearance();
        }
    });
    k.borderR = 5;
    Object.defineProperty(k,"BorderR",{
        get:function () {
            return k.borderR;
        },
        set:function (v) {
            k.borderR = v;
            k.setAppearance();
        }
    });

    //margin
    k.leftMargin = 0;
    Object.defineProperty(k,"LeftMargin",{
        get:function () {
            return k.leftMargin;
        },
        set:function (v) {
            k.leftMargin = v;
            k.setAppearance();
        }
    });
    k.rightMargin = 0;
    Object.defineProperty(k,"RightMargin",{
        get:function () {
            return k.rightMargin;
        },
        set:function (v) {
            k.rightMargin = v;
            k.setAppearance();
        }
    });
    k.topMargin = 0;
    Object.defineProperty(k,"TopMargin",{
        get:function () {
            return k.topMargin;
        },
        set:function (v) {
            k.topMargin = v;
            k.setAppearance();
        }
    });
    k.bottomMargin = 0;
    Object.defineProperty(k,"BottomMargin",{
        get:function () {
            return k.bottomMargin;
        },
        set:function (v) {
            k.bottomMargin = v;
            k.setAppearance();
        }
    });




    /*事件处理部分*/
    //mousedown
    k.VisualElement.addEventListener('mousedown',function (event) {
        event.preventDefault();
        // k.onPress(k);

        //TODO:获取点击时按钮的背景颜色 需要调试
        k.defaultBC = window.getComputedStyle(k.VisualElement,null).backgroundColor;
        k.BgColor = k.highlightBgColor;

        k.keyClick(event);

    },false);

    //mouseup
    k.VisualElement.addEventListener('mouseup',function () {
        k.BgColor = k.defaultBC;
        // k.setOriginal();
    },false);

    //touchstart
    k.VisualElement.addEventListener('touchstart',function (event) {
        event.preventDefault();

        k.defaultBC = window.getComputedStyle(k.VisualElement,null).backgroundColor;
        k.BgColor = k.highlightBgColor;

        // k.onPress(k);
        k.keyClick(event);
    },false);

    //touchend
    k.VisualElement.addEventListener('touchend',function (event) {
        event.preventDefault();
        k.BgColor = k.defaultBC;
        // k.setOriginal();
    },false);

    //touchcancel
    k.VisualElement.addEventListener('touchcancel',function (event) {
        event.preventDefault();
        k.BgColor = k.defaultBC;
        // k.setOriginal();
    },false);

    //handle event
    k.onPress = function (k) {
        console.log(k.character);
        k.BgColor = "red";
    }




    /*样式设置部分*/
    //设置外表显示
    k.setAppearance = function () {
        var key = k.VisualElement;
        // key.style.width = (parseFloat(k.keyWidth)-parseFloat(k.borderW)*2)+'px';
        // key.style.height = (parseFloat(k.keyHeight)-parseFloat(k.borderW)*2)+'px';

        key.style.width = parseFloat(k.keyWidth)+'px';
        key.style.height = parseFloat(k.keyHeight)+'px';

        key.style.backgroundColor = k.bgColor;
        key.style.fontSize = parseFloat(k.characterSize)+"px";
        key.style.borderWidth = parseFloat(k.borderW)+"px";
        key.style.borderStyle = "solid";
        key.style.borderRadius = (k.borderR+'').indexOf('%')!=-1?k.borderR:parseFloat(k.borderR)+"px";
        key.style.borderColor = k.borderC;

        //设置间距
        key.style.marginLeft = parseFloat(k.leftMargin)+"px";
        key.style.marginRight = parseFloat(k.rightMargin)+"px";
        key.style.marginTop = parseFloat(k.topMargin)+"px";
        key.style.marginBottom = parseFloat(k.bottomMargin)+"px";


        //TODO:垂直居中 如果上下边框宽不同  则要增加上、下边框宽度设置属性  然后更改此处代码为：
        //(parseFloat(k.keyHeight)-parseFloat(k.borderTopW)-parseFloat(k.borderBottomW))+'px'
        key.style.lineHeight = (parseFloat(k.keyHeight)-parseFloat(k.borderW)*2)+'px';

        // k.textE.innerText = k.character;
        // k.textE.style.backgroundColor = k.bgColor;
        k.keyElement.style.width = parseFloat(k.keyWidth)+'px';
        k.keyElement.style.height = parseFloat(k.keyHeight)+'px';
        // k.textE.style.lineHeight = parseFloat(k.keyHeight)+'px';
    }

    //设置最初样式
    k.setOriginal = function () {
        var key = k.VisualElement;

        key.style.backgroundColor = k.originBgColor;
        key.style.borderRadius = parseFloat(k.originBorderR)+"px";

        key.style.borderWidth = parseFloat(k.originBorderW)+"px";
        key.style.borderStyle = "solid";
        key.style.borderColor = k.originBorderC;

    }

    /**
     * 设置标签元素的样式style
     * @param element 标签元素
     * @param styleObj 样式对象
     */
    k.setElementStyle = function (element,styleObj) {
        if(typeof styleObj != "object"){
            return;
        }

        Object.keys(styleObj).forEach(function (key) {
            element.style.key = styleObj[key];
        });
    }

    //按键被按下
    k.keyClick = function (e) {


        if (k.Keyboard != undefined){
            k.Keyboard.OnKeyPressed(k);
        }
    }



    //创建时运行
    k.onload = function () {
        var key = k.VisualElement;

        key.style.boxSizing = 'border-box';


        k.keyElement = document.createElement('div');
        key.appendChild(k.keyElement);
        k.keyElement.style.display = "flex";
        k.keyElement.style.flexDirection = "column";
        k.keyElement.style.justifyContent = "center";
        k.keyElement.style.textAlign = 'center';

        k.textE = document.createElement('div');
        k.textE.style.display = "inline-block";
        k.textE.innerText = k.character;

        k.keyElement.appendChild(k.textE);

        //保存最原始的外貌形态
        k.originBgColor = k.bgColor;
        k.originBorderW = k.borderW;
        k.originBorderR = k.borderR;
        k.originBorderC = k.borderC;


        //设置外表显示
        k.setAppearance();

    }

    k.onload();

    return k;
}

//全局键盘
DBFX.Web.Controls.Keyboard = new DBFX.Web.Controls.SoftKeyboard();