  //<script language="javascript">
//

function SetCookie (name,value,expires,path,domain,secure) 
{
  document.cookie = name + "=" + escape (value) +
    ((expires) ? "; expires=" + expires.toGMTString() : "") +
    ((path) ? "; path=" + path : "") +
    ((domain) ? "; domain=" + domain : "") +
    ((secure) ? "; secure" : "");
}

function getCookieVal (offset)
{
	var str = document.cookie.indexOf(";", offset);
	if(str==-1) str = document.cookie.length;
	return unescape(document.cookie.substring(offset, str));
}

function GetCookie (name) 
{
  var arg = name + "=";
  var alen = arg.length;
  var clen = document.cookie.length;
  var i = 0;
  while (i < clen) {
    var j = i + alen;
    if (document.cookie.substring(i, j) == arg)
      return getCookieVal (j);
	i = document.cookie.indexOf(" ", i) + 1;
    if (i == 0) break; 
  }
  return null;
}

  function DisplayVisits() 
 {   
  // How many visits so far?
      var numVisits = GetCookie("numVisits");
      if (numVisits) numVisits = parseInt(numVisits) + 1;
      else numVisits = 1; // the value for the new cookie
 
  // Show the number of visits
      //if (numVisits==1) document.write("This is your first visit.");
      //else document.write("You have visited this page " + numVisits + " times.");
      if (numVisits==1) document.write('<p style="font-family: Arial; font-size: 12px; color: white;"');
      else document.write('<p style="font-family: Arial; font-size: 12px; color: white;">'+numVisits+'</p>');
 
  // Set the cookie to expire 365 days from now
      var today = new Date();
      today.setTime(today.getTime() + 365 /*days*/ * 24 /*hours*/ * 60 /*minutes*/ * 60 /*seconds*/ * 1000 /*milliseconds*/);
      SetCookie("numVisits", numVisits, today);
  }
  //</script>
