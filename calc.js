//defining a function for intrest amount

function getAmount()
{
    let p,t,r,si,tamt;
    p=pamt.value;
    t=time.value;
    r=roi.value;
    si=p*t*r/100;
    tamt=+p+si;
    //print results
    intAmt.innerHTML="Intrest Amount &#8377;"+si;
    totAmt.innerHTML="Total Amount &#8377;"+tamt;
}