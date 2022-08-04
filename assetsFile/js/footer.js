class Footer extends HTMLElement{
constructor(){
    super();

   
}

connectedCallback(){
    this.innerHTML = //html
    `
    <footer>
  <div class="footer-container">
  
    <hr>
    <div class="footer-main-section">
  
  <!--Help and Support  Section-->
      <div class="help-support-section">
        <h4>Help & Support</h4>
        <ul>
          <li><a href="#">FAQ</a></li>
          <li><a href="#">Contact Us</a></li>
          <li><a href="#">Stay safe</a></li>
        </ul>
      </div>
  
  
  <!--Follow ReSell.Com-->
      <div class="Follow-section">
        <h4>Follow ReSell.Com</h4>
        <ul>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Facebook</a></li>
          <li><a href="#">Twitter</a></li>
          <li><a href="#">Youtube</a></li>
        </ul>
      </div>
  
  
  
  <!--About ReSell.Com-->
      <div class="Follow-section">
        <h4>About ReSell.Com</h4>
        <ul>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Careers</a></li>
          <li><a href="#">Terms and Conditions</a></li>
          <li><a href="#">Privacy policy</a></li>
          <li><a href="#">Sitemap</a></li>
        </ul>
      </div>
  
  
  
  
    </div>
  
  
  
  
    <div class="copy-right-section">
      <hr>
      <div class="copy-right">
  <i class="d-flex justify-content-center mb-2 ">Copyright © ReSell.Com</i>
      </div>
    </div>
  
  </div>
  
  </footer>
 

    
    `
}
}

customElements.define('footer-component',Footer);