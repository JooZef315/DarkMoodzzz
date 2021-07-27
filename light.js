var elements = ["img", "body", "div","textarea" ,"span" ,"td" , "aside", "ul", "ol", "table" ,"input" ,"nav" ,"main", "header", "footer" , "section" , "a", "li", "form", "article", "select", "hr"]

elements.forEach(element => {  
    [...document.getElementsByTagName(element)].forEach(e => {
      if (element == "img") {
        e.style.zIndex = 'initial'
      } 
      else {
        e.style.backgroundColor = "initial";
        e.style.color  = "initial";
      }
    });
});
