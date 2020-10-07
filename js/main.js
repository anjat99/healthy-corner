function ClearForm(form){

    form.weight.value = "";
    form.height.value = "";
    form.bmi.value = "";
    form.my_comment.value = "";

}

function bmi(weight, height) {

          bmindx=weight/eval(height*height);
          return bmindx;
}

function checkform(form) {

       if (form.weight.value==null||form.weight.value.length==0 || form.height.value==null||form.height.value.length==0){
            alert("\nPlease complete the form first");
            return false;
       }

       else if (parseFloat(form.height.value) <= 0||
                parseFloat(form.height.value) >=500||
                parseFloat(form.weight.value) <= 0||
                parseFloat(form.weight.value) >=500){
                alert("\nReally know what you're doing? \nPlease enter values again. \nWeight in kilos and \nheight in cm");
                ClearForm(form);
                return false;
       }
       return true;

}

function computeform(form) {

       if (checkform(form)) {

       yourbmi=Math.round(bmi(form.weight.value, form.height.value/100));
       form.bmi.value=yourbmi;

       if (yourbmi >40) {
          form.my_comment.value="Grubo ste gojazni, konsultujte svog lekara!";
       }

       else if (yourbmi >30 && yourbmi <=40) {
          form.my_comment.value="Hmm ... ti si gojazan/na, hoćeš li liposukciju?";
       }

       else if (yourbmi >27 && yourbmi <=30) {
          form.my_comment.value="Veoma si debeo/la, uradi nešto pre nego što bude prekasno";
       }

       else if (yourbmi >22 && yourbmi <=27) {
          form.my_comment.value="Debeli ste, trebate krenuti sa dijetom i sa vežbanjem";
       }

       else if (yourbmi >=21 && yourbmi <=22) {
          form.my_comment.value="Zavidim ti. Samo nastavi tako!!";
       }

       else if (yourbmi >=18 && yourbmi <21) {
          form.my_comment.value="Mršav si, jedi više.";
       }

       else if (yourbmi >=16 && yourbmi <18) {
          form.my_comment.value="Ti gladuješ. Idi nađi malo hrane!";
       }

       else if (yourbmi <16) {
          form.my_comment.value="Nedovoljno si uhranjen, potrebna ti je hospitalizacija ";
       }

       }
       return;
}

