function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5igTZkJExQS":
        Script1();
        break;
  }
}

function Script1()
{
  const url="https://script.google.com/macros/s/AKfycbyMs5ukyWP7rtVLABTpVWxMc5B_MgrSh6dPqVjliNcaP_gx6SIiLrJd91Em4d_vCHMl/exec"

var player=GetPlayer()

fetch(url,{
	method:"POST",
	mode: 'no-cors',
	cache:'no-cache',
	headers: {'Content-Type': 'application/json'},
	redirect:'follow',
	body: JSON.stringify({q1attempts:player.GetVar("q1attempts"),q1answeredcorrect:player.GetVar("q1answeredcorrect")})
	}
	)
}

