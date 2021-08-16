import React, { useState } from 'react';
import Faq from 'react-faq-component';
import { BiSearch } from 'react-icons/bi';
import './Faq.css'

const FaqSection = () => {

    const [search, setSearch] = useState('');

      const data =  [
              {
                title: "Sample Questions for the FAQ area of things ?",
                content: "lorem ipsum your way throught the development phase, and move at a speed of light. d of light. lorem"
              },
              {
                title: "Sample Questions for the FAQ area of things ?",
                content: "lorem ipsum your way throught the development phase, and move at a speed of light. "
              },
              {
                title: "Sample Questions for the FAQ area of things ?",
                content: "lorem ipsum your way throught the development phase, and move at a speed of light. "
              },
              {
                title: "Sample Questions for the FAQ area of things ?",
                content: "lorem ipsum your way throught the development phase, and move at a speed of light. "
              },
              {
                title: "Sample Questions for the FAQ area of things ?",
                content: "lorem ipsum your way throught the development phase, and move at a speed of light. "
              },
              {
                title: "Sample Questions for the FAQ area of things ?",
                content: "lorem ipsum your way throught the development phase, and move at a speed of light. "
              },
              {
                title: "Sample Questions for the FAQ area of things ?",
                content: "lorem ipsum your way throught the development phase, and move at a speed of light. "
              },
 ]


const [ displayedQuestion, setDisplayedQuestion] = useState(data);


  const filterFaq = (e) => {
    const searchedQuestion = e.target.value;

    if(searchedQuestion !== ''){
      const relatedFaq =  data.filter(val => val.title.toLocaleLowerCase().includes(searchedQuestion.toLocaleLowerCase()));
      setSearch( searchedQuestion);
      setDisplayedQuestion(relatedFaq);
      console.log(relatedFaq);
    }

  };
  // const doSomething = () => console.log("working...")


      return (
            <div className = "faq">
                  <div className="faq-search">
                        <h1>F.A.Q</h1>
                        <p>Here are some of the most asked question about our brand</p>
                        <div>
                              <BiSearch 
                              fontSize= "1.5rem"  
                              color="#999" 
                              className="icon"
                              />
                              <input type="search" placeholder =   " &nbsp; &nbsp; &nbsp; &nbsp; Search Questions" value={search}  onChange = {filterFaq}/>
                        </div>
                  </div>
                  <div className="faq-main">
                        <Faq data={ displayedQuestion}
                            styles={{
                              rowTitleColor: "#0A2463",
                              rowTitleTextSize: "1.5rem",
                              rowTitlePaddingBottom: "1.5rem",
                              rowContentColor: "#1a1a1a",
                              rowContentBorderBottom: "#fff",
                              rowContentPaddingTop: '1.4rem',
                              rowContentPaddingBottom: '2rem',
                    
                            }}
                    
                            config={{
                              arrowIcon: "+",
                          
                          }}
                        
                        />
                  </div>
            </div>
      )
}

export default FaqSection
