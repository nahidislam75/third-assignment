function kilometerToMeter(kiloNum)//first problem
{
    if(kiloNum<0)
    {
        return "Negative can't be applied"; 
    }
    else
    {
        var inMeter = kiloNum*1000;
        return inMeter;
    }
}


function budgetCalculator(watchNum,phoneNum,laptopNum)//second problem
{
    if(watchNum<0 || phoneNum<0 || laptopNum<0)
    {
        return "System crushed can't take negative value";
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


function hotelCost(daysNum)//third problem
{
    if(daysNum<0)
    {
        return " If your input is negative you didn't stay at hotel";
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


function megaFriend(names)//final problem
{
    if(names.length<=0 || typeof(names)==='number'||typeof(names)==='string')
    {
        return "This input will not give you no output,try to take input a string array";
    }
    else
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
}