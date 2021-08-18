import React, {useEffect, useState} from 'react';
import './FaqSection.css'
import FAQ from "../../cards/faqCard/FAQ";

const FaqSection = () => {

    const initialData = [
        {
            title: "Sample Questions for the faqSection area of things ?",
            content: "lorem ipsum your way throught the development phase, and move at a speed of light. d of light. lorem",
            open:false,
        },
        {
            title: "Sample Questions for the faqSection area of things ?",
            content: "lorem ipsum your way throught the development phase, and move at a speed of light. ",
            open:false,
        },
        {
            title: "Sample Questions for the faqSection area of things ?",
            content: "lorem ipsum your way throught the development phase, and move at a speed of light. ",
            open:false,
        },
        {
            title: "Sample Questions for the faqSection area of things ?",
            content: "lorem ipsum your way throught the development phase, and move at a speed of light. ",
            open:false,
        },
        {
            title: "Sample Questions for the faqSection area of things ?",
            content: "lorem ipsum your way throught the development phase, and move at a speed of light. ",
            open:false,
        },
        {
            title: "Close ?",
            content: "Hey?",
            open:false,
        },
        {
            title: "Sample Questions for the faqSection area of things ?",
            content: "lorem ipsum your way throught the development phase, and move at a speed of light. ",
            open:false,
        },
    ];

    const [faqs, setFaqs] = useState(initialData);
    const [searchFaqs, setSearchFaqs] = useState("");


    const toggleFaq = (index) =>{
        setFaqs(faqs.map((faq, i) =>{
            if (i === index){
                faq.open = !faq.open;
            }else {
                faq.open = false;
            }
            return faq;
        }));
    }

    const searchFaqHandler = (event)=>{
        setSearchFaqs(prevState => event.target.value);
    }

    useEffect(() =>{
        if (searchFaqs !== ""){
            setFaqs(faqs.filter(value => value.title.toLowerCase().includes(searchFaqs)))
        }else {
            setFaqs(initialData);
        }
    }, [searchFaqs])


    return (
        <div>
            <div className="faq-search">
                <h1>F.A.Q</h1>
                <p>Here are some of the most asked question about our brand</p>
                <div>
                    <input type="text" value={searchFaqs} onChange={searchFaqHandler} placeholder="Search question..."/>
                </div>
            </div>

            <div className="faqs">
                {faqs.map((faq, index) => (
                   <FAQ faq={faq} index={index} toggleFaq={toggleFaq}/>
                ))}
            </div>

        </div>
    )
}

export default FaqSection
