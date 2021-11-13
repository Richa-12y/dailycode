import React from 'react';
import Button from './component/Button';

import './App.css';
import MovieCard from './component/MovieCard';
import MobileVersion from './component/MobileVersion';
import Recipe from './component/Recipe';
import Card from './Card';
import Buttondesgin from './Buttondesgin';

//  cardImg,seriesType,reting,castName
//cardHeading,text1,text2,text3,text4,
// regionName,cardImg, counteryName,recipeName,recipeDetails
//buttonoverwriteBackgroundColor,buttonText

function App ()
{
  return (
    <>
      <div>
        <Button text="welcome to react" changeButtonColor="red" />
        <Button text="Textme" changeButtonColor="blue" />
        <Button text="Textme2" changeButtonColor="red" />
      </div>
      <MovieCard cardImg ="https://s.yimg.com/fz/api/res/1.2/lrKuFr1thdgCNL1..ue2jg--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpdDtoPTEzMDtxPTgwO3c9OTc-/https://s.yimg.com/zb/imgv1/f0136b11-8899-3fb6-9762-49bdd4cf650a/t_500x300" seriesType="startUp" reting="4.8" castName="jin hoo"
      />  
      <MovieCard cardImg ="https://assets.pikiran-rakyat.com/crop/0x0:0x0/x/photo/2020/10/31/2801435618.jpg" seriesType="startUp" reting="4.8" castName="jin hoo"
      />
      <MobileVersion cardHeading="Mobile operating System" text1="iphone"  text2="Andorid" text3="Blckberry" text4="Win10"/>
      <MobileVersion cardHeading="Mobile Manufactures" text1="Samsunge"  text2="HTC" text3="Micromax" text4="Apple"/>
      
      <Recipe cardImg="https://wallpapershome.com/images/wallpapers/beef-3840x2160-steak-food-cooking-grill-vegetables-meal-meat-tomato-408.jpg" regionName="southIndia"counteryName="India" recipeName="Masala chicken" recipeDetails="onion,salt"/>

      <Recipe cardImg="https://tse2.mm.bing.net/th?id=OIP.J5zlK12SSqHVqYq5MYRBagHaEo&pid=Api&P=0&w=242&h=152" regionName="Bihar"counteryName="India" recipeName="Egg roll" recipeDetails="onion,salt,water"/>
     
<Card headingText="Time challange" cardImage="https://s.yimg.com/fz/api/res/1.2/lrKuFr1thdgCNL1..ue2jg--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpdDtoPTEzMDtxPTgwO3c9OTc-/https://s.yimg.com/zb/imgv1/f0136b11-8899-3fb6-9762-49bdd4cf650a/t_500x300"text1="welcome to time challange app" text2="no of step involved here"/>
<div className="deginButton">
<Buttondesgin buttonoverwriteBackgroundColor="#2e98c5" buttonText="Join Us"/>
<Buttondesgin buttonoverwriteBackgroundColor="#badde3" buttonText="Settings"/>
<Buttondesgin buttonoverwriteBackgroundColor="#f6891e" buttonText="Login"/>
<Buttondesgin buttonoverwriteBackgroundColor="#f39e9b" buttonText="Contact Us"/>
<Buttondesgin buttonoverwriteBackgroundColor="#b5de76" buttonText="Search"/>
<Buttondesgin buttonoverwriteBackgroundColor="#5e5d9d" buttonText="Help"/>
<Buttondesgin buttonoverwriteBackgroundColor="#fcb2dc" buttonText="Home"/>
<Buttondesgin buttonoverwriteBackgroundColor="#dfceae" buttonText="Donload"/>

</div>
</>    

    

  );
}

export default App;
