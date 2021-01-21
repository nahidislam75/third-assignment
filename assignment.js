function kilometerToMeter(kiloNum)
{
    if(kiloNum<=0)
    {
        return "0 or negetive can't be applied"; 
    }
    else
    {
        var inMeter = kiloNum*1000;
        return inMeter;
    }
}

function budgetCalculator(watchNum,phoneNum,laptopNum)
{
    if(watchNum<0 || phoneNum<0 || laptopNum<0)
    {
        return "system crushed can't take negetive value";
    }
    else
    {
        var watchTotal =watchNum*50;
        var phoneTotal =phoneNum*100;
        var laptopTotal =laptopNum*500;
        var total = watchTotal+phoneTotal+laptopTotal;
        return total; 
    }
}

function hotelCost(daysNum)
{
    if(daysNum<=0)
    {
        return " if your input is 0 or negetive you didn't stay at hotel";
    }
    else
    {
        if(daysNum<=10)
        {
            var total = daysNum*100;
            return total;
        }
        else if(daysNum<=20)
        {
            var firstTotal = 10*100;
            var remaingDays =daysNum-10;
            var finalTotal =remaingDays*80;
            var total = firstTotal+finalTotal;
            return total;
        }
        else
        {
            var firstTotal = 10*100;
            var secondTotal =10*80;
            var lestDays =daysNum-20;
            var lestTotal =lestDays*50;
            var total = firstTotal+secondTotal+lestTotal;
            return total;

        }
    }
}

function megaFriend(names)
{
    var bigName="";
    for(var i = 0;i<names.length;i++)
    {
        var largeString = names[i];
        if(bigName.length<largeString.length)
        bigName=names[i];
    }
    return bigName;
}