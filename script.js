const calcy = () =>{
     let wd = document.getElementById('wd').value;
     let Maths = document.getElementById('Maths').value;
     let English = document.getElementById('English').value;
     let Science = document.getElementById('Science').value;
     let grade = "";


     let totalGrades = parseFloat(wd) + parseFloat(Maths) + parseFloat(English) + parseFloat(Science);
    // alert("total grade is :" + totalGrades);

     let percentage = (totalGrades/400) * 100;
    // alert("your total percentage is :" + percentage);

     if(percentage <= 100 && percentage >=80){
         grade = "A";
     }else if(percentage <= 79 && percentage >= 60){
         grade = "B";
     }else if(percentage <= 59 && percentage >= 33){
        grade = "C";
     }else{
         grade = "fail";
     }

     if(percentage >= 39.5){
        document.getElementById('para').innerHTML = `out of 400 your total is : ${totalGrades}. and percentage is 
        : ${percentage}%. your grade is : ${grade}.you are pass ...`;
     }else{
        document.getElementById('para').innerHTML = `out of 400 your total is : ${totalGrades}. and percentage is 
        : ${percentage}%. your grade is : ${grade}.you are fail.sorry...`;
     }

};

