/**
 * Created by h.jiali2 on 2015/12/15.
 */
var ph = ph || {};
ph = {
    placeholder: function () {
        if( !('placeholder' in document.createElement('input')) ){//判断input是否带有placeholder属性
            var style = $("<style>" +
                "span.placeholder{display:inline-block;zoom:1;position:relative;}" +
                "span.placeholder span.note{color:#999;position:absolute;top:0;}" +
                "</style>");
            $(document).find("head").append(style);
            $('input[placeholder],textarea[placeholder]').each(function(){

                var that = $(this),
                    text= that.attr('placeholder');
                if(that.attr("type") == "password"){
                    var wrap = that.wrap("<span class='placeholder' style='width:"+that.outerWidth(true)+"px"+";height:"+that.outerHeight(true)+"px"+"'></span>").parent();
                    wrap.append("<span class='note' style='left:"+that.css("padding-left")+";line-height:"+that.outerHeight(true)+"px'>"+text+"</span>")
                    wrap.click(function () {
                        $(this).find("span.note").hide();
                        that.focus();
                    });
                    that.blur(function () {
                       if($(this).val() == ""){
                           wrap.find("span.note").show();
                       }
                    })
                }else{
                    if(that.val()===""){
                        that.val(text).addClass('placeholder');
                    }
                    that.focus(function(){
                            if(that.val()===text){
                                that.val("").removeClass('placeholder');
                            }
                        })
                        .blur(function(){
                            if(that.val()===""){
                                that.val(text).addClass('placeholder');
                            }
                        })
                        .closest('form').submit(function(){
                        if(that.val() === text){
                            that.val('');
                        }
                    });
                }
            });
        }
    }
};
