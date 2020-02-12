
var   // get the div that show the job info 
     job_details= document.getElementById('job_info'),
    // get the div that list available jbs
    job_listing = document.getElementById('job_listing');
    // btn details to show the job details & info
    /*
    detail_btn = document.getElementById('details'),
     // btn close to hide the job details & info
  //  close_btn1 = document.getElementById('close_btn');*/

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