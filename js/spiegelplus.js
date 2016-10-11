//tests
//working draft august 30 2016


var cleanScreen = function cleanScreen(){
  //helper
  var $anchor = $('.obfuscated-content');
  var $blindLayer = $anchor.parent();
  var $supressPurchase = $blindLayer.next();
  var className = $blindLayer.attr('class');
  console.log(className);
  //hide things
  $supressPurchase.css('left', '1000%');
  $blindLayer.removeClass(className);
  //$blindLayer.toggleClass('anyClassNameButNotTheOldOne');
};

//the actual foo
function replaceTextContent(elem){
  $(elem).contents()
    .filter(function (){
                return this.nodeType === 3;
    })
    .replaceWith(function (){
       var obfuscatedText = this.data;
       var deobfuscatedText = "";
       for (var i = 0; i < obfuscatedText.length; i++){
         var charValue = obfuscatedText.charCodeAt(i);
         if (charValue == 177)
         {
             deobfuscatedText += '&';
         }
         else if (charValue == 178)
         {
             deobfuscatedText += '!';
         }
         else if (charValue == 180)
         {
             deobfuscatedText += ';';
         }
         else if (charValue == 181)
         {
             deobfuscatedText += '=';
         }
         else if (charValue == 32)
         {
             deobfuscatedText += ' ';
         }
         else if (charValue > 33)
         {
             deobfuscatedText += String.fromCharCode(charValue - 1);
         }
       }
    return deobfuscatedText;
   })
  .end()
  .filter(function (){
        return this.nodeType === 1
                && !$(this).hasClass("text-link-int")
                && !$(this).hasClass("text-link-ext")
                && !$(this).hasClass("lp-text-link-int")
                && !$(this).hasClass("lp-text-link-ext")
                && !$(this).hasClass("spCelink");
    })
    .each(function (){
        replaceTextContent(this);
    });
}


var decode = function deobfuscateText(){
  $('p.obfuscated').each(function (index, elem){
       replaceTextContent(elem);
       $(elem).removeClass("obfuscated").addClass("deobfuscated");
   });
  $('div.obfuscated-content').each(function (index, elem){
       $(elem).removeClass("obfuscated-content").addClass("deobfuscated-content");
   });
}

var credit = function credit(){
  $('body').append('<div style="position:fixed;top:0;right:0;background:yellow;line-height:20px;font-size:18px;">Scientia potentia est. by paulq</div>');
} 


//fight the async with poor workaround // one should pipe this
setTimeout(function (){
  cleanScreen();
  decode();
  credit();
},2500)
