//Binary Gap Problem//
solution(399);
function solution(N) {
  //look for the first 1
  var first1index=0;
  for(i=0;i<32;i++){
    if(getNthbit(N,i)==1){
      first1index=1;
      break;
    }
  }

  //from now on every 1 its a beginning of the end of a binary gap
  var currentGap=0;
  var biggestGap=0;

  //We check the next bit
  for(i=first1index;i<32;i++){


    //if its a zero
    if(getNthbit(N,i)==0){
      //we increment the current Gap by 1
      currentGap++;
      //if its a 1, then that is the end of the most recent binary gap
    }else{
      // we check if its the biggest gap so far
      if(currentGap>biggestGap) {
        //if so, we update the biggest gap
        biggestGap = currentGap;
      }
        //this is the end of the current gap.
        currentGap=0;
      }
    }
    // we do this until the end of the 32 bit integer
    console.log(biggestGap);
    return biggestGap;

  }

    function getNthbit(theNumber,bitPosition){
    var mask =1;
     var theNumberShifted =theNumber >> bitPosition;
    return theNumberShifted & mask;
  }

