!function(t,s,a){function e(s,a){this.element=s,this.$element=t(s),this.tabs=[],this.state="",this.rotateInterval=0,this.$queue=t({}),this.options=t.extend({},o,a),this.init()}var o={active:null,event:"click",disabled:[],collapsible:"accordion",startCollapsed:!1,rotate:!1,setHash:!1,animation:"default",animationQueue:!1,duration:500,scrollToAccordion:!1,scrollToAccordionOffset:0,accordionTabElement:"<div></div>",activate:function(){},deactivate:function(){},load:function(){},activateState:function(){},classes:{stateDefault:"r-tabs-state-default",stateActive:"r-tabs-state-active",stateDisabled:"r-tabs-state-disabled",stateExcluded:"r-tabs-state-excluded",container:"r-tabs",ul:"r-tabs-nav",tab:"r-tabs-tab",anchor:"r-tabs-anchor",panel:"r-tabs-panel",accordionTitle:"r-tabs-accordion-title"}};e.prototype.init=function(){var a=this;this.tabs=this._loadElements(),this._loadClasses(),this._loadEvents(),t(s).on("resize",function(t){a._setState(t)}),t(s).on("hashchange",function(t){var e=a._getTabRefBySelector(s.location.hash),o=a._getTab(e);e>=0&&!o._ignoreHashChange&&!o.disabled&&a._openTab(t,a._getTab(e),!0)}),this.options.rotate!==!1&&this.startRotation(),this.$element.bind("tabs-activate",function(t,s){a.options.activate.call(this,t,s)}),this.$element.bind("tabs-deactivate",function(t,s){a.options.deactivate.call(this,t,s)}),this.$element.bind("tabs-activate-state",function(t,s){a.options.activateState.call(this,t,s)}),this.$element.bind("tabs-load",function(t){var s;a._setState(t),a.options.startCollapsed===!0||"accordion"===a.options.startCollapsed&&"accordion"===a.state||(s=a._getStartTab(),a._openTab(t,s),a.options.load.call(this,t,s))}),this.$element.trigger("tabs-load")},e.prototype._loadElements=function(){var s=this,a=this.$element.children("ul"),e=[],o=0;return this.$element.addClass(s.options.classes.container),a.addClass(s.options.classes.ul),t("li",a).each(function(){var a,i,n,l,r,c=t(this),h=c.hasClass(s.options.classes.stateExcluded);if(!h){a=t("a",c),r=a.attr("href"),i=t(r),n=t(s.options.accordionTabElement).insertBefore(i),l=t("<a></a>").attr("href",r).html(a.html()).appendTo(n);var p={_ignoreHashChange:!1,id:o,disabled:-1!==t.inArray(o,s.options.disabled),tab:t(this),anchor:t("a",c),panel:i,selector:r,accordionTab:n,accordionAnchor:l,active:!1};o++,e.push(p)}}),e},e.prototype._loadClasses=function(){for(var t=0;t<this.tabs.length;t++)this.tabs[t].tab.addClass(this.options.classes.stateDefault).addClass(this.options.classes.tab),this.tabs[t].anchor.addClass(this.options.classes.anchor),this.tabs[t].panel.addClass(this.options.classes.stateDefault).addClass(this.options.classes.panel),this.tabs[t].accordionTab.addClass(this.options.classes.accordionTitle),this.tabs[t].accordionAnchor.addClass(this.options.classes.anchor),this.tabs[t].disabled&&(this.tabs[t].tab.removeClass(this.options.classes.stateDefault).addClass(this.options.classes.stateDisabled),this.tabs[t].accordionTab.removeClass(this.options.classes.stateDefault).addClass(this.options.classes.stateDisabled))},e.prototype._loadEvents=function(){for(var t=this,a=function(a){var e=t._getCurrentTab(),o=a.data.tab;a.preventDefault(),o.disabled||(t.options.setHash&&(history.pushState?history.pushState(null,null,o.selector):s.location.hash=o.selector),a.data.tab._ignoreHashChange=!0,(e!==o||t._isCollapisble())&&(t._closeTab(a,e),e===o&&t._isCollapisble()||t._openTab(a,o,!1,!0)))},e=0;e<this.tabs.length;e++)this.tabs[e].anchor.on(t.options.event,{tab:t.tabs[e]},a),this.tabs[e].accordionAnchor.on(t.options.event,{tab:t.tabs[e]},a)},e.prototype._getStartTab=function(){var t,a=this._getTabRefBySelector(s.location.hash);return t=a>=0&&!this._getTab(a).disabled?this._getTab(a):this.options.active>0&&!this._getTab(this.options.active).disabled?this._getTab(this.options.active):this._getTab(0)},e.prototype._setState=function(s){var e,o=t("ul",this.$element),i=this.state,n="string"==typeof this.options.startCollapsed;o.is(":visible")?this.state="tabs":this.state="accordion",this.state!==i&&(this.$element.trigger("tabs-activate-state",{oldState:i,newState:this.state}),i&&n&&this.options.startCollapsed!==this.state&&this._getCurrentTab()===a&&(e=this._getStartTab(s),this._openTab(s,e)))},e.prototype._openTab=function(s,a,e,o){var i,n=this;e&&this._closeTab(s,this._getCurrentTab()),o&&this.rotateInterval>0&&this.stopRotation(),a.active=!0,a.tab.removeClass(n.options.classes.stateDefault).addClass(n.options.classes.stateActive),a.accordionTab.removeClass(n.options.classes.stateDefault).addClass(n.options.classes.stateActive),n._doTransition(a.panel,n.options.animation,"open",function(){a.panel.removeClass(n.options.classes.stateDefault).addClass(n.options.classes.stateActive),"accordion"!==n.getState()||!n.options.scrollToAccordion||n._isInView(a.accordionTab)&&"default"===n.options.animation||(i=a.accordionTab.offset().top-n.options.scrollToAccordionOffset,"default"!==n.options.animation&&n.options.duration>0?t("html, body").animate({scrollTop:i},n.options.duration):t("html, body").scrollTop(i))}),this.$element.trigger("tabs-activate",a)},e.prototype._closeTab=function(t,s){var e,o=this,i="string"==typeof o.options.animationQueue;s!==a&&(e=i&&o.getState()===o.options.animationQueue?!0:i?!1:o.options.animationQueue,s.active=!1,s.tab.removeClass(o.options.classes.stateActive).addClass(o.options.classes.stateDefault),o._doTransition(s.panel,o.options.animation,"close",function(){s.accordionTab.removeClass(o.options.classes.stateActive).addClass(o.options.classes.stateDefault),s.panel.removeClass(o.options.classes.stateActive).addClass(o.options.classes.stateDefault)},!e),this.$element.trigger("tabs-deactivate",s))},e.prototype._doTransition=function(t,s,a,e,o){var i,n=this;switch(s){case"slide":i="open"===a?"slideDown":"slideUp";break;case"fade":i="open"===a?"fadeIn":"fadeOut";break;default:i="open"===a?"show":"hide",n.options.duration=0}this.$queue.queue("responsive-tabs",function(o){t[i]({duration:n.options.duration,complete:function(){e.call(t,s,a),o()}})}),("open"===a||o)&&this.$queue.dequeue("responsive-tabs")},e.prototype._isCollapisble=function(){return"boolean"==typeof this.options.collapsible&&this.options.collapsible||"string"==typeof this.options.collapsible&&this.options.collapsible===this.getState()},e.prototype._getTab=function(t){return this.tabs[t]},e.prototype._getTabRefBySelector=function(t){for(var s=0;s<this.tabs.length;s++)if(this.tabs[s].selector===t)return s;return-1},e.prototype._getCurrentTab=function(){return this._getTab(this._getCurrentTabRef())},e.prototype._getNextTabRef=function(t){var s=t||this._getCurrentTabRef(),a=s===this.tabs.length-1?0:s+1;return this._getTab(a).disabled?this._getNextTabRef(a):a},e.prototype._getPreviousTabRef=function(){return 0===this._getCurrentTabRef()?this.tabs.length-1:this._getCurrentTabRef()-1},e.prototype._getCurrentTabRef=function(){for(var t=0;t<this.tabs.length;t++)if(this.tabs[t].active)return t;return-1},e.prototype._isInView=function(a){var e=t(s).scrollTop(),o=e+t(s).height(),i=a.offset().top,n=i+a.height();return o>=n&&i>=e},e.prototype.activate=function(t,s){var a=jQuery.Event("tabs-activate"),e=this._getTab(t);e.disabled||this._openTab(a,e,!0,s||!0)},e.prototype.deactivate=function(t){var s=jQuery.Event("tabs-dectivate"),a=this._getTab(t);a.disabled||this._closeTab(s,a)},e.prototype.enable=function(t){var s=this._getTab(t);s&&(s.disabled=!1,s.tab.addClass(this.options.classes.stateDefault).removeClass(this.options.classes.stateDisabled),s.accordionTab.addClass(this.options.classes.stateDefault).removeClass(this.options.classes.stateDisabled))},e.prototype.disable=function(t){var s=this._getTab(t);s&&(s.disabled=!0,s.tab.removeClass(this.options.classes.stateDefault).addClass(this.options.classes.stateDisabled),s.accordionTab.removeClass(this.options.classes.stateDefault).addClass(this.options.classes.stateDisabled))},e.prototype.getState=function(){return this.state},e.prototype.startRotation=function(s){var a=this;if(!(this.tabs.length>this.options.disabled.length))throw new Error("Rotation is not possible if all tabs are disabled");this.rotateInterval=setInterval(function(){var t=jQuery.Event("rotate");a._openTab(t,a._getTab(a._getNextTabRef()),!0)},s||(t.isNumeric(a.options.rotate)?a.options.rotate:4e3))},e.prototype.stopRotation=function(){s.clearInterval(this.rotateInterval),this.rotateInterval=0},e.prototype.option=function(t,s){return s&&(this.options[t]=s),this.options[t]},t.fn.responsiveTabs=function(s){var o=arguments;return s===a||"object"==typeof s?this.each(function(){t.data(this,"responsivetabs")||t.data(this,"responsivetabs",new e(this,s))}):"string"==typeof s&&"_"!==s[0]&&"init"!==s?this.each(function(){var a=t.data(this,"responsivetabs");a instanceof e&&"function"==typeof a[s]&&a[s].apply(a,Array.prototype.slice.call(o,1)),"destroy"===s&&t.data(this,"responsivetabs",null)}):void 0}}(jQuery,window);

