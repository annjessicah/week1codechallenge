//the function generates the grades of sudents depending on the students marks from 0 to 100

let input= 80;

if (input>79){
    return'A';
}

else if(input<=79 && input >=60){
    return'B-';
}
else if (input<=59 && input>=49){
    return'c-';
}
    
else if(input<=48 && input>=40){
    return 'D-';
}

if (input<40){
    return'E';
}

