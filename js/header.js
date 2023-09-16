let header = document.getElementById("myheader");
if (header !== null) 
{
  header.innerHTML = ` 
  <head>
  
  
  <style>
    
    
  #intro {
    /* Margin to fix overlapping fixed navbar */
    margin-top: 0px;
  }

  @media (max-width: 991px) {
    #intro {
      /* Margin to fix overlapping fixed navbar */
      margin-top: 45px;
    }
  }
</style>
  </head>
     <div class="navigationbar">
     <nav class="navbar navbar-expand-lg navbar-light ">
     <div class="container-fluid">
         <a class="navbar-brand" href="index.html"><img
                 src="./c/Fake-Tweet-Generator-Logo.svg" height="30"
                 alt="Fake Twitter Tweet Post Generator, Fake TW
                 Maker"
                 /></a>
         <button
             class="navbar-toggler"
             type="button"
             data-bs-toggle="collapse"
             data-bs-target="#mainnav"
             aria-controls="mainnav"
             aria-expanded="false"
             aria-label="Toggle navigation">
             <i class="fas fa-bars"></i>
         </button>
         <div class="navbar-nav collapse navbar-collapse mainnav"
             id="mainnav">
             <ul class="navbar-nav nav-links ms-5 pe-5">
                 <!-- 1st Page Start - Fake Tweet -->
                 <li class="nav-item">
                     <a class="nav-link active"
                         href="Fake-Tweet-Generator.html">Fake Tweet</a>
                 </li>
                 <!-- 1st Page End - Fake Tweet -->

                 <!-- 2nd Page Start - Fake Reply Chain -->
                 <li class="nav-item">
                     <a class="nav-link active"
                         href="Fake-Tweet-Reply-Chain.html">Fake
                         Reply Chain</a>
                 </li>
                 <!-- 2nd Page End - Fake Reply Chain -->

                 <!-- 3rd Page Start - Twitter Block -->
                 <li class="nav-item">
                     <a class="nav-link active"
                         href="Fake-Twitter-Account-Block.html"> Fake
                         Twitter Block</a>
                 </li>
                 <!-- 3rd Page End - Twitter Block -->


                 <!-- 4th Page Start - Twitter Suspension -->
                 <li class="nav-item">
                     <a class="nav-link active"
                         href="Twitter-Account-Suspension.html"> Fake
                         Twitter Suspension</a>
                 </li>
                 <!-- 4th Page End - Twitter Suspension -->

                 <!-- 4th Page Start - Blog -->
                 <li class="nav-item">
                     <a class="nav-link active"
                         href="blogs.html"> Blogs
                     </a>
                 </li>
                 <!-- 4th Page End - Blog -->
             </ul>
         </div>
     </div>
 </nav>
        </div>`;
}