$(document).ready(function(){
  $('.text-top-menu send-me a').on('click', function(e){
    e.preventDefault();
  });
    
  $('.top-menu-ul li').hover(function () {
     clearTimeout($.data(this,'timer'));
     $('ul',this).stop(true,true).slideDown(200);
  }, function () {
    $.data(this,'timer', setTimeout($.proxy(function() {
      $('ul',this).stop(true,true).slideUp(500);
    }, this), 100));
  });
  
	var $tabs = $('#product_tabs');
	
	if ($tabs.length){
	    $tabs.responsiveTabs({
	        rotate: false,
	        startCollapsed: 'accordion',
	        collapsible: 'accordion',
	        animation: 'slide',
	        setHash: true,
			scrollToAccordion: true,
			scrollToAccordionOffset: 0
	    });
	}
});

/*$(function(){
  var cursorPosition, timeOut, lastHovered;
  
  $(document).on('mousemove', function(e) {
    cursorPosition = e;
  });
  
  $(".general-menu-item").find('>li').hover(
    function() {
      if(lastHovered) {
        $(".general-menu-item").find('ul').removeClass('showed');
        $(this).find('>ul').addClass('showed');
      }else{
        clearTimeout(timeOut);
        $(this).find('>ul').addClass('showed');
      } 
    },
    function() {
      var item = $(this);
      lastHovered = item.closest(".general-menu-item li").length;
      timeOut = setTimeout(function() {
        item.find('>ul').removeClass('showed');
      }, 200)
    }
  )  
});*/

