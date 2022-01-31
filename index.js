let Codes= {
    "1" : "এক", "2" : 'দুই',"3" : 'তিন',"4" : "চার","5" : "পাঁচ","6" : "ছয়","7" : "সাত","8" : "আট", "9" :"নয়","10" : "দশ","11" : "এগারো",
    "12" : "বারো","13" : "তেরো","14" : "চৌদ্দ","15" : "পনেরো","16" : "ষোল","17" : "সতেরো", "18" : "আঠারো", "19" : "ঊনিশ","20" : "বিশ",
    "21" : "একুশ","22" : "বাইশ","23" : "তেইশ", "24" : "চব্বিশ","25" : "পঁচিশ","26" : "ছাব্বিশ","27" : "সাতাশ","28" : "আঠাশ","29" : "ঊনত্রিশ",
    "30" : "ত্রিশ","31" : "একত্রিশ","32" : "বত্রিশ","33" : "তেত্রিশ","34" : "চৌত্রিশ","35" : "পঁয়ত্রিশ","36" : "ছত্রিশ","37" : "সাইত্রিশ","38" : "আটত্রিশ",
    "39" : "ঊনচল্লিশ","40" : "চল্লিশ", "41" : "একচল্লিশ", "42" : "বিয়াল্লিশ","43" : "তেতাল্লিশ","44" : "চুয়াল্লিশ", "45" : "পঁয়তাল্লিশ","46" : "ছেচল্লিশ",
    "47" : "সাতচল্লিশ", "48" : "আটচল্লিশ","49" : "ঊনপঞ্চাশ","50" : "পঞ্চাশ","51" : "একান্ন", "52" : "বায়ান্ন","53" : "তিপ্পান্ন","54" : "চুয়ান্ন", 
    "55" : "পঞ্চান্ন", "56" : "ছাপ্পান্ন","57" : "সাতান্ন", "58" : "আটান্ন", "59" : "ঊনষাট", "60" : "ষাট", "61" : "একষট্টি", "62" : "বাষট্টি","63" : "তেষট্টি",
    "64" : "চৌষট্টি", "65" : "পঁয়ষট্টি", "66" : "ছেষট্টি","67" : "সাতষট্টি", "68" : "আটষট্টি", "69" : "ঊনসত্তর", "70" : "সত্তর" ,"71" : "একাত্তর",
    "72" : "বাহাত্তর","73" : "তিয়াত্তর", "74" : "চুয়াত্তর", "75" : "পঁচাত্তর", "76" : "ছিয়াত্তর","77" : "সাতাত্তর", "78" : "আটাত্তর", "79" : "ঊনআশি",
    "80" : "আশি", "81" : "একাশি","82" : "বিরাশি","83" : "তিরাশি", "84" : "চুরাশি", "85" : "পঁচাশি", "86" : "ছিয়াশি","87" : "সাতাশি", "88" : "আটাশি", 
    "89" : "ঊননব্বই","90" : "নব্বই", "91" : "একানব্বই","92" : "বিরানব্বই","93" : "তিরানব্বই", "94" : "চুরানব্বই", "95" : "পঁচানব্বই", "96" : "ছিয়ানব্বই",
    "97" : "সাতানব্বই", "98" : "আটানব্বই","99" : "নিরানব্বই"
}


function convertInBanglaFont(type,num2, num1='0')
{
    let temp=''
    let result=''
    temp= num1.toString()=="0"? '': num1.toString()
    temp+= num2.toString()
    if(temp!="0") result+=Codes[temp]+" "
    if(temp!="0" && type!='') result+=type+ " "
    return result
}

function getAmmountInPoisha(num)
{
    let result=''
    if(num.length>3)
    {
        num= num.substr(num.length-4,4)
        if((num[0]>='5'&& num[0]<='9') && (num[1]>='0'&& num[1]<='9') )
        {
           let temp= parseInt(num[1])+1
           num= temp.toString()+ num[2]+num[3]
        }
        else num= num.substr(num.length-3,3)
    }

    for(let i=num.length-1; i>=0; i--)
    {
       if(i!=0)
       {
           if((num[i]>'9' || num[i]<'0') || (num[i-1]>'9' || num[i-1]<'0')) return "Invalid format"
       }
       else{
          if(num[i]>'9' || num[i]<'0') return "Invalid format"
       } 

       if(i==2) result+=convertInBanglaFont('শত', num[i])
       else
       {
           if(i==1)
           {
               result+=convertInBanglaFont( '',num[i-1], num[i])
               i--;
           }
           else result+=convertInBanglaFont('', num[i])
       }
    }

    result= result==''?"শুন্য" : result
    return result
}

module.exports.getAmmountInBangla=(num)=>{
    if(!num) return "Please pass a number"
    let str= num.toString().split("").reverse().join("").replace(/,/g, '');
    let arr= str.split(".")
    let st='', pt=''
    if(arr.length>2) return "Invalid format"
    else if(arr.length==2)
    {
        pt=arr[0]
        st=arr[1]
    }
    else  st=arr[0]
    let poishaValue=''
    if(pt!='') poishaValue = getAmmountInPoisha(pt)
    if(poishaValue== "Invalid format") return poishaValue

    if(st.length>9) return "Out of the range"
    let result=''
    for(let i=st.length-1; i>=0; i--)
    {
       if(i!=0)
       {
           if((st[i]>'9' || st[i]<'0') || (st[i-1]>'9' || st[i-1]<'0')) return "Invalid format"
       }
       else{
          if(st[i]>'9' || st[i]<'0') return "Invalid format"
       } 


       if(i>=7)
       {
            if(i==8)
            {
               result+=convertInBanglaFont( 'কোটি',st[i-1], st[i])
               i--
            }
            else result+=convertInBanglaFont('কোটি', st[i])
       }
       else if(i>=5)
       {
            if(i==6)
            {
               result+=convertInBanglaFont( 'লক্ষ',st[i-1], st[i])
               i--;
            }
            else  result+=convertInBanglaFont('লক্ষ', st[i])
       }
       else if(i>=3)
       {
            if(i==4)
            {
                result+=convertInBanglaFont( 'হাজার',st[i-1], st[i])
                i--;
            }
            else result+=convertInBanglaFont('হাজার', st[i])
       }
       else if(i==2) result+=convertInBanglaFont('শত', st[i])
       else
       {
           if(i==1)
           {
               result+=convertInBanglaFont( '',st[i-1], st[i])
               i--;
           }
           else result+=convertInBanglaFont('', st[i])
       }
    }
    result= result==''? "শুন্য " : result
    result= result+ "টাকা "
    if(poishaValue!='' && poishaValue!="শুন্য") result+= poishaValue + "পয়শা"
    return result
}