import {React} from 'react'

export default function About(props) {

    let mystyle = ({
        color : props.mode==='dark'? 'white' : '#042743',
        backgroundColor : props.mode==='dark'? 'rgb(36  74 104)' : 'white'
    })

  return (
    <div className='container' style={mystyle}>
        <h1 className='my-2'>About us</h1>
        <div className="accordion pb-3" id="accordionExample" style={mystyle}>
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button"  type="button" style={mystyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Analyze your text
                    </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample" style={mystyle}>
                    <div className="accordion-body">
                        Textutils gives you a way to analyze your text quickly and ifficiently. Be it word count, character count or anything else.
                    </div>
                </div>
            </div>
            <div className="accordion-item" style={mystyle}>
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" style={mystyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Free to use
                    </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        Textutils is a free character counter tool that provides instant character count and word count statistics for a given text. Textutils reports the number of words and characters. Thus it is suitable for writing text with word/character limit.
                    </div>
                </div>
            </div>
            <div className="accordion-item" style={mystyle}>
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" style={mystyle} data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Browser compatible  
                    </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                    This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, excel document, pdf document, essays, etc.
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
