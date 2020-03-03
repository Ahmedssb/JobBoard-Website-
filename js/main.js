     
$(document).ready(function(){
//validate the login form
 $('#login_form').validate({
    rules: {
      email: {
      required: true,
      email: true,
    },
    password: {
      required: true,
      minlength: 8,
    }
  },
  messages: {
    email: 'Enter a valid email',
    password: {
      minlength: 'Password must be at least 8 characters long'
    }
  },
  submitHandler: function(form) {
    form.submit();
  }
});
 }); 

//validate the login form for employer
$(document).ready(function(){
//validate the login form
 $('#company_login').validate({
    rules: {
      company_email: {
      required: true,
      email: true,
    },
    company_pass: {
      required: true,
      minlength: 8,
    }
  },
  messages: {
    company_email: 'Enter a valid email',
    company_pass: {
      minlength: 'Password must be at least 8 characters long'
    }
  },
  submitHandler: function(form) {
    form.submit();
  }
});
 }); 

/* candidate register validation */
$(document).ready(function(){
  $('#cand_register').validate({
    rules: {
       r_cand_name: {
      required: true,
      },
      r_cand_email: {
      required: true,
      email: true,
    },
    r_cand_pass: {
      required: true,
      minlength: 8,
    },
    r_cand_confirm:{
          required: true,
      minlength: 8,
      equalTo:"#r_cand_pass"

    }
  },
  messages: {
    r_cand_name:{
        required:'This field is required'
                },
    r_cand_email: 'Enter a valid email',
    r_cand_pass: {
      minlength: 'Password must be at least 8 characters long'
    },
    r_cand_confirm: {
      minlength: 'Password must be at least 8 characters long',
      equalTo:'password doesnot match'
    }  
  },
  submitHandler: function(form) {
    form.submit();
  }
});
 });

/* companies register validation */
$(document).ready(function(){
  $('#company_register').validate({
    rules: {
       r_comp_name: {
      required: true,
      },
      r_comp_email: {
      required: true,
      email: true,
    },
    r_comp_pass: {
      required: true,
      minlength: 8,
    },
    r_comp_confirm:{
          required: true,
      minlength: 8,
      equalTo:"#r_comp_pass"

    }
  },
  messages: {
    r_comp_name:{
        required:'This field is required'
                },
    r_comp_email: 'Enter a valid email',
    r_comp_pass: {
      minlength: 'Password must be at least 8 characters long'
    },
    r_comp_confirm: {
      minlength: 'Password must be at least 8 characters long',
      equalTo:'password doesnot match'
    }  
  },
  submitHandler: function(form) {
    form.submit();
  }
});
 });


var   // get the div that show the job info 
     job_details= document.getElementById('job_info'),
    // get the div that list available jbs
    job_listing = document.getElementById('job_listing'),
    skills =document.getElementById('skills'),
    add_skills =document.getElementById('add_skills');

 function showInfo(){  
     
 // change the class of job listing from col-md-8 to col-md-4  
 job_listing.className = "col-md-4";
    
// change the dispaly of job details to block to show the job info 
   job_details.setAttribute("style"," display: block;"); 
    
    }

// when close btn cliced hise the job info and change the job listing div class to col-md-8

function hideInfo(){  
 // change the dispaly of job details to block to hide the job info 
   job_details.setAttribute("style"," display: none;"); 
    
 // change the class of job listing from col-md-4 to col-md-8  
 job_listing.className = "col-md-8";   
    
    }

add_skills.onclick = function(){
    var new_input = document.createElement("input");
     new_input.setAttribute("type","text");
         new_input.setAttribute("style","margin-top:7px;");

    new_input.className="form-control";
   skills.appendChild(new_input);
}

 