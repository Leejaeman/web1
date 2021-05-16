function next(){
    var radio = document.querySelectorAll('input[name=answer]');
    var selType = null;
    for(let i = 0; i < radio.length; ++i)
    {
        if(radio[i].checked === true)
        {
            selType = radio[i].value;
            break;
        }
    }

    if(selType === null)
    {
        alert('답을 선택하세요!');
        return;
    }

    var index = document.querySelector('input[name=answer]:checked').value;
    let ans = "1";
    if(index === ans)
        location.href="typef.html";
    else
        location.href="typed.html";
}