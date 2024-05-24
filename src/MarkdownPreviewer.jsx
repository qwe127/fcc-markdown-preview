import React, {useState} from 'react'
import ReactMarkdown from 'react-markdown'

function MarkdownPreviewer(){
    const [text, setText] = useState('# H1 element. \n## H2 element. \n[Link](https://youtu.be/nkkpE6xdcnU) element.   \nInline code `<div></div>` element.  \n```\nCode block element \n```     \n- List element 1.\n - List element 2.\n  - List element 3.\n> Blockquote element \n![Image Element](/src/assets/images/14.jpg)  \n**Bold Text** \n')    

    const handleChange = (event) => {
        setText(event.target.value);
    }
    return(
        <div className='main-container'>
            <h1 id='title'>Markdown Previewer</h1>
            <div className='text-boxes'>
                <textarea id='editor' value={text} onChange={handleChange}></textarea>
                <div id='preview'>
                    <ReactMarkdown>{text}</ReactMarkdown>
                </div>
            </div>
        </div>
    )
}

export default MarkdownPreviewer