$(document).ready(function($) {
    $nav = $('.left-part');
    $nav.css('width', $nav.outerWidth());
    $window = $(window);
    $h = $nav.offset().top;
    $window.scroll(function() {
        if ($window.scrollTop() > $h) {
            $nav.addClass('fixed');
        } else {
            $nav.removeClass('fixed');
        }
    });
});

(function($){       
    jQuery.fn.lightTabs = function(options){
        
        var createTabs = function(){
            tabs = this;
            i = 0;
            
            showPage = function(i){
                $(tabs).children("div").children("div").css({"opacity":"0", "height":"0px", "position":"relative", "overflow":"hidden", "top":"-10px"});
                $(tabs).children("div").children("div").children("div").css("height", "0px");
                $(tabs).children("div").children("div").children("div").eq(i).css({"opacity":"1", "height":"auto", "position":"relative"});
                
                $(tabs).children("div").children("div").eq(i).css({"opacity":"1", "height":"auto"});
                
                
                
                
                $(tabs).children("ul").children("li").removeClass("active");
                $(tabs).children("ul").children("li").eq(i).addClass("active");
            }
            
            showPage(0);        
            
            $(tabs).children("ul").children("li").each(function(index, element){
                $(element).attr("data-page", i);
                i++;                        
            });
            
            $(tabs).children("ul").children("li").click(function(){
                showPage(parseInt($(this).attr("data-page")));
            });       
        };    
        return this.each(createTabs);
    };  
})(jQuery);
$(document).ready(function(){
    $(".tabs-social").lightTabs();
});


