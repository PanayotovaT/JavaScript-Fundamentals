function printCertificate(grade, namesArray){

    if(pass(grade)){
        printHeader();
        printName(namesArray);
        formatGrade(grade);

    } else {
        console.log(`${namesArray[0]} ${namesArray[1]} does not qualify`)
    }

    function pass(grade){
        return grade >=3;
    }

    function printHeader() {
        console.log('~~~-   {@}   -~~~');
        console.log('~- Certificate -~');
        console.log('~~~-  ~---~  -~~~');
      }
    
    function printName(nameArr){

        console.log(nameArr[0] + ' ' + nameArr[1]);
    }

    function formatGrade(grade){
        let result = '';

        if(grade < 3){
            result = 'Fail (2)';

        } else if (grade < 3.5){
            result = `Poor (${grade.toFixed(2)})`; 

        } else if (grade < 4.5) {
            result = `Good (${grade.toFixed(2)})`; 

        } else if (grade < 5.5){
            result = `Very good (${grade.toFixed(2)})`; 
        } else {
            result = `Excellent (${grade.toFixed(2)})`; 

        }

        console.log(result);
    }


}
printCertificate(2.5, ['John', 'Smith'])