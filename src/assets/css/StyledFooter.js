import styled from 'styled-components'

const StyledFooter = styled.footer`
  position: relative;
  display: grid;
  height: 110vh;
  font-family: 'Caviar Dreams';
  grid-gap: 30px;
  justify-content: center;
  align-content: space-around;
  background: transparent;
  padding: 7vh 0;
  color: #f2f2f2;

  h2{
    text-align: center;
    font-size: 1.5em;
  }
  
  p{
    font-size: 8px;
    position:absolute;
    bottom: 2%;
    letter-spacing: 1.5pt;
    left: 50%;
    transform: translateX(-50%);

  }
 .contacto{
   padding-top:30px;
 }
  ul {
    
    height: 18vh;
    
  }
  
  ul li{
    
    padding: 0 0 0.5rem;
    margin:0 0 0.5rem;
    font-weight: bold;
    font-size: 9.5px;
    
    letter-spacing: 0.5pt;
    
  }
  ul li a {
    color: inherit;
    text-decoration: none;
      
  }
  ul li a:hover {
    color: #FC1EDF ;
  }
  .copyright {
    bottom:5%;
    font-size: 8px;
    text-align:center;
    
      }
  .icon {
    
  }
  .direction {
    line-height: 1.5; 
  }
  @media (min-width: 630px) {
    padding: 10vh;
    height: 200vh;
    ul{
      padding: 5px
    }
    ul li{
      font-size: 10px;
      letter-spacing: 1pt;
    }
    .copyright{
      font-size: 9px;
      bottom: 5px;
      letter-spacing: 0.5pt;
    }
    .icon{
      display: initial;
    }
  }
  @media (min-width: 1000px) {
    padding: 5vh;
    padding-top:0;
    margin-left:10%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    left:0px;
    flex-direction: row;
    height: 90vh;
    ul li{
      font-size: 18px;
      letter-spacing: 1.5pt;
      margin-bottom: 1em;
    }
    .copyright {
      position:absolute;
      font-size: 15px;
      bottom: 5%;
      letter-spacing: 1.5pt;
      left:35%
    }
    p{
    font-size: 15px;
    position:absolute;
    bottom: 1%;
    letter-spacing: 1.5pt;
  }
  }
 
  @media (min-width: 1500px) {
    height: 50vh;
  
    ul li{
      font-size: 18px;
    }
    .copyright {
      font-size: 15px;
    }
    p{
      display:none ;
    }
  }
`

export default StyledFooter