$(document).ready(function(){
$(".filter2, .view-filter").click(function(){
  $(".bigfilter").slideToggle();
  $(this).toggleClass('filteractiv');
});
});

$(document).ready(function(){
$(".sort2").click(function(){
  $(".sort").slideToggle();
  $(this).toggleClass('filteractiv');
});
});


$(function(){
$(".form-autorization-warp2").click(function(){
	$(this).removeClass('displayblock');
	$(".select-all-color-warp").removeClass('displayblock')
});
});
$(function(){
$(".select-color-a").click(function(){
  $(".form-autorization-warp2").addClass('displayblock');
  $(".select-all-color-warp").addClass('displayblock')
});
});

$(function(){
$(".form-close-button").click(function(){
	$(".form-autorization-warp2").removeClass('displayblock');
	$(".select-all-color-warp").removeClass('displayblock')
});
});




$(function(){
$(".faq-page-item").click(function(){
  $(this).toggleClass('faq-page-item2');
  
});
});
$(function(){
	$(".faq-title-item-form").click(function(){
	  $(this).toggleClass('vak-page-item2');
	  
	});
});


$(function(){
$(".btn-variant1").click(function(){
  $(".buy-one-click-form-wr").css( "display", "flex" );
});
});
$(function(){
$("#closeform").click(function(){
  $(".buy-one-click-form-wr").css( "display", "none" );
});
});


$(function(){
	$(".form-img-warp-button").click(function(){
	  $(".form-form").css( "display", "flex" );
	});
	$(".formzak").click(function(){
	  $(".form-form").css( "display", "none" );
	});
});


$(function(){
        $("a.main-headr-banner-button[href^='#']").click(function(){
                var _href = $(this).attr("href");
                $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
                return false;
        });
});


$(function(){
        $("a.scroll").click(function(){
            var top = $(".shop2-product-tabs").offset().top;
            
                $("html, body").animate({scrollTop: top}, 300);
                $('a.[href="#shop2-tabs-4"]').click();
                return false;
        });
});

$(function(){
        $("a.first-lvl, a.second-lvl, a.three-lvl[href^='#']").click(function(){
                var _href = $(this).attr("href");
                $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
                return false;
        });
});

$(document).ready(function(){
	var myUserId = $('.gr-instafeed__inner').data('userid'),
	    myAccessToken = $('.gr-instafeed__inner').data('accesstoken');
	if(myUserId && myAccessToken){
		//Создаем ленту		
		var feed = new Instafeed({
			get: 'user', //режим, сейчас доступен только user
			userId: myUserId, //Передаем Id
			accessToken: myAccessToken, //Передаем Token
			limit:5,
			template: '<div class="instawarp"><a href="{{link}}" target="_blank"><img src="{{image}}" /><div class="likeandcoment"><span class="liked">{{likes}}</span><span class="cometnscounts">{{comments}}</span></div><div class="blog-title-item-anonce">{{caption}}</div></a></div>', //Плагин поддерживает базовую шаблонизацию выдаваемого кода, подробности на сайте плагина
			resolution: 'standard_resolution' //306x306, варианты - thumbnail(150x150) и standard_resolution(612x612)
		});
		//Инициализируем
		feed.run();
	}
});

$(document).ready(function(){
$('.warp-block-promo').slick({
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 4,
  arrows: false,
  responsive: [
   	{
      breakpoint: 1441,
      settings: {
	      slidesToShow: 4,
	      dots: false,
	      arrows: true,
	      slidesToScroll: 1,
      }
    },
   	{
      breakpoint: 1365,
      settings: {
	      slidesToShow: 3,
	      dots: false,
	      arrows: true,
	      slidesToScroll: 1,
      }
    },
 	{
      breakpoint: 1152,
      settings: {
	      slidesToShow: 3,
	      slidesToScroll: 1,
	      dots: false,
	      arrows: true
      }
    },
   {
      breakpoint: 1025,
      settings: {
	      slidesToShow: 3,
  	      dots: false,
	      arrows: true,
	      slidesToScroll: 1,
      }
    },
   {
      breakpoint: 901,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 801,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 701,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 601,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 481,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
  		autoplaySpeed: 3000
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
  $('.hot-slider').slick({
  infinite: false,
  lazyLoad: 'ondemand',
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000
});

$('.title-blog-warp2').slick({
  infinite: false,
  lazyLoad: 'ondemand',
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: false,
  speed: 300
});

$('.slider-header').slick({
	infinite: true,
	dots: true,
	arrows: true,
	lazyLoad: 'ondemand',
	slidesToShow: 1,
	slidesToScroll: 1,
	autoplay: true,
    autoplaySpeed: 5000,
    speed: 300,
    responsive: [
	{
      breakpoint: 501,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false
      }
    }
	]
    
});

$('.item-warp-blog').slick({
	infinite: false,
	dots: true,
	arrows: true,
	slidesToShow: 5,
	slidesToScroll: 1,
	autoplay: false,
    speed: 300,
    responsive: [
    {
      breakpoint: 3000,
      settings: "unslick"
    },
    {
      breakpoint: 1441,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: true,
        arrows: false
      }
    },
    {
      breakpoint: 1367,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        arrows: false
      }
    },
    {
      breakpoint: 1281,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        arrows: false
      }
    },
    {
      breakpoint: 1152,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        arrows: false
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        arrows: false
      }
    },
    {
      breakpoint: 1001,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: true,
        arrows: false
      }
    },
    {
      breakpoint: 801,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        arrows: false
      }
    },
    {
      breakpoint: 701,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: true,
        arrows: false
      }
    },
    {
      breakpoint: 501,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: false
      }
    }
  ]
    
});

