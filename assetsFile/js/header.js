
class Header extends HTMLElement{

constructor(){
    super();
}


connectedCallback(){
  
    this.innerHTML = /*html*/
    
    `
    
    <header>
    <section>
        <div class="header-top-section">
            <div class="logo-section">
                <div class="logo">
                    <img src="https://www.designevo.com/res/templates/thumb_small/gorgeous-yellow-handbag.webp" alt="">
                </div>
            </div>

            <div class="search-section">     
                <div class="search-box">
                    <input type="text" name="" id="" placeholder="Search your Item">
             
                  <div class="search-icon">
                    <span onclick="hellow()">&#9906;</span>
                  </div>
                  
                </div>

            </div>
            
            <div class="contact-section">
                <h3 >HelpLine</h3>
                <h5>8801890492444</h5>
            </div>

        </div>

    </section>


    <!--Navigation Menu-->

    <nav class=" ">
        <ul class="" >
            <li class=""><a class="nav-link" href="index.html">Home</a></li>
            <li class=""><a class="nav-link" href="dashboard.html">Dashboard</a></li>

            <li  class=""><a class="nav-link" href="#">MyBill</a></li>
            <li  class=""><a class="nav-link" href="SellOption.html">Sell Option</a></li>
            <li  class=""><a class="nav-link" href="profile.html">Profile</a></li>
            <li  class=""><a class="nav-link" href="CreateAcount.html">Create acount</a></li>
            <li  class=""><a class="nav-link" href="LoginPage.html">Login</a></li>

            
            <li  class=""><a class="nav-link" >&#9993;</a> <span class="notification-badge">8</span> </li>
        </ul>
    </nav>

</header>


    `;


    
}



}



customElements.define('header-component',Header)

