var student_array=[];

function submit(){
    var student1=document.getElementById("S1").value;
    var student2=document.getElementById("S2").value;
    var student3=document.getElementById("S3").value;
    var student4=document.getElementById("S4").value;

    student_array.push(student1);
    student_array.push(student2);
    student_array.push(student3);
    student_array.push(student4);
    console.log(student_array);
    document.getElementById("display_array").innerHTML=student_array;

    document.getElementById("sub").style.display="none";
    document.getElementById("sor").style.display="inline-block";
}

function sorting(){
student_array.sort();
console.log(student_array);
    document.getElementById("display_array").innerHTML=student_array;

}