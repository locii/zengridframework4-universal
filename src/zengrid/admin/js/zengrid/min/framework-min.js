jQuery(document).ready(function($){function t(){var t=$("input#theme").val();""===t&&(t=$("#cssfile").val(),$("input#theme").val(t)),$('select#cssfile option[value="'+t+'"]').attr("selected","selected"),$("#style-name").val(t)}$("#save-layout").click(function(){var t=$("#layout-name").val(),e=$("#layout_preset option[value='"+t+"']").length;1>e&&$("#layout_preset").append($("<option>",{value:t,text:t,selected:1})),$('select#layout_preset option[value="'+t+'"]').attr("selected","selected")}),jQuery('#theme-settings input[type="checkbox"]').each(function(){var t=$(this).attr("id");jQuery("."+t).hide().parent().hide(),$(this).prop("checked")&&jQuery("."+t).fadeIn().parent().show()}),$('#theme-settings input[type="checkbox"]').click(function(){var t=$(this).attr("id");$(this).val(""),$(this).is(":checked")?($(this).val(1),$("."+t).fadeIn().parent().show()):($(this).val(0),$("."+t).fadeOut().parent().hide())}),$("#theme-settings .zen-select").each(function(){var t=$(this).attr("id");-1===$(this).val()?$("."+t).fadeIn():$("."+t).fadeOut()}),$("#theme-settings .zen-select").change(function(){var t=$(this).attr("id");-1===$(this).val()?$("."+t).fadeIn():$("."+t).fadeOut()}),$(".resizable").each(function(){var t=Math.round($(this).width()/50);$(this).attr("class","").addClass("resizable ui-widget-content ui-resizable"),$(this).find(".ui-widget-header span.col-count").text(),$(this).find(".ui-widget-header span.col-count").text(t).parent().parent().addClass("grid-"+t).attr("data-width",t);var e=$(this).attr("data-active");if(!e){$(this).fadeOut();var a=$(this).attr("id");$('.unused-modules div[data-id="'+a+'"]').fadeIn().addClass("active").parent().addClass("active")}}),$(".resizable").resizable({grid:40,minWidth:40,containment:"#resize-container",handles:"e",resize:function(){$(this).attr("class","").addClass("resizable ui-widget-content ui-resizable");var t=Math.round($(this).width()/50);$(this).find(".ui-widget-header span.col-count").text(),$(this).find(".ui-widget-header span.col-count").text(t).parent().parent().addClass("grid-"+t).attr("data-width",t)}}),$(document).on("click",".module-row .icon-eye",function(){var t=$(this).parent().parent().attr("id");$(this).parent().parent().hide().attr("data-active",0),$('div[data-id="'+t+'-row"]').show().addClass("active").parent().addClass("has-content");var e=$("#resize-container #"+t).parent().offset();e=e.top,console.log(e),$(".side-drawer").fadeOut(),$(".resize-row").removeClass("active"),$(this).parent().addClass("active");var a=$(this).parent().parent().parent().attr("data-row");a=a.replace("-row",""),$('[data-id="'+a+'_settings"].side-drawer').css({top:e-300}).fadeIn(),$('[data-id="'+t+'"]').show();var i=0;console.log(a),$('[data-row="'+a+'-row"] [data-active="1"]').each(function(){i++}),0===i&&$('[data-row="'+a+'-row"]').addClass("empty-row")}),$(document).on("click",".unused-modules div",function(){var t=$(this).attr("data-id"),e=$(this).parent().attr("data-id");console.log(e),$(this).hide(),$('[data-row="'+e+'-row"] #'+t).show().attr("data-active",1).parent().removeClass("empty-row")}),jQuery(document).on("click",".stack-positions",function(){return $(this).toggleClass("active"),!1}),$(document).on("blur",'[data-compile="1"],[data-compile="both"]',function(){var t=$(this).attr("data-stored"),e=$(this).val();if(t!==e){$("#compile_required").val(1);var a=$(this).attr("id");console.log(a+" value changed and triggered compile required")}});var e=$("#advanced_setting").val();"1"===e?($("#framework-options").addClass("pro").removeClass("basic"),$(".toggle-advanced").text("Hide Advanced Options")):($("#framework-options").removeClass("pro").addClass("basic"),$(".toggle-advanced").text("Show Advanced Options")),$(".toggle-advanced").click(function(){var t="#framework-options";return $(t).hasClass("basic")?($(t).addClass("pro").removeClass("basic"),$(".toggle-advanced").text("Hide Advanced Options"),$("#advanced_setting").val("1")):($(t).removeClass("pro").addClass("basic"),$(".toggle-advanced").text("Show Advanced Options"),$("#advanced_setting").val("0")),!1});var a=$("input#hide_info").val();1==a?$(".info,.checkbox-info,.textarea-info").hide():$(".info,.checkbox-info,.textarea-info").show(),jQuery(document).on("#hide_info","click",function(){var t=$("input#hide_info").val();1==t?$(".info,.checkbox-info,.textarea-info").hide():$(".info,.checkbox-info,.textarea-info").show()}),$(".zt-picker").each(function(){var t=$(this).val(),e=t.charAt(0);if("@"===e){var a=t.substring(1,t.length);a=$("input#"+a).val(),$(this).css({"border-right-color":"#"+a})}}),$(".zt-picker").change(function(){var t=$(this).val(),e=t.charAt(0);if("@"===e){var a=t.substring(1,t.length);a=$("input#"+a).val();var e=a.charAt(0);"@"===e&&(a=a.substring(1,t.length),a=$("input#"+a).val()),$(this).css({"border-right-color":"#"+a})}}),$(".zt-picker").each(function(){var t=$(this).val(),e=t.substring(0,3);if("dar"===e||"lig"===e){if("dar"===e){var a=t.substring(8,t.length);a=a.split(",")}if("lig"===e){var a=t.substring(9,t.length);a=a.split(",")}var i=a[1].slice(0,-2);i=parseFloat(i)/100,"dar"===e&&(i="-"+i),a=a[0],a=$("input#"+a).val();var s=$(document).ColorLuminance(a,i);$(this).css({"border-right-color":s})}}),$(".zt-picker").change(function(){var t=$(this).val(),e=t.charAt(2);if("r"===e){var a=t.substring(8,t.length);a=a.split(",")}if("g"===e){var a=t.substring(9,t.length);a=a.split(",")}if("r"===e||"g"===e){var i=a[1].slice(0,-2);"r"===e?(i=1/i,i="-"+i):i=10/i,a=a[0],a=$("input#"+a).val();var s=$(document).ColorLuminance(a,i);$(this).css({"border-right-color":s})}}),$("#zen-sidebar li").click(function(){$("#active_tab").val("");var t=$(this).attr("data-id");$("#active_tab").val(t)});var i=$("#active_tab").val();""===i&&(i="overview"),$("#zen-sidebar li").removeClass("uk-active"),$('#zen-sidebar li[data-id="'+i+'"]').addClass("uk-active"),$("#theme-settings > li").removeClass("uk-active"),$("#theme-settings > li#"+i).addClass("uk-active"),$("#theme-settings textarea,#theme-settings input").on("change",function(){var t=$(this).val();t=t.replace(/"/g,"'"),t=t.replace(/\n/g,""),$(this).val(t)}),t(),$("#save-theme").click(function(){var t=$("input#style-name").val(),e=$("#cssfile option[value='"+t+"']").length;1>e&&$("select#cssfile").append($("<option>",{value:t,text:t,selected:1}))}),$("select#cssfile").change(function(){var t=$(this).val();$("input#theme").val(t)}),$("#theme-settings .zen-select").each(function(){var t=$(this).attr("id");-1==$(this).val()?$("."+t).fadeIn():$("."+t).fadeOut()}),$("#theme-settings .zen-select").change(function(){var t=$(this).attr("id");-1==$(this).val()?$("."+t).fadeIn():$("."+t).fadeOut()})});