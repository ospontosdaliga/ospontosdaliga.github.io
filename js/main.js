/* COOKIE MANAGEMENT */

function showUseOfCookiesWarning(currentLeague)
{
    $('body').after("<footer><div id='footer' class='background-image'><div id='footerBg' class='background-image-dark-" + currentLeague + "'></div>" +
            "<div class='centerPage'>" +
                "<div class='footerInfo'>Este website utiliza cookies. Ao continuar a navegação está a aceitar a sua utilização. Caso pretenda saber mais, consulte a nossa <a href='#' onclick='setPageTo(21)'>política de privacidade.</a></div>" +
                    "<div id='bAcceptCookies' class='hButton' style='float: right; margin: 5px;' onclick='userAcceptedCookies();'>Aceito o uso de Cookies</div>" +
            "</div></div></footer>");
}

function userAcceptedCookies()
{
    localStorage.useracceptedcookies = 1;
    $("#footer").remove();
}

/* UTILITY FUNCTIONS */

function SelectElement(elementId, valueToSelect)
{    
    var element = document.getElementById(elementId);
    element.value = valueToSelect;
}

function AddOptionsToDropDownMenu()
{
    $("#Menu").first().append("<div class='dropdown-content'>" +
        "<a href='#' onclick='setPageTo(21);'>Política de Privacidade</a>" +
      //        "<a href='#' onclick='setPageTo(22);'>Ajuda</a>" +
    "</div>");
}

/* PAGE MANAGEMENT */

var currentLeague = 1617;
var currentPage = 1;
var cookiesAccepted = 0;

// Runs ALWAYS after the page load
$( document ).ready(function() {
    trackLoadedPage();
    
    $("body").append("<div id='fb-root'></div>" +
                    "<script>(function(d, s, id) {" +
                    "var js, fjs = d.getElementsByTagName(s)[0];" +
                    " if (d.getElementById(id)) return;" +
                    " js = d.createElement(s); js.id = id;" +
                    "js.src = '//connect.facebook.net/pt_PT/sdk.js#xfbml=1&version=v2.7';" +
                    "fjs.parentNode.insertBefore(js, fjs);" +
                    "}(document, 'script', 'facebook-jssdk'));</script>");
    
    $("#fbMenu .dropdown-content").append("<div class='fb-like' data-href='https://www.facebook.com/ospontosdaliga/' data-layout='box_count' data-action='like' data-size='small' data-show-faces='true' data-share='true'></div>");
});

// Should run after the Page Load when called
function runAfterPageLoad()
{
    if(localStorage.useracceptedcookies != null)
    {
        cookiesAccepted = localStorage.useracceptedcookies;
    }
    
    if(cookiesAccepted == 0)
    {
        showUseOfCookiesWarning(currentLeague);
    }
    
    AddOptionsToDropDownMenu();
	

	
	$("frame:nth-child(2)").remove();
	
	
}

function setStartPage(pageId)
{
    if(sessionStorage.leagueSelected)
    {
        currentLeague = sessionStorage.leagueSelected;
    }
    else
    {
        sessionStorage.leagueSelected = Number(currentLeague);
    }
    
    currentPage = pageId;
}

function setLeague()
{
    var leagueId = document.getElementById("leagueSelect").value;
    
    if(leagueId != currentLeague)
    {
        sessionStorage.leagueSelected = Number(leagueId);
        
        loadPage(leagueId, currentPage);
    }
}

function setPageTo(pageId)
{
    if(pageId != currentPage)
    {
        loadPage(currentLeague, pageId);
    }
}

function loadPage(leagueId, pageId)
{
    var leaguePath = '';
    
    if(leagueId == 1516)
    {
        leaguePath = 'pontosdaliga//20152016//';
        leaguePath = '20152016/';
    }
    else if(leagueId == 1617)
    {
        leaguePath = 'pontosdaliga//20162017//';
        leaguePath = '20162017/';
    }
    
    if(pageId == 1)
    {
        pageName = 'noticias.html';
    }
    else if(pageId == 2)
    {
        pageName = 'jogadores.html';
    }
     else if(pageId == 3)
    {
        pageName = 'treinadores.html';
    }   
    else if(pageId == 4)
    {
        pageName = 'calendario.html';
    }
    else if(pageId == 5)
    {
        pageName = 'classificacao.html';
    }
    else if(pageId = 21)
    {
        leaguePath = '';
        pageName = 'politicadeprivacidade.html';
    }
    else if(pageId = 22)
    {
        leaguePath = '';
        pageName = 'politicadeprivacidade.html';
    }
    
    document.location.href = '../../../../../~razpowa//pontosdaliga//' + leaguePath + pageName; /* Produção */
    
    document.location.href = '../' + leaguePath + pageName; /* Qualidade */
}
