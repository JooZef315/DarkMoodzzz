var elements = ["video","picture","img", "body", "div","textarea" ,"span" ,"td" , "aside", "ul", "ol", "table" ,"input" ,"nav" ,"main", "header", "footer" , "section" , "a", "li", "form", "article", "select", "hr"]

bg_dark = '#232628;'
bg_code = '#000000;'
dark = '#FFFAF0;'

var ChangeStyle = (ele, bgColor, color) => { 
  var style = ele.getAttribute('style')
  if (style == null) {
    ele.setAttribute("style","background-color: " + bgColor + "color: " + color);  
  } else {
    ele.setAttribute("style",style + " background-color: " + bgColor + "color: " + color);    
  } 
};

elements.forEach(element => {  
    [...document.getElementsByTagName(element)].forEach(e => {
      if (element == "img" || element == "picture" || element == "video") {
        e.style.zIndex = "1";
      } 
      if (element == "code" || element == "pre") {
        ChangeStyle(e, bg_code, dark);     
      } 
      else if(element == "textarea" || element == "input" ){
        ChangeStyle(e, dark, bg_dark);      
      }    
      else {
        ChangeStyle(e, bg_dark, dark);  
      }
    });
});

