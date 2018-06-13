
DBFX.Web.Controls.SoftKeyboard = function () {

    var kbd = new DBFX.Web.Controls.Control("SoftKeyboard");
    kbd.ClassDescriptor.DisplayName = "自定义键盘";
    kbd.ClassDescriptor.Description = "构建自定义键盘";
    kbd.ClassDescriptor.Serializer = "DBFX.Serializer.SoftKeyboardSerializer";
    kbd.ClassDescriptor.Designers.splice(1, 0, "DBFX.Design.ControlDesigners.SoftKeyboardDesigner");
    kbd.VisualElement = document.createElement("DIV");
    kbd.OnCreateHandle();
    kbd.OnCreateHandle = function () {
        kbd.Class = "SoftKeyboard";


    }

    //按键集合
    kbd.Keys = [];

    //布局按键
    kbd.ReLayout = function () {

        if (!Array.isArray(kbd.Keys))
            return;


    }

    //触发按键
    kbd.OnKeyPressed = function (key) {

        if (kbd.KeyPressed != undefined && kbd.KeyPressed.GetType() == "Command") {

            kbd.KeyPressed.Sender = key;
            kbd.KeyPressed.Execute();
        }


        if (kbd.KeyPressed != undefined && typeof kbd.KeyPressed=="function") {

            kbd.KeyPressed(key);

        }

    }


    Object.defineProperty(kbd, "ItemSource", {
        get: function () {

            return kbd.Keys;

        },
        set: function (v) {

            kbd.Keys = v;

            kbd.ReLayout();

        }
    });


    kbd.OnCreateHandle();

    kbd.show = function () {

    }

    return kbd;
}


//按键
DBFX.Web.Controls.SoftKey = function ()
{
    var skey = new DBFX.Web.Controls.Control("SoftKey");
    skey.VisualElement = document.createElement("DIV");
    skey.OnCreateHandle();
    skey.OnCreateHandle = function ()
    {
        skey.Class = "SoftKey";
        
    }

    //按键代码
    Object.defineProperty(skey, "KeyCode", {
        get: function () {
            return skey.keyCode;
        },
        set: function (v) {

            skey.keyCode = v;
        }
    });

    //按键图片链接
    Object.defineProperty(skey, "KeyImageUrl", {
        get: function () {

            return skey.keyImageUrl;

        },
        set: function (v) {
            skey.keyImageUrl = v;
            skey.VisualElement.innerHTML = "<IMG class=\"SoftKey\" src=\"" + v + "\" />";

        }
    });


    //按键文本
    Object.defineProperty(skey,"KeyText",{
    
        get:function()
        {

            return skey.keyText;

        },
        set:function(v)
        {
            skey.keyText = v;

            skey.VisualElement.innerText = v;

        }});
    

    //按键被按下
    skey.Click = function (e) {

        if (skey.Keyboard != undefined)
            skey.Keyboard.OnKeyPressed(skey);
    }



    skey.OnCreateHandle();
    return skey;
}

DBFX.Web.Controls.SoftKeyboard.Keyboard = new DBFX.Web.Controls.SoftKeyboard();