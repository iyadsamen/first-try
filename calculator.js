 let Calculation =  localStorage.getItem('Calculation') || '';
      
      displayCalculation();

      

      function updateCalculation (value) {
        Calculation += value;  
        
        
        displayCalculation();
       
        localStorage.setItem('Calculation', Calculation);
       
      }

      function saveCalculation() {
        localStorage.setItem('calculation', calculation);
      }

      function displayCalculation() {
        document.querySelector('.js-calculation').innerHTML = Calculation;
      }
      
