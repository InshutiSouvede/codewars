function getCount(str) {
    let leg = /['a','e','i','o','u']/g;
    let v = str.match(leg);
    return v? v.length :0
  //   count =0
  //   for(i=0;i<str.length;i++){
  //     if(str[i]=='a'||str[i]=='e'||str[i]=='i'||str[i]=='o'||str[i]=='u'){
  //        count +=1;
  //     }
         
  //   }
  //   return count;
  }
  