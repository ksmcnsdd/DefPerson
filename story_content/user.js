function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5mFRQ4fctmv":
        Script1();
        break;
      case "61NF9GiBbwo":
        Script2();
        break;
      case "5yrj19dkO2t":
        Script3();
        break;
      case "6nrXhwdPSSY":
        Script4();
        break;
      case "6bvHvfL6SIW":
        Script5();
        break;
      case "5Vf1Lg33kM7":
        Script6();
        break;
      case "5hYMfQFJH9Y":
        Script7();
        break;
      case "6AS4M9WwHXk":
        Script8();
        break;
      case "5meEMkGAcm6":
        Script9();
        break;
      case "6a55BQF1JQG":
        Script10();
        break;
      case "6mJvkorArOD":
        Script11();
        break;
      case "5s4A5cUilaR":
        Script12();
        break;
      case "5v70aIisZXM":
        Script13();
        break;
  }
}

function Script1()
{
  $("#tab-customlink").hide();
}

function Script2()
{
  var player = GetPlayer();
var email="nsdd_cne@ksmc.med.sa";
var subject=player.GetVar("Name");
var body_start="Dear Instructor,";
var mailto_link='mailto:'+email+'?subject='+subject+'&body='+body_start;
win=window.open(mailto_link,'emailWin');
}

function Script3()
{
  $("#tab-customlink").hide();
}

function Script4()
{
  $("#tab-customlink").hide();
}

function Script5()
{
  $("#tab-customlink").hide();
}

function Script6()
{
  $("#tab-customlink").hide();
}

function Script7()
{
  $("#tab-customlink").hide();
}

function Script8()
{
  $("#tab-customlink").hide();
}

function Script9()
{
  $("#tab-customlink").hide();
}

function Script10()
{
  $("#tab-customlink").hide();
}

function Script11()
{
  var currentTime = new Date()
var month = currentTime.getMonth() + 1
var day = currentTime.getDate()
var year = currentTime.getFullYear()
var dateString=month + "/" + day + "/" + year

var player = GetPlayer();
player.SetVar("SystemDate",dateString);
}

function Script12()
{
  $("#tab-customlink").show();
}

function Script13()
{
  window.print();
}