$('.slider-hot-prod-warp .catalog-warp').slick({
  infinite: false,
  lazyLoad: 'ondemand',
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 3000,
  speed: 300,
  responsive: [
  	  	{
      breakpoint: 1441,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: false,
        arrows: true,
        autoplaySpeed: 3000,
		speed: 300,
		autoplay: false,
        dots: false
      }
    },
  	{
      breakpoint: 1360,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: false,
        arrows: true,
        autoplaySpeed: 3000,
		speed: 300,
		autoplay: false,
        dots: false
      }
    },
	{
      breakpoint: 1152,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        arrows: true,
        autoplaySpeed: 3000,
		speed: 300,
		autoplay: false,
        dots: false
      }
    },
  	{
      breakpoint: 1025,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        arrows: true,
        autoplaySpeed: 3000,
		speed: 300,
		autoplay: false,
        dots: false
      }
    },
    {
      breakpoint: 901,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
        autoplaySpeed: 3000,
		speed: 300,
		autoplay: false,
        dots: true
      }
    },
    {
      breakpoint: 801,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
        autoplaySpeed: 3000,
		speed: 300,
		autoplay: false,
        dots: true
      }
    },

    {
      breakpoint: 701,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
        autoplaySpeed: 3000,
		speed: 300,
		autoplay: false,
        dots: true
      }
    },
    {
      breakpoint: 601,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: false,
        arrows: false,
        autoplay: false,
        dots: true
      }
    }
    

  ]
});

$('.slider-hot-prod-warp .catalog-warp').on('afterChange', function(event, slick, currentSlide, nextSlide){
    $(this).find('.lf-lazy-img').lazyload();
});

$('.product-image').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  infinite: false,
  asNavFor: '.product-thumbnails' //если удалить, свайпы по главной картинке не будут перематвыать нижний слайдер
});
$('.product-thumbnails').slick({
  infinite: false,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: false,
  infinite: false,
  focusOnSelect: true,
  vertical: false,
  asNavFor: '.product-image',
  speed: 300,
    responsive: [
  	{
      breakpoint: 1281,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        vertical: false,
      }
    },
    {
      breakpoint: 1153,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true
      }
    },
    {
      breakpoint: 801,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true
      }
    },
        {
      breakpoint: 701,
      settings: {
        slidesToShow: 3.5,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true
      }
    },
        {
      breakpoint: 501,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        vertical: false,
        verticalSwiping: false
      }
    }
	]
});

});

$(document).ready(function () {
 
	$('.product-image').lightGallery({
		thumbnail: false,
	    download: true,
	    loop: false,
	    counter: false,
	   getCaptionFromTitleOrAlt: false,
		selector: '.product-image a'
	});
});



/*$(function(){
	$(".burger").click(function(){
      $(this).toggleClass('xxx');
	  $('.left-part').toggleClass('left0');
	  $('.backmenu').toggleClass('displayblock');
	});
});

$(function(){
	$(".backmenu").click(function(){
      $('.burger').removeClass('xxx');
	  $('.left-part').removeClass('left0');
	  $(this).toggleClass('displayblock');
	});
});*/









$(function(){
	$(".contactmobil").click(function(){
      $(".contactmobil-warp").css( "display", "block" );
      $(".contactmobil-block").slideToggle(200);
	  
	});
});

$(function(){
	$(".exit").click(function(){
      $(".contactmobil-warp").css( "display", "none" );
      $(".contactmobil-block").slideToggle(200);
	  
	});
});
$(function(){
	$(".contactmobil-warp").click(function(){
      $(this).css( "display", "none" );
      $(".contactmobil-block").slideToggle(200);
	  
	});
});

