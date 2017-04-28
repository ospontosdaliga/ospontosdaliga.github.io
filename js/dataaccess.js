function testfun(path) {
    alert(path);
}

function getLabels() {
    return ["J3", "J4", "J5", "J6", "J7", "J8", "J9", "J10", "J11", "J12", "J13", "J14", "J15", "J16", "J17", "J18", "J19", "J20", "J21", "J22", "J23", "J24", "J25", "J26", "J27", "J28", "J29", "J30", "J31", "J32", "J33", "J34"];
}

function getLabels20162017() {
    return ["J3", "J4", "J5", "J6", "J7", "J8", "J9", "J10", "J11", "J12", "J13", "J14", "J15", "J16", "J17", "J18", "J19", "J20", "J21", "J22", "J23", "J24", "J25", "J26", "J27", "J28", "J29", "J30", "J31", "J32", "J33", "J34"];
}

function getEmptyData() {
    return [0, 0, 0, 0, 0
            , 0, 0, 0, 0, 0
            , 0, 0, 0, 0, 0
            , 0, 0, 0, 0, 0
            , 0, 0, 0, 0, 0
            , 0, 0, 0, 0, 0
            , 0, 0];
}

/* Execute external functions */

function executeFunctionByName(functionName, context /*, args */) {
  var args = [].slice.call(arguments).splice(2);
  var namespaces = functionName.split(".");
  var func = namespaces.pop();
  for(var i = 0; i < namespaces.length; i++) {
    context = context[namespaces[i]];
  }
  return context[func].apply(this, args);
}

function getPlayerInfo(id) {
    var functionName = "getPlayerInfoOf" + id;
    return executeFunctionByName(functionName, window);
}

function getPlayerPoints(id) {
    var functionName = "getPlayerPointsOf" + id;
    return executeFunctionByName(functionName, window);
}

function getOverallPlayerPoints(id) {
    var functionName = "getOverallPlayerPointsOf" + id;
    return executeFunctionByName(functionName, window);
}

function getAveragePlayerPoints(id) {
    var functionName = "getAveragePlayerPointsOf" + id;
    return executeFunctionByName(functionName, window);
}

function getBestPlayerOfBestTeam(round, number) {
    var functionName = "getBestPlayerOfBestTeamOfR" + round + "N" + number;
    return executeFunctionByName(functionName, window);
}

function getCoachInfo(id) {
    var functionName = "getCoachInfoOf" + id;
    return executeFunctionByName(functionName, window);
}

function getCoachPoints(id) {
    var functionName = "getCoachPointsOf" + id;
    return executeFunctionByName(functionName, window);
}

function getOverallCoachPoints(id) {
    var functionName = "getOverallCoachPointsOf" + id;
    return executeFunctionByName(functionName, window);
}

function getAverageCoachPoints(id) {
    var functionName = "getAverageCoachPointsOf" + id;
    return executeFunctionByName(functionName, window);
}

/* GET PAGE CONTENT */

function loadHttpInfo(theURL, functionName)
{
    if (window.XMLHttpRequest)
    {// code for IE7+, Firefox, Chrome, Opera, Safari, SeaMonkey
        xmlhttp=new XMLHttpRequest();
    }
    else
    {// code for IE6, IE5
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    
    var cookie = "__gfp_64b=kt57Ge5JufBuorIik79SxjQeWcwt.0Y2M_.s1mTKD5X.87; __gads=ID=284aedf4ba78db2b:T=1464715980:S=ALNI_MYt-6_Ml1AW4e2jLW8P0N7OazTWHQ; __utmx=62377519.E8i1bp5ZQ2GoBMH17Kof1A$104064745-14:0; __utmxx=62377519.E8i1bp5ZQ2GoBMH17Kof1A$104064745-14:1468229146:15552000; ASP.NET_SessionId=as2fq2khezj0fcxhumnenrcq; SwapSideClosed=1; team4914close=; _pk_ref.5.df42=%5B%22%22%2C%22%22%2C1481804628%2C%22https%3A%2F%2Fwww.google.pt%2F%22%5D; cof_site_user=904581eaa4c6493e856e727fe4056b6e933f9180e10441fca275e93d42129000; LigaRecordUser=Id=765094&MembershipId=1c2187d1-52f1-4fd2-89e9-608ea07a95ac&Name=Carlos+Paulo&Nickname=cfpaulo&Email=carlos.f.paulo@gmail.com&DateStart=2016-08-05&Address=%2c+2745-000+Monte+Abra%26%23227%3bo+-+Portugal&Phone=967163852&Photo=https://aminhaconta.xl.pt/img.aspx?img=2015-02/img_111x111$2015_02_06_13_20_39_8432.jpg&Token=904581eaa4c6493e856e727fe4056b6e933f9180e10441fca275e93d42129000; _ga=GA1.2.1255890631.1465308470; VisitReferrer=; _pk_id.5.df42=236584fa5cb6326c.1464715981.149.1481804981.1481804628.; __utma=103549853.1959995262.1465308413.1481729260.1481804628.76; __utmc=103549853; __utmz=103549853.1465308414.1.1.utmcsr=(direct)|utmccn=(direct)|utmcmd=(none)";
    
    xmlhttp.onreadystatechange=function()
    {
        if (xmlhttp.readyState==4 && xmlhttp.status==200)
        {
            executeFunctionByName(functionName, window, xmlhttp.responseText);
        }
    }
    xmlhttp.open("GET", theURL, true);
    
    xmlhttp.setRequestHeader('Cookie', cookie);
    
    xmlhttp.send();
}

function GetTeamId(content)
{
//    var strFind = "/gerir-equipas/jogar.aspx?id_team=";
//    var nStart = content.indexOf(strFind);
//    
//    content = content.substring(nStart, nStart+10);
    
//    var nEnd = content.indexOf("\"");
//    
//    content = content.substring(0, nEnd);
    
    alert(content);
}