/*$(function(){
	$(".add-fav").click(function(){
  	  $(this).toggleClass('add-fav-activ');
	});
});*/


$(function(){
	  var count = $(".slidermain").eq(0).find(".slick-dots li");
	  var size = count.size();
	  var result = 100/size;
	  var text = (result + "%")
	  count.css( "width", text );
	  
});

$(function(){
  	  var count1 = $(".slidermain").eq(1).find(".slick-dots li");
  	  var size1 = count1.size();
  	  var result1 = 100/size1;
  	  var text1 = (result1 + "%")
	  count1.css( "width", text1 );
	  
	  var inputRangeMax = parseInt($('.bigfilter .form-filter input.small.hight').data('max'));
	  
	  $('.input_range_slider').each(function(index, el) {

        var $this = $(this),
            $lower = $this.closest('.bigfilter').find('.low'),
            $upper = $this.closest('.bigfilter').find('.hight'),
            arr = [0,inputRangeMax];
            
        /*if (productsPrices.length) {
        	arr = [Math.min.apply(null, productsPrices), Math.max.apply(null, productsPrices)];
        }*/
            
        
            
            
        var slider = $this.noUiSlider({
            start: [$lower.attr('value'), $upper.attr('value')||arr[1]],
            step: 20000,
            connect: true,
            behaviour: 'drag-tap',
            format: wNumb({
                decimals: 0
            }),
            range: {
                'min': [ arr[0] ],
                'max': [ arr[1] ]
            }
        });

        slider.Link('lower').to($lower);
        slider.Link('upper').to($upper);
    });
    
    var searchTimer;
    
    $('form.place-serach input.search-text').on('keyup', function() {
    
    	var $this = $(this);
    		
    	clearTimeout(searchTimer);
	    searchTimer = setTimeout(function () {
	        var term = $.trim($this.val()).toLowerCase(),
	        	url  = '/my/s3/xapi/public/?method=shop2/getProductsBySearchMatches&param[s][search_text]='+term+'&param[template]=db:shop2.search-smart-list-product.tpl&img_width=60&img_height=60&course='+flKurs;
	        if (term != '' && term) {
	        	$.get(url + term, function(data) {
	        		if (data.result && data.result.found > 0) {
	        			$('#search-results').html(data.result.html).show();
	        		}
	        	})
	        }
	    }, 400);
    });
    
    $(document).on('click', '.lf-compare-btn', function() {
    	var $this  = $(this),
    		active = $this.hasClass('compare-active') || false,
    		action = active ? 'del' : 'add';
    		
    	shop2.compare.action(action, $this.data('kind'), function(res, status) {
          if (status == 'success') {
          	$('.sravnite').html(res.data);
          	if (res.count) {
          		shop2.msg('Перейти на страницу <a class="link-reset custom-underlined-link" href="/shop/compare" target="_blank">сравнения</a>', $('.lf-compare-btn'));
          	}
          }
        });
    });
    $(document).find('.lf-lazy-img, .lazyImg').each(function () {
        $(this).lazyload({
            effect : "fadeIn",
            skip_invisible: false
        });
    });
});
shop2.filter.sort = function(name, elem) {
    var re = new RegExp(this.escape('s[sort_by]') + '=([^&]*)'),
        params = this.str.match(re),
        desc = name + ' desc',
        asc = name + ' asc',
        isDesc = (elem.is('.sort-param-desc'));


    params = (params && params.length > 1) ? params[1] : '';
    
    params = (isDesc) ? desc : asc;

    this.remove('s[sort_by]');
    this.add('s[sort_by]', params);
    return this;
};

shop2.queue.sort = function() {
    var wrap = $('.sorting');

    wrap.find('.sort-param').on('click', function(e) {
        var $this = $(this),
            name = $this.data('name');

        e.preventDefault();
        shop2.filter.sort(name, $this);
        shop2.filter.go();
    });

    wrap.find('.sort-reset').on('click', function(e) {
        e.preventDefault();
        shop2.filter.remove('s[sort_by]');
        shop2.filter.go();
    });
};

shop2.queue.filter = function() {

	var wrap = $('.shop-filter'),
		result = $('.result');

	shop2.filter.init();

	shop2.on('afterGetSearchMatches', function (d, status) {

		if (d.data.total_found === 0) {

			result.addClass('no-result');
		} else {
			result.removeClass('no-result');
		}

		$('#filter-result').html('(' + d.data.total_found + ')');

		result.removeClass('hide');
	});

	wrap.find('.param-val').on('click', function(e) {
		var $this = $(this),
			name = $this.data('name'),
			value = $this.data('value');

		e.preventDefault();

		$this.toggleClass('active-val');
		shop2.filter.toggle(name, value);
		shop2.filter.count();
	});

	wrap.find('select').on('change', function() {
		var $this = $(this),
			name = this.name,
			value = $this.val();

		shop2.filter.add(name, value);
		shop2.filter.count();
	});

	wrap.find('input:text').keyup(function() {
		var $this = $(this),
			name = $this.attr('name');

		$.s3throttle('filter: ' + name, function() {
			var value = $this.val();

			shop2.filter.add(name, value);
			shop2.filter.count();
		}, 500);
	});
	wrap.find('.input_range_slider').on('slide', function(e){
		var $this = $(this),
			$parent = $this.closest('.range_slider_wrapper'),
			$input = $parent.find('input:text');
			
		$.each($input, function(i, elem) {
			var name = $(elem).attr('name');

			$.s3throttle('filter: ' + name, function() {
				var value = $(elem).val();
		
				shop2.filter.add(name, value);
				shop2.filter.count();
			}, 500);
		});
	});

	wrap.find('.go-to-search').on('click', function(e) {
		e.preventDefault();
		shop2.filter.go();
	});
};

shop2.msg = function(text, obj) {
    var selector = '#shop2-msg',
      msg = $(selector),
      offset = obj.offset(),
      width = obj.outerWidth(true),
      height = obj.outerHeight(true);

    if (!msg.get(0)) {
      msg = $('<div id="shop2-msg">');
      $(document.body).append(msg);
      msg = $(selector);
    }

    msg.html(text).show();

    var msgWidth = msg.outerWidth();
    var left = offset.left + width;
    var top = offset.top + height;

    if (left + msgWidth > $(window).width()) {
      left = offset.left - msgWidth;
    }

    msg.css({
      left: left,
      top: top
    });

    $.s3throttle('msg', function() {
      msg.hide();
    }, shop2.options.msgTime);

};

shop2.favoriteController = {
	items: [],
	_init: function() {
		var self = this,
			favorites = self.getCookie('favorite_json');
			self.items = favorites ? JSON.parse(favorites) : [];
			
		self.initElements(self.items);
		self.updateCounter(self.items.length)
			
	},
	getCookie: function(name) {
        var matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));
        return matches ? decodeURIComponent(matches[1]) : undefined;
    },
    initElements: function(objects) {
    	var self = this,
    		products = document.querySelectorAll('.lf-favorite-btn');
    	
    	objects.forEach(function(o, k) {
    		$(products).each(function() {
    			if($(this).data('kind-id') === parseInt(o.kind_id)) {
    				$(this).addClass('favorite-active').attr('data-action', 'del');
    			}
    		})
    	})
    },
    updateCounter: function(counter) {
    	var self = this,
    		$counter = $('.header-favorite-btn .counter');
    		
		$counter.text(counter);
    },
	toggle: function(kind, name, url) {
		var self    = this,
			product = kind.closest('form'),
			action  = $(kind).data('action'),
			kind_id = product.elements.kind_id.value,
			data    = {};
			
		switch(action) {
			case 'add':
				data = {kind_id: kind_id, name : name, url  : url};
				self.items.push(data);
				$(kind).data('action', 'del');
				break;
			case 'del':
				var newArr = self.items.filter((elem) => {
					return elem.kind_id !== kind_id;
				});
				self.items = newArr;
				$(kind).data('action', 'add');
				break;
			default:
				break;
		}
		$(kind).toggleClass('favorite-active');
		createCookie('favorite_json', JSON.stringify(self.items));
		self.updateCounter(self.items.length);
	},
}


$(function() {
	function getBrowserInfo(){var tem,ua=navigator.userAgent,M=ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i)||[];return/trident/i.test(M[1])?"IE "+((tem=/\brv[ :]+(\d+)/g.exec(ua)||[])[1]||""):"Chrome"===M[1]&&null!=(tem=ua.match(/\b(OPR|Edge)\/(\d+)/))?tem.slice(1).join(" ").replace("OPR","Opera"):(M=M[2]?[M[1],M[2]]:[navigator.appName,navigator.appVersion,"-?"],null!=(tem=ua.match(/version\/(\d+)/i))&&M.splice(1,1,tem[1]),M.join(" "))};
	
	shop2.favoriteController._init();
	
	$(document).on('click', '.header-favorite-btn', function(e) {
		e.preventDefault();
		if (!shop2.favoriteController.items.length) return;
		var $div = $(this).closest('div');
		if ($div.hasClass('opened')) {
			$div.removeClass('opened');
			$div.find('.favorites-popup-block').empty().remove();
		} else {
			$div.append('<div class="favorites-popup-block" />');
			shop2.favoriteController.items.forEach(function(item) {
				$div.find('.favorites-popup-block').append(`<div key="${item.kind_id}" class="favorites-list-item"><a href="${item.url}">${item.name}</a></div>`);
			});
			$div.addClass('opened');
		}
	});
	
	var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || /[\?&]panel_fake_mobile=1(&|$)/.test(document.location.search),
		isApple = /iPod|iPad|iPhone/i.test(navigator.userAgent),
		clickStart = (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) ? 'touchstart' : 'click.respons',
		$userBlock = $('.user-block-btn'),
		$userBlockBtn = $userBlock.find('span.user-link'),
		$sideNav      = $('.side-nav'),
		$sectionNav   = $(".nav-side__section");
		
	$sectionNav.each(function() {
        $(this).children(".nav-side__submenu").length && $(this).addClass("has-submenu");
    })
		
	$(document).on(clickStart, function(event) {
		if (!$(event.target).closest('.user-block-btn').length) {
			$userBlock.removeClass('opened');
		}
	});
	$(document).on(clickStart, function(e){
	    if (!$(e.target).closest('.block-search-results').length) {
	        $('.block-search-results').hide();
	    }
	});
	$(document).on(clickStart, function(e){
	    if (!$(e.target).closest('.favorit').length) {
	       $('.favorit').removeClass('opened').find('.favorites-popup-block').empty().remove();
	    }
	});
	$userBlockBtn.on(clickStart, function() {
		$userBlock.toggleClass('opened');	
	});
	
	
	// слайдеры на странице готовых работ
	$('.work-rooms-slider').slick({
	  	dots: false,
	  	infinite: true,
	  	speed: 300,
	  	slidesToShow: 1,
	  	adaptiveHeight: true
	});
	$(document).on(clickStart, '.burger', function(event) {
		if ($(this).hasClass("xxx")) {
			closeSideMenu();
		} else {
			$(this).addClass("xxx");
			$sideNav.addClass('left0');
			$("body").addClass("no-scroll sidemenu-opened");
			$(".firs-page").prepend('<div class="backmenu" />');
		}
			
	});
	$(document).on('click', '.submenu-title', function(event) {
        event.stopPropagation();
        $sideNav.removeClass("section-opened");
        $sectionNav.removeClass("open");
        return false;
    });
    $sectionNav.on('click', function(e) {
    	e.stopPropagation();
    	if ($(this).hasClass("open")) {
			$sideNav.removeClass("section-opened")
    		$(this).removeClass("open");
    	} else {
    		openSubmenu($(this));
    	}
    });
    
	
	function closeSideMenu() {
		$(".burger").removeClass("xxx");
		$("body").removeClass("no-scroll sidemenu-opened");
		$(".firs-page").children(".backmenu").detach();
		$sideNav.removeClass('left0');
	};
	function openSubmenu(ctx) {
		if ($(ctx).hasClass("has-submenu")) {
			$sideNav.addClass("section-opened")
			$sectionNav.removeClass("open");
			$(ctx).addClass("open");
			$sideNav.scrollTop(0);
		}
    };
});




$(document).ready(function() {
	var element = $('.categoriya');
	function math_height() {
		element.height(element.width());
	}
	math_height();
	$(window).on('resize',function () {
		math_height();
	});
});



$(document).ready(function(){
	var url = window.location.href;
	if(url.indexOf('?s[tovar_v_nalicii][1]=1') != -1)
	  $(".onlyhand").toggleClass('checkactiv');
});
$(document).ready(function(){
	var url2 = window.location.href;
	if(url2.indexOf('?s[eto_mebel_na_zakaz_][1]=1') != -1)
	  $(".onlyforme").toggleClass('checkactiv');
});



/*712 start*/
$(function(){
	var basePrice = parseInt($(".bottom-part .price span").eq(0).text().replace(/\s/g, ''));
	var calc = function(price){
		$(".four-block .parament:not(.p1) .option.active").each(function(){
			var value = Number($(this).data("value"));
			price += value;
		});
		price = price * parseInt($(".parament.p1 .option.active").text());
		price = parseInt(price);
		price = price.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ');
		$(".bottom-part .price span").eq(0).html(price);
	}
	$(".parament .option").on("click", function(){
		$(this).parent().find(".option").removeClass("active");
		$(this).addClass("active");
		calc(basePrice);
	});
});
/*712 end*